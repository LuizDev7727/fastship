import type { User } from '../entities/user/user.domain'

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>
  abstract findById(id: string): Promise<User | null>
  abstract findByEmail(email: string): Promise<User | null>
  abstract create(newUser: User): Promise<void>
  abstract save(user: User): Promise<void>
  abstract delete(id: string): Promise<void>
}
