// components/Sidebar.jsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
    <aside className="sidebar-modern">
      <div className="sidebar-header">
        <Image src="/img/la-ou-pala-logo.png" alt="Profil" width={50} height={50} className="avatar" />
        <div>
          <p className="username">Admin</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        <div className='menu'>
          <p className="section-title">Menu</p>
          <Link href="/dashboard" className="nav-link">Dashboard</Link>
          <Link href="/dashboard/pages" className="nav-link">Pages</Link>
          <Link href="/dashboard/media" className="nav-link">Médias</Link>
          <Link href="/dashboard/profil" className="nav-link">Profil</Link>
          {role === 'admin' && (
            <Link href="/dashboard/utilisateurs" className="nav-link">Utilisateurs</Link>
          )}
      </div>

      <div className="logout">
        <button onClick={logout} className="logout-btn">Se déconnecter</button>
      </div>
      </nav>
    </aside>
  );
}
