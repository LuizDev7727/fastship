import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Keyboard } from "lucide-react";

export default function ForgetPasswordStep3() {
  return (
    <div className="w-full">
      
      <div className="w-full flex flex-col items-center text-center">
        
        <div className="w-10 p-2 rounded-md border border-input bg-transparent mb-4">
          <Keyboard className="size-6"/>
        </div>

        <h1 className="text-primary text-4xl font-semibold">Password Reset</h1>
        <p className="text-muted-foreground mt-2">Check your e-mail and get the code.</p>
      </div>

      <form className="space-y-2 mt-2">
        <Label>Password</Label>
        <Input placeholder="*********"/>
        <Label>Confirm Password</Label>
        <Input placeholder="*********"/>
        <Button className="w-full">Reset password</Button>
      </form>

    </div>
  )
}