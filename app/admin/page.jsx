// app/admin/page.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './global-admin.scss';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', 'admin');
      router.push('/dashboard');
    } else if (username === 'client' && password === 'client123') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', 'client');
      router.push('/dashboard');
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1>Connexion</h1>
        <form onSubmit={handleLogin}>
          <label>Identifiant</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
  
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
  
}
