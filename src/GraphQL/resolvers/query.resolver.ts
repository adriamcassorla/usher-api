import { DateTime } from 'luxon'

export const getCityEvents = async (_, args: { city: string, dayRange: number }, ctx) => {
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

export const getEvent = async (_, args: {id: Number}, ctx) => {
  try {
    const { id } = args;
    const event = await ctx.prisma.event.findUnique({
      where : {
        id
      },
      include : {
        venue: true,
        shows: true
      }
    })
    return event;

  } catch (e) {
    console.error(e);
  }
}

export const getProfile = async (_, args : {id : string}, ctx) => {
  
  try {
    const { id } = args;   
    const profile = await ctx.prisma.user.findUnique({
      where: {
        id
      },
      include : {
        favorite_events: true,
        tickets: true
      }
    })  
    return profile
  } catch (e) {
    console.error(e);
  }
}