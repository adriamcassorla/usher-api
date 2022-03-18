import prisma from '../../prisma/client';
import moment from 'moment'

export const getShows = async (_, args: {city: string}) => {
  const { city } = args;
  console.log(city)
  const today = moment().toDate();
  const tomorrow  = moment().add(1,'days').toDate();
  const shows = await prisma.show.findMany({
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
  }) 
  return shows;
}