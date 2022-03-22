import { PrismaClient } from "@prisma/client"

export type ContextType = {
  prisma: PrismaClient,
  user?: {
    id: string,
    role: string,
  }
}