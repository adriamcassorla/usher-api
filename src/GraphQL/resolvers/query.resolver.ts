import { DateTime } from 'luxon'
import { ContextType } from '../../Types/context-type';

type gceArgs = { city: string, dayRange: number };
export const getCityEvents = async (_, args: gceArgs, ctx: ContextType) => {

  try {
    const { city, dayRange } = args;
    const today = DateTime.local();
    const limitDay = today.plus({ days: dayRange }) //Not used now
    const shows = await ctx.prisma.event.findMany({
      where: {
        venue: {
          city
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
}

type geArgs = { id: number };
export const getEvent = async (_, args: geArgs, ctx: ContextType) => {
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