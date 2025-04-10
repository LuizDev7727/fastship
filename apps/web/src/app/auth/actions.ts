'use server'

import { signInWithCredentials } from '@repo/http'
import { signInWithCredentialsSchema } from '@repo/schemas'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signInWtihCredentialsAction(
  prevState: { message: string; error: string },
  formData: FormData
) {
  const result = signInWithCredentialsSchema.safeParse(
    Object.fromEntries(formData)
  )

  if (!result.success) {
    return { message: '', error: 'Check your credentials!' }
  }

  const { email, password } = result.data

  const { data, error } = await signInWithCredentials({
    email,
    password,
  })

  if (error) {
    return {
      message: '',
      error: error.message,
    }
  }

  const token = data.token

  const cookie = await cookies()

  cookie.set('fastship-token', token, {
    httpOnly: true,
    secure: true,
  })

  redirect('/dashboard')
}

export async function signInWithGithubAction() {}

export async function signInWithGoogleAction() {}
