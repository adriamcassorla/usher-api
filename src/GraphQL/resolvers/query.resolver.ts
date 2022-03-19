import { DateTime } from 'luxon'

export const getCityEvents = async (_, args: { city: string, dayRange: number }, ctx) => {
  try {

    const { city, dayRange } = args;
    const today = DateTime.local();
    const tomorrow = today.plus({ days: dayRange })
    const shows = await ctx.prisma.event.findMany({
      where: {
        venue: {
          city
        },
        shows: {
          some: {
            date: {
              lt: tomorrow.toJSDate(),
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

export const getEvent = async (_, args: { id: Number }, ctx) => {
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
}