'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../../lib/firebase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const tokenResult = await user.getIdTokenResult();

      const role = tokenResult.claims.role || 'client';

      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', role);

      router.push('/dashboard');
    } catch (error) {
      alert('Identifiants incorrects');
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1>Connexion</h1>
        <form onSubmit={handleLogin}>
          <label>Adresse e-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}
