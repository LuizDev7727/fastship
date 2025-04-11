import makeUser from '@test/factory/user.factory'
import { describe, expect, it } from 'vitest'

describe('User - Domain', () => {
  it('should instantiate a user class', () => {
    expect(() => makeUser()).toBeTruthy()
  })

  it('should not instantiate a user class without a name', () => {
    expect(() => makeUser({ name: '' })).toThrow('User - name is not valid')
  })

  it('should not instantiate a user class without a email', () => {})
  expect(() => makeUser({ email: '' })).toThrow('User - e-mail is not valid')
})
