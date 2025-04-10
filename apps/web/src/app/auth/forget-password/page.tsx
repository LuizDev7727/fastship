import { ArrowLeft, GalleryVerticalEnd } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ForgetPasswordStep1 from "./steps/step-1";

export const metadata: Metadata = {
  title: "Fastship | Forget Password",
};

export default function ForgetPassword() {
  return (
    <div className="grid min-h-svh lg:grid-cols-1">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Fastship Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl">

            <ForgetPasswordStep1/>

            <div className="w-full text-center flex items-center justify-center gap-x-2 text-muted-foreground mt-4 font-semibold">
              <ArrowLeft className="size-5"/>
              <Link href={'/'}>Back to home</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}