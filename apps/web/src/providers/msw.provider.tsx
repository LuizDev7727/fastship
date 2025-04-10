'use client'

import { enableMSW } from '@/mocks'
import { type ReactNode, useEffect } from 'react'

type MswClientProviderProps = {
  children: ReactNode
}

export default function MswClientProvider({ children }:MswClientProviderProps) {

  useEffect(() => {
    enableMSW()
  },[])
  
  return <>{children}</>
}