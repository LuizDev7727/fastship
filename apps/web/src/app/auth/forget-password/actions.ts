//forget-password
//1-) Send Email
//2-) Checkbox
//3-) Change Password

export async function sendCodeToEmail(
  prevState: { message: string },
  formData: FormData
) {
  const email = formData.get('email') as string

  return {
    message: '',
  }
}
