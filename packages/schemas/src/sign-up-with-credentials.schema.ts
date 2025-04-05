import { z } from "zod"

export const signUpWithCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
})