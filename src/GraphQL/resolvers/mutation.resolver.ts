import { ContextType } from "../../Types/context-type";

type afArgs = { eventId: number };
export const addFav = async (_, args: afArgs, ctx: ContextType) => {
  if (ctx.user) {
    const userId = ctx.user.id
    const { eventId } = args;
    try {
      const favorite = await ctx.prisma.user.update({
        where: {
          id: userId
        },
        data: {
          favorite_events: {
            connect: { id: eventId }
          }
        },
        include: {
          favorite_events: true
        }
      })
      return favorite;
    } catch (e) {
      console.error(e)
      return
    }
  }
  return
}

type dfArgs = { eventId: number };
export const deleteFav = async (_, args: dfArgs, ctx: ContextType) => {
  if (ctx.user) {
    const userId = ctx.user.id;
    const { eventId } = args;
    try {
      const favorite = await ctx.prisma.user.update({
        where: {
          id: userId
        },
        data: {
          favorite_events: {
            disconnect: { id: eventId }
          }
        },
        include: {
          favorite_events: true
        }
      })
      return favorite;
    } catch (e) {
      console.error(e)
      return
    }
  }
  return

}

type ctArgs = { show_id: string, nSeats: number };
export const createTickets = async (_, args: ctArgs, ctx: ContextType) => {

  if (!ctx.user) return { error: 'Unable to identify user from request.' }

  const user_id = ctx.user.id;
  try {
    const { show_id, nSeats } = args;

    // Check seats available for that show
    const showSeats = await ctx.prisma.show.findUnique({
      where: {
        id: show_id,
      },
      select: {
        available_seats: true,
      }
    })
    const available_seats = showSeats?.available_seats || 0;
    if (!showSeats || available_seats <= nSeats) {
      return { error: 'Number of seats required is greater than seats available.' }
    }

    // If there are enough seats, generates nSeats tickets.
    const data = Array(nSeats).fill({ user_id, show_id, used: false, })
    const tickets = await ctx.prisma.ticket.createMany({ data })
    if (tickets.count !== nSeats) return { error: 'Internal error' }

    // Updates the available seats of the show.
    const show = await ctx.prisma.show.update({
      data: {
        available_seats: available_seats - nSeats,
      },
      where: { id: show_id },
      include: {
        event: true
      }
    })
    return { show } // Returns the show info
  } catch (e) {
    console.error(e)
    return { error: String(e) }
  }
}

type utArgs = { showId: string, ticketId: string };
export const validateTicket = async (_, args: utArgs, ctx: ContextType) => {
  try {
    const { showId, ticketId } = args;
    const { count } = await ctx.prisma.ticket.updateMany({
      where: {
        id: ticketId,
        show_id: showId,
        used: false
      },
      data: {
        used: true
      }
    })
    if (count === 1) {
      return { ticket: ticketId };
    } else {
      return {
        error: 'Ticket not valid or already used'
      }
    }
  } catch (e) {
    return { error: 'Ticket not valid or already used' }
  }
}



type ceArgs = { event: EventInput, shows: ShowInput[] };
export const createEvent = async (_, args: ceArgs, ctx: ContextType) => {
  if (!ctx.user || ctx.user.role === 'PROMOTER') {
    return { error: 'Unauthorised' }
  }
  try {
    const { event, shows } = args;
    const formatedShows = shows.map(show => {
      return {
        ...show,
        date: new Date(+show.date)
      };
    })
    const newEvent = await ctx.prisma.event.create({
      data: {
        ...event,
        shows: {
          create: formatedShows
        }
      },
      include: {
        shows: true
      }
    })
    console.log(newEvent)
    if (newEvent) return { event: newEvent };
    return { error: 'There has been an error while creting a new event' }
  } catch (e) {
    console.error(e)
    return { error: 'There has been an error while creting a new event' }
  }
}