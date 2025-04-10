'use client'

import { useActionState } from "react";
import { sendCodeToEmail } from "../actions";

export default function ForgetPasswordStep1() {

  const [state, formAction, pending] = useActionState(sendCodeToEmail, {
    message: ''
  })
  
  return (
    <div className="w-full">

    </div>
  )
}