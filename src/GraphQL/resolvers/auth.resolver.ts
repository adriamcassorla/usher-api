import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ContextType } from '../../Types/context-type'
import { getProfile, getPromoterProfile } from '../../Helpers/auth';
const SECRET_KEY = process.env.SECRET_KEY as string;

type cuArgs = { email: string, password: string, first_name: string, last_name: string };
export const createUser = async (_, args: cuArgs, ctx: ContextType) => {

  const { email, password, first_name, last_name } = args;
  const notifications = false;
  if (!email || !password) {
    console.error('Provide valid email and password');
    return { error: 'Provide valid email and password' }
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await ctx.prisma.user.create({
      data: {
        email,
        password: hash,
        first_name,
        last_name,
        notifications
      }
    })
    const token = jwt.sign({ id: newUser.id, role: 'user' }, SECRET_KEY)
    const user = await getProfile(newUser.id, ctx.prisma)
    return { user, token }
  } catch (e) {
    console.error(e);
    return { error: 'Unsuccesful, unable to generate new user.' }
  }

}

type guArgs = { email: string, password: string }
export const getUser = async (_, args: guArgs, ctx: ContextType) => {

  if (ctx.user) {
    const user = await getProfile(ctx.user.id, ctx.prisma)
    if (user) return { user }
    return { error: 'User not found for existing token' }
  } else {

    const { email, password } = args;
    if (!email) return { error: 'No email sended' }
    console.log(email)
    try {
      const userInit = await ctx.prisma.user.findUnique({
        where: { email },
      })
      if (userInit) {
        const validatePass = await bcrypt.compare(password, userInit.password)
        if (!validatePass) {
          return { error: 'Invalid user or password' }
        }
        const token = jwt.sign({ id: userInit.id, role: 'user' }, SECRET_KEY)
        const user = await getProfile(userInit.id, ctx.prisma)
        return { user, token }
      }
    } catch (e) {
      console.error(e);
      return { error: 'Invalid user or password' }
    }
  }
}


type gpType = { email: string, password: string };
export const getPromoter = async (_, args: gpType, ctx: ContextType) => {
  if (ctx.user && ctx.user.role === 'PROMOTER') {
    const promoter = await getPromoterProfile(+ctx.user.id, ctx.prisma);
    if (promoter) return { promoter };
    return { error: 'Promoter not found for existing token' }
  } else {
    const { email, password } = args;
    try {
      const promoterInit = await ctx.prisma.promoter.findUnique({ where: { email } })
      if (promoterInit) {
        const validatePass = bcrypt.compare(password, promoterInit.password)
        if (!validatePass) {
          return { error: 'Invalid email or password' }
        }
        const token = jwt.sign({ id: promoterInit.id.toString(), role: 'PROMOTER' }, SECRET_KEY)
        const promoter = await getPromoterProfile(promoterInit.id, ctx.prisma);
        return { promoter, token }
      }
    } catch (e) {
      console.error(e);
      return { error: 'Invalid email or password' }
    }
  }
}


type cpType = { email: string, password: string, telephone: number, name: string };
export const createPromoter = async (_, args: cpType, ctx: ContextType) => {
  const { email, password, name, telephone } = args;
  if (!email || !password) {
    return { error: 'Provide valid email and password' }
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const newPromoter = await ctx.prisma.promoter.create({
      data: {
        email,
        password: hash,
        name,
        telephone,
      }
    })
    const token = jwt.sign({ id: newPromoter.id, role: 'PROMOTER' }, SECRET_KEY)
    const promoter = await getPromoterProfile(newPromoter.id, ctx.prisma);
    return { promoter, token }
  } catch (e) {
    console.error(e);
    return { error: 'Unsuccesful, unable to generate new promoter' }
  }
}
