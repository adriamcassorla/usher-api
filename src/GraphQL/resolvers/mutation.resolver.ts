import { ContextType } from "../../Types/context-type";

// Should be fixed to toggle favorite.
export const addFav = async (_, args: { eventId: number }, ctx: ContextType) => {

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

export const deleteFav = async (_, args: { eventId: number }, ctx: ContextType) => {
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

export const createTickets = async (_, args: { show_id: string, nSeats: number }, ctx: ContextType) => {

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

    // If there are enouh seats, generates nSeats tickets.
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

export const useTicket = async (_, args: { id: string }, ctx: ContextType) => {

  try {
    const { id } = args;
    const ticket = ctx.prisma.ticket.update({
      where: {
        id
      },
      data: {
        used: true
      }
    })
    return ticket;
  } catch (e) {
    console.error(e);
    return
  }
}