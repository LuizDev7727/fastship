import type { Metadata } from "next";
import SignUpForm from "./sign-up-form";

export const metadata: Metadata = {
  title: "Fastship | Sign Up",
};

export default function SignUp() {
  return (
    <div>
      <SignUpForm />
    </div>
  )
}