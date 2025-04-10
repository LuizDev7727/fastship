import { http, HttpResponse } from 'msw'

type SignInRequest = {
  email: string
  password: string
}

export const signInWithCredentialsMock = http.post<never, SignInRequest>(
  'http://localhost:3333/api/auth/sign-in-with-credentials',
  async ({ request }) => {
    const { email, password } = await request.json()

    if (email !== '123@gmail.com' && password !== '123') {
      return HttpResponse.json({
        message: 'Invalid Credentials!',
      })
    }

    return HttpResponse.json({
      message:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
    })
  }
)
