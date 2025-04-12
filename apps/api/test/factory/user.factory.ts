import { faker } from '@faker-js/faker'
import { User, type UserProps } from '@src/domain/entities/user/user.domain'

type Override = Partial<UserProps>

export default function makeUser(data = {} as Override) {
  return new User({
    email: faker.internet.email(),
    name: faker.person.firstName(),
    password: faker.internet.password(),
    ...data,
  })
}
