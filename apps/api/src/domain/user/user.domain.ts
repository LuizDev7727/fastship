import { randomUUID } from 'node:crypto'
import { DomainError } from '@src/core/domain/errors/domain-error'

export type UserProps = {
  email: string
  name: string
}

export class User {
  private _id: string
  private props: UserProps

  constructor(props: UserProps, id?: string) {
    this.props = props
    this._id = id || randomUUID()
    this.name = props.name
    this.email = props.email
  }

  get id(): string {
    return this._id
  }

  get email(): string {
    return this.props.email
  }

  set email(email: string) {
    if (!email.includes('@')) {
      throw new DomainError('User - e-mail is not valid')
    }

    this.props.email = email
  }

  get name(): string {
    return this.props.name
  }

  set name(name: string) {
    if (name.length < 3) {
      throw new DomainError('User - name is not valid')
    }
    this.props.name = name
  }
}
