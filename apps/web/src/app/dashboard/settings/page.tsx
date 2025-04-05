import type { Metadata } from "next";
import { Suspense } from "react";
import SearchBar from "./search-bar";

export const metadata: Metadata = {
  title: "Fastship | Settings",
};

export default function Settings() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SearchBar/>
    </Suspense>
  )
}