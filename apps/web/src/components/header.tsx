import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-4">
      <div className="flex items-center gap-x-4">
        <Link href="/">
          <span className="text-lg font-bold font-heading !leading-none">
            Fastship
          </span>
        </Link>
        <nav className="flex items-center gap-x-2">
          <Link href={'/blog'} className="text-sm leading-tight text-muted-foreground">Blogs</Link>
        </nav>
      </div>
      <div className="space-x-4">
        <Link href={'/auth/sign-in'}>Log in</Link>
        <Link href={'/auth/sign-up'}>
          <Button>Sign Up</Button>
        </Link>
      </div>
    </header>
  )
}