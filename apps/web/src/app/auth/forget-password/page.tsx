import type { Metadata } from "next";
import ForgetPasswordStep1 from "./steps/step-1";

export const metadata: Metadata = {
  title: "Fastship | Forget Password",
};

export default function ForgetPassword() {
  return (
    <div>
      <ForgetPasswordStep1/>
    </div>
  )
}