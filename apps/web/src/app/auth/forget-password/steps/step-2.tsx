import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

export default function ForgetPasswordStep2() {
  return (
    <div className="w-full">
      
      <div className="w-full flex flex-col items-center text-center">

        <div className="w-10 p-2 rounded-md border border-input bg-transparent mb-4">
          <Mail className="size-6"/>
        </div>

        <h1 className="text-primary text-4xl font-semibold">Password Reset</h1>
        <p className="text-muted-foreground mt-2">Check your e-mail and get the code.</p>
      </div>

      <form className="space-y-2 mt-2">
        <Label>Code</Label>
        <Input name="code" placeholder="0032032"/>
        <Button className="w-full" type="submit">Continue</Button>
      </form>

      <p className="text-muted-foreground text-center mt-4">Didn't receive the email ? <span>Click here</span> </p>
      
    </div>
  )
}