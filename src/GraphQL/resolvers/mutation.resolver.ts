
export const addFav = async (_, args: {userId: String, eventId: String}, ctx) => {
  
  const { userId, eventId } = args;
  try {
    const favorite = ctx.prisma.user.update({
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

export const deleteFav = async (_, args: {userId: String, eventId: String}, ctx) => {
  
  const { userId, eventId } = args;
  try {
    const favorite = ctx.prisma.user.update({
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