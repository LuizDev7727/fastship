import myFetch from '../my-fetch'

type Request = {
  email: string
  password: string
}

type Response = {
  token: string
}

export default async function signInWithCredentials(formData:Request) {
  return await myFetch<Response>('auth/sign-in-with-credentials', {
    method: 'post',
    json: formData
  })
}