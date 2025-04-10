'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Fingerprint, Loader2 } from "lucide-react";
import { useActionState } from "react";
import { sendCodeToEmail } from "../actions";

export default function ForgetPasswordStep1() {

  const [state, formAction, pending] = useActionState(sendCodeToEmail, {
    message: ''
  })
  
  return (
    <div className="w-full">

      <div className="w-full flex flex-col items-center text-center">
        <div className="w-10 p-2 rounded-md border border-input bg-transparent mb-4">
          <Fingerprint className="size-6"/>
        </div>

        <h1 className="text-primary text-4xl font-semibold">Forgot Password ?</h1>
        <p className="text-muted-foreground mt-2">No worries, we will send you reset instructions.</p>
      </div>

      <form method="POST" className="space-y-2">
        <Label>E-mail</Label>
        <Input type="email" placeholder="Enter your email"/>
        <Button type="submit" className="w-full mt-2" disabled={pending}>
          {
            pending ? <Loader2 className="size-4 animate-spin"/> : 'Send Code'
          }
        </Button>
        <p className="text-red-600">{state.message}</p>
      </form>

      <div className="mb-8 mt-12">
        <div className="flex justify-center space-x-2">
          <div className="h-1.5 w-16 rounded-full bg-primary"/>
          <div className="h-1.5 w-16 rounded-full bg-input"/>
          <div className="h-1.5 w-16 rounded-full bg-input"/>
          <div className="h-1.5 w-16 rounded-full bg-input"/>
        </div>
      </div>
    </div>
  )
}