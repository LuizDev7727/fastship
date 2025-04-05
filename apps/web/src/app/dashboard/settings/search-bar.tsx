'use client'

import { useSearchParams } from "next/navigation"
import Billing from "./billing"
import General from "./general"

export default function SearchBar() {
  
  const searchParams = useSearchParams()

  const tab = searchParams.get('tab') || 'general'

  
  return (
    <>
      {
        tab === 'general' && (
          <General/>
        )
      }
      
      {
        tab === 'billing' && (
          <Billing/>
        )
      }
    </>
  )
}