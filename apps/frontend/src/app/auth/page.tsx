'use client';

import { useEffect } from 'react';

import { signIn } from 'next-auth/react';

import { Loader2 } from 'lucide-react';

export default function AuthPage() {
  useEffect(() => {
    signIn('keycloak', { callbackUrl: '/' });
  }, []);

  return (
    <div className="bg-background flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="text-primary h-12 w-12 animate-spin" />
        <h1 className="text-2xl font-semibold">Redirecting to Keycloak...</h1>
      </div>
    </div>
  );
}
