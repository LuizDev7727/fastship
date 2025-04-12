import { Injectable } from '@nestjs/common'
import { UserRepository } from '@src/domain/repository/user.repository'
import { compareSync } from 'bcryptjs'

type SignInWithCredentialsUseCaseRequest = {
  email: string
  password: string
}

type SignInWithCredentialsUseCaseResponse = {
  token: string
}

@Injectable()
export class SignInWithCredentialsUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(
    request: SignInWithCredentialsUseCaseRequest
  ): Promise<SignInWithCredentialsUseCaseResponse> {
    const { email, password } = request
    const user = await this.userRepo.findByEmail(email)

    if (!user) {
      throw new Error('Invalid Credentials')
    }

    if (!compareSync(password, user.password)) {
      throw new Error('Invalid Credentials')
    }

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'

    return {
      token: token,
    }
  }
}
