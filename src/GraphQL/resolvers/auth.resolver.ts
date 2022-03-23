import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ContextType } from '../../Types/context-type'
import { getUser } from '../../Helpers/user';
const SECRET_KEY = process.env.SECRET_KEY as string;

export const createUser = async (_, args: { email: string, password: string, first_name: string, last_name: string }, ctx: ContextType) => {

  const { email, password, first_name, last_name } = args;
  const notifications = false;
  if (!email || !password) {
    console.error('Provide valid email and password');
    return { error: 'Provide valid email and password'}
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await ctx.prisma.user.create({
      data: {
        email,
        password: hash,
        first_name,
        last_name,
        notifications
      },
      include: {
        favorite_events: true,
      }
    })
    const token = jwt.sign({ id: user.id, role: 'user' }, SECRET_KEY)
    return { user, token }
  } catch (e) {
    console.error(e);
    return { error: 'Unsuccesful, unable to generate new user.' }
  }

}

export const login = async (_, args: { email: string, password: string }, ctx: ContextType) => {

  if (ctx.user) {
    const user = await getUser(ctx.user.id, ctx.prisma)
    if (user) return { user }
    return { error: 'User not found for existing token' }
  } else {

    const { email, password } = args;
    try {
      const user = await ctx.prisma.user.findUnique({
        where: { email },
        include: {
          favorite_events: true,
          tickets: true,
        }
      })
      if (user) {
        const validatePass = bcrypt.compare(password, user.password)
        if (!validatePass) {
          return { error: 'Invalid user or password' }
        }
        const token = jwt.sign({ id: user.id, role: 'user' }, SECRET_KEY)
        return { user, token }
      }
    } catch (e) {
      console.error(e);
      return { error: 'Invalid user or password' }
    }
  }
}
