import { PrismaClient } from "@prisma/client";

export const getProfile = async (id: string, prisma: PrismaClient) => {
  const profile = await prisma.user.findUnique({
    where: { id },
    include: {
      favorite_events: true,
      tickets: {
        include: {
          show: {
            include: {
              event: {
                include: {
                  venue: true
                }
              }
            }
          }
        }
      }
    }
  })
  return profile;
}

export const getPromoterProfile = async (id: number, prisma: PrismaClient) => {
  const promoter = await prisma.promoter.findUnique({
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
  return promoter;
}