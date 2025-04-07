'use client'

import { useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { Loader2 } from 'lucide-react'

export default function AuthPage() {
  useEffect(() => {
    signIn('keycloak', { callbackUrl: '/' })
  }, [])

  return (
    <div className="flex items-center justify-center w-full h-screen bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <h1 className="text-2xl font-semibold">Redirecting to Keycloak...</h1>
      </div>
    </div>
  )
}
