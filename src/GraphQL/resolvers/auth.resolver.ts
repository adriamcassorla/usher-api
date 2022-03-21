import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY as string;

export const createUser =async (_, args : {email: string, password: string}, ctx) => {

  const { email, password } = args;
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
    const newUser = await ctx.prisma.user.create({
      data: {
        email,
        password: hash,
      }
    })
    const accessToken = jwt.sign({ id: newUser.id, role: 'user' }, SECRET_KEY, {expiresIn: '10h'})
    return accessToken
  } catch (e) {
    console.error('Unsuccesful to generate new user');
    return
  }
}

export const login = async (_, args: {email: string, password: string}, ctx) => {
  const { email, password } = args;
  try {

    const user = await ctx.prisma.user.findUnique({ where: email })
    const validatePass = bcrypt.compare(password, user.password)
    if (!validatePass) {
      throw new Error('Invalid user or password')
    }
    const accessToken = jwt.sign({ id: user.id, role: 'user' }, SECRET_KEY, {expiresIn: '10h'})
    return accessToken;
  } catch (e) {
    console.error('Invalid user or password');
    return
  }

}