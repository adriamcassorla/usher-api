import { DateTime } from 'luxon'
import { ContextType } from '../../Types/context-type';

export const getCityEvents = async (_, args: { city: string, dayRange: number }, ctx: ContextType) => {

  try {

    const { city, dayRange } = args;
    const today = DateTime.local();
    const limitDay = today.plus({ days: dayRange })
    const shows = await ctx.prisma.event.findMany({
      where: {
        venue: {
          city
        },
        shows: {
          some: {
            date: {
              lt: limitDay.toJSDate(),
              gt: today.toJSDate()
            }
          }
        }
      },
      include: {
        venue: true,
        shows: true
      }
    })

    return shows;
  } catch (e) {
    console.log(e);
  }
  // Filter by active and seats available?.
}

export const getEvent = async (_, args: { id: number }, ctx: ContextType) => {
  try {
    const { id } = args;
    const event = await ctx.prisma.event.findUnique({
      where: {
        id
      },
      include: {
        venue: true,
        shows: true
      }
    })
    return event;

  } catch (e) {
    console.error(e);
  }
}

export const getProfile = async (_, __, ctx: ContextType) => {
  if (!ctx.user) return null
  try {
    const profile = await ctx.prisma.user.findUnique({
      where: {
        id: ctx.user.id
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
    return profile
  } catch (e) {
    console.error(e);
  }
}