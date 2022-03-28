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

type vsArgs = { id: string };
export const validateShow = async (_, args: vsArgs, ctx: ContextType) => {
  try {
    const { id } = args;
    const show = await ctx.prisma.show.findUnique({
      where: {
        id
      },
      include: {
        event: true
      }
    })
    if (show) {
      const today = DateTime.local();
      const showDate = DateTime.fromJSDate(new Date(show.date));
      if (showDate.hasSame(today, 'day')) {
        return { show }
      }
      return { error: 'Only shows for today can be validated.' }
    }
    return { error: 'Show not valid' }
  } catch (e) {
    return { error: 'Show not valid' }
  }
}



type tuArgs = { id: string };
export const getTicketUsage = async (_, args: tuArgs, ctx: ContextType) => {
  try {
    const { id } = args;
    const ticket = await ctx.prisma.ticket.findUnique({
      where: {
        id
      },
    })
    if (ticket) {
      return { used: ticket.used }
    }
    return { error: 'Ticket not found' }
  } catch (e) {
    return { error: 'Ticket not found' }
  }
}

type ppArgs = { id: number };
export const getPromoterProfile = async (_, args: ppArgs, ctx: ContextType) => {
  try {
    const { id } = args;
    const promoter = await ctx.prisma.promoter.findUnique({
      where: {
        id
      },
      include: {
        venues: {
          include: {
            events: {
              include: {
                shows: {
                  include: {
                    tickets: true
                  }
                }
              }
            }
          }
        }
      }
    })
    if (promoter) {
      return { promoter }
    }
    return { error: 'Promoter not found' }
  } catch (e) {
    console.error(e)
    return { error: 'Promoter not found' }
  }
}

type gvArgs = { id: string };
export const getVenueInfo = async (_, args: gvArgs, ctx: ContextType) => {
  try {
    const { id } = args;
    const venue = await ctx.prisma.venue.findUnique({
      where: {
        id
      },
      include: {
        events: {
          include: {
            shows: {
              include: {
                tickets: true
              }
            }
          }
        }
      }
    })
    if (venue) {
      return { venue }
    }
    return { error: 'Venue not found' }
  } catch (e) {
    console.error(e)
    return { error: 'Venue not found' }
  }
}