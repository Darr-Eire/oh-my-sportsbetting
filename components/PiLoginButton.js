import { useState } from 'react';

export default function PiLoginButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  async function handleLogin() {
    setLoading(true);
    setError(null);
    try {
      const scopes = ['username', 'payments'];
      const { accessToken, user } = await window.Pi.authenticate(scopes);
      
      const res = await fetch('/api/auth/pi-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken }),
      });

      if (!res.ok) throw new Error('Pi login failed');

      const data = await res.json();
      setUser(data.user);

      // Redirect or do whatever you need here
      window.location.href = '/account';

    } catch (e) {
      setError(e.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  if (user) {
    return <div>Welcome, {user.username}</div>;
  }

  return (
    <>
      <button
        onClick={handleLogin}
        disabled={loading}
        className="btn-pi-login"
      >
        {loading ? 'Logging in…' : 'Login with Pi Wallet'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </>
  );
}
