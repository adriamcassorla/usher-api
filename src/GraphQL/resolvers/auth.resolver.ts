import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ContextType } from '../../Types/context-type'
import { getProfile } from '../../Helpers/user';
import { prisma } from '@prisma/client';
import { userInfo } from 'os';
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
        tickets: {
          include: {
            show: {
              include: {
                event: {
                  include: {
                    venue: true
                  }
                }
              }
            }
          }
        }
      }
    })
    const token = jwt.sign({ id: user.id, role: 'user' }, SECRET_KEY)
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

export const getPromoter = async (_, args: { email: string, password: string }, ctx: ContextType) => {
  if (ctx.user && ctx.user.role === 'PROMOTER') {
    const promoter = await ctx.prisma.promoter.findUnique({
      where: {
        id: +ctx.user.id,
      },
      include: {
        venues: true
      }
    })
    if (promoter) return { promoter };
    return { error: 'Promoter not found for existing token' }
  } else {
    const { email, password } = args;
    try {
      const promoter = await ctx.prisma.promoter.findUnique({
        where: { email },
        include: {
          venues: true,
        }
      })
      if (promoter) {
        const validatePass = bcrypt.compare(password, promoter.password)
        if (!validatePass) {
          return { error: 'Invalid email or password'}
        }
        const token = jwt.sign({ id: promoter.id.toString(), role: 'PROMOTER' }, SECRET_KEY)
        return { promoter, token } 
      }
    } catch (e) {
      console.error(e);
      return { error : 'Invalid email or password' }
    }
  }
}

export const createPromoter = async (_, args: { email: string, password: string, telephone: number, name: string}, ctx: ContextType) => {
  console.log('Being created')
  const { email, password, name, telephone} = args;
  if (!email || !password) {
    console.error('Provide valid email and password');
    return { error: 'Provide valid email and password' }
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const promoter = await ctx.prisma.promoter.create({
      data: {
        email,
        password: hash,
        name,
        telephone,
      },
      include: {
        venues: true,
      }
    })
    const token = jwt.sign({ id: promoter.id, role: 'PROMOTER'}, SECRET_KEY)
    return { promoter, token}
  } catch (e) {
    console.error(e);
    return { error: 'Unsuccesful, unable to generate new promoter'}
  }
}
