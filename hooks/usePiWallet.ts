import { useState } from 'react';

export default function usePiWallet() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

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

      // Call your API to login
      const res = await fetch('/api/auth/pi-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        setError(error || 'Login failed');
        return null;
      }

      const { user } = await res.json();
      setUser(user);
      setError(null);
      return user;
    } catch (err) {
      setError(err.message || 'Unexpected error');
      return null;
    }
  }

  return { user, error, piLogin };
}
