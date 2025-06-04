// hooks/usePiWallet.ts
import { useState } from 'react';

// Declare the Pi wallet on the global window object to satisfy TypeScript


export default function usePiWallet() {
  const [user, setUser] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function piLogin() {
    if (typeof window === 'undefined' || !window.Pi) {
      setError('Pi wallet not loaded');
      return null;
    }

    try {
      await window.Pi.wallet.requestAccess();

      const tokenResponse = await window.Pi.wallet.makePiNetworkRequest();
      const accessToken = tokenResponse?.accessToken;

      if (!accessToken) {
        setError('Failed to get access token');
        return null;
      }

      const res = await fetch('/api/auth/pi-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Login failed');
        return null;
      }

      const data = await res.json();
      setUser(data.user);
      setError(null);
      return data.user;
    } catch (err: any) {
      setError(err.message || 'Unexpected error');
      return null;
    }
  }

  return { user, error, piLogin };
}
