import { GalleryVerticalEnd } from "lucide-react";
import type { Metadata } from "next";
import SignInForm from "./sign-in-form";

export const metadata: Metadata = {
  title: "Fastship | Sign In",
};

export default function SignIn() {
  return (
    <div>
      <SignInForm />
    </div>
  )
}