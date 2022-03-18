import moment from 'moment'

export const getShows = async (_, args: {city: string}, context) => {
  const { city } = args;
  console.log(city)
  const today = moment().toDate();
  const tomorrow  = moment().add(1,'days').toDate();
  const shows = await context.prisma.show.findMany({
    where: {
      event: {
        venue: {
          city
        }
      },
      date: {
        lt: tomorrow,
        gt: today
      }
    },
    include: {
      event: {  
        include: {
          venue: true
      }
    }
  }
})

  return shows;
}