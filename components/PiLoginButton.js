import React from 'react';
import usePiWallet from '../hooks/usePiWallet';

export default function PiLoginButton() {
  const { user, error, piLogin } = usePiWallet();

  return (
    <div>
      {user ? (
        <div>Welcome, {user.username}</div>
      ) : (
        <>
          <button onClick={piLogin} className="btn-pi-login">
            Login with Pi Wallet
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </>
      )}
    </div>
  );
}
