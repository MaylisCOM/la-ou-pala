// components/Sidebar.jsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    router.push('/admin');
  };

  return (
    <nav className="sidebar">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/pages">Pages</Link>
      <Link href="/dashboard/media">Médias</Link>
      <Link href="/dashboard/profil">Profil</Link>
      {role === 'admin' && <Link href="/dashboard/utilisateurs">Utilisateurs</Link>}
      <button onClick={logout}>Se déconnecter</button>
    </nav>
  );
}
