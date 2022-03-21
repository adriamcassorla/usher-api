import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY as string;

export const createUser =async (_, args : {email: string, password: string, first_name: string, last_name: string, notifications: boolean}, ctx) => {

  const { email, password, first_name, last_name, notifications } = args;
  if(!email || !password) {
    console.error('Provide valid email and password');
    return
  }
  const user = await ctx.prisma.user.findUnique({
    where: {
      email
    }
  })
  if (user) {
    console.error('User already exists!')    
    return
  }
  try {

    const hash = await bcrypt.hash(password, 10);
    console.log(hash)
    const newUser = await ctx.prisma.user.create({
      data: {
        email,
        password: hash,
        first_name,
        last_name,
        notifications
      },
    })
    console.log(newUser)
    const accessToken = jwt.sign({ id: newUser.id, role: 'user' }, SECRET_KEY, {expiresIn: '10h'})
    return accessToken
  } catch (e) {
    console.error(e);
    return 'Unsuccesful to generate new user'
  }
}

export const login = async (_, args: {email: string, password: string}, ctx) => {
  const { email, password } = args;
  try {

    const user = await ctx.prisma.user.findUnique({ where: { email } })
    const validatePass = bcrypt.compare(password, user.password)
    if (!validatePass) {
      throw new Error('Invalid user or password')
    }
    const accessToken = jwt.sign({ id: user.id, role: 'user' }, SECRET_KEY, {expiresIn: '10h'})
    return accessToken;
  } catch (e) {
    console.error(e);
    return 'Invalid user or password'
  }

}