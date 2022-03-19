// Should be fixed to toggle favorite.
export const addFav = async (_, args: {userId: String, eventId: Number}, ctx) => {
  
  const { userId, eventId } = args;
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
  }

}

export const deleteFav = async (_, args: {userId: String, eventId: Number}, ctx) => {
  
  const { userId, eventId } = args;
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
  }

}

export const createTicket = async (_, args: {userId: String, showId: String}, ctx) => {

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
  }
}

export const useTicket =async (_, args: {id: String}, ctx) => {

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
  }
}