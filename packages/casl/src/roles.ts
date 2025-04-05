import { z } from 'zod'

export const roleSchema = z.union([
  z.literal('FREE'),
  z.literal('PRO'),
  z.literal('BUSINESS'),
])

export type Role = z.infer<typeof roleSchema>
