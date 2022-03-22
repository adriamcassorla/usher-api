import { PrismaClient } from "@prisma/client";

export const getUser = async (id: string, prisma: PrismaClient) => {
  const profile = await prisma.user.findUnique({
    where: {
      id
    },
    include: {
      favorite_events: true,
      tickets: true
    }
  })
  return profile;
} 