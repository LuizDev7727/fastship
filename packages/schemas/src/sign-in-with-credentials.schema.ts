import { z } from "zod"

export const signInWithCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})