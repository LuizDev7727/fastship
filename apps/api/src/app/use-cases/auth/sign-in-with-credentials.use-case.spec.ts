import { InMemoryUserRepository } from '@test/repositories/in-memory-user.repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { SignInWithCredentialsUseCase } from './sign-in-with-credential.use-case'

describe('SignInWithCredentialsUseCase', () => {
  let signInWithCredentialsUseCase: SignInWithCredentialsUseCase
  let inMemoryUserRepository: InMemoryUserRepository

  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    signInWithCredentialsUseCase = new SignInWithCredentialsUseCase(
      inMemoryUserRepository
    )
  })

  it('should login user with email=johndoe@gmail.com and password=123', async () => {
    const request = {
      email: 'johndoe@gmail.com',
      password: '123',
    }

    const { token } = await signInWithCredentialsUseCase.execute(request)
    const tokenSplited = token.split('.')

    expect(token).toBeTruthy()
    expect(tokenSplited.length).toBe(3)
  })

  it('should not login user with email=johndoe04@gmail.com -> (not registred) and password=123', async () => {
    const request = {
      email: 'johndoe04@gmail.com',
      password: '123',
    }

    await expect(() =>
      signInWithCredentialsUseCase.execute(request)
    ).rejects.toThrow('Invalid Credentials')
  })

  it('should not login user with email=johndoe@gmail.com and password=asd12 -> (wrong password)', async () => {
    const request = {
      email: 'johndoe@gmail.com',
      password: 'asd12',
    }

    await expect(() =>
      signInWithCredentialsUseCase.execute(request)
    ).rejects.toThrow('Invalid Credentials')
  })
})
