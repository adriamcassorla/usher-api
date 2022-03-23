import { getUser } from "../../Helpers/user";

// Should be fixed to toggle favorite.
export const addFav = async (_, args: {eventId: number}, ctx) => {
  
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
            connect: {id: eventId}
          } 
        },
        include: {
          favorite_events: true
        }
      })
      return favorite.favorite_events;
    } catch (e) {
      console.error(e)
      return
    }
  }
  return
}

export const deleteFav = async (_, args: {eventId: number}, ctx) => {
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
            disconnect: {id: eventId}
          } 
        },
        include: {
          favorite_events: true
        }
      })
      return favorite.favorite_events;
    } catch (e) {
      console.error(e)
      return
    }
  } 
  return
    
  }
  
  export const createTicket = async (_, args: {userId: string, showId: string}, ctx) => {

  try {
    const { userId, showId } = args;
    const ticket = await ctx.prisma.ticket.create({
      data: {
        user_id: userId,
        show_id: showId,
        used: false,
      },
      // Should we include show and user info for the greeting page?
      include: {
        show: true,
        user: true,
      }
    })
    return ticket
  } catch (e) {
    console.error(e)
    return
  }
}

export const useTicket = async (_, args: {id: string}, ctx) => {

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