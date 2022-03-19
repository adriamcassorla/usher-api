import moment from 'moment'

export const getCityEvents = async (_, args: {city: string}, ctx) => {
  try {

    const { city } = args;
    const today = moment().toDate();
    const tomorrow  = moment().add(1,'days').toDate();
    const shows = await ctx.prisma.event.findMany({
    where: {
      venue: {
        city
      },
      shows: {
        some: {
          date: {
            lt: tomorrow,
            gt: today
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
        venue: true
      }
    })
    return event;

  } catch (e) {
    console.error(e);
  }
}

export const getProfile = async (_, args : {id : string}, ctx) => {
  
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
}