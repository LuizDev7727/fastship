import { User } from '@src/domain/entities/user/user.domain'
import { UserRepository } from '@src/domain/repository/user.repository'

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [
    new User({
      email: 'johndoe@gmail.com',
      name: 'John Doe',
      password: '$2a$12$IBAXLRGKsECmZYBLF..oke4GaBX/47r.nUhrJoCGLSAy/gAbZTS/O', //123
    }),
  ]

  async findAll(): Promise<User[]> {
    return this.users
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find(user => user.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create(newUser: User): Promise<void> {
    this.users.push(newUser)
  }

  async save(user: User): Promise<void> {
    const userIndex = this.users.findIndex(({ id }) => id === user.id)

    if (userIndex > 0) {
      this.users[userIndex] = user
    }
  }

  async delete(id: string): Promise<void> {
    const users = this.users.filter(user => user.id === id)
    this.users = users
  }
}
