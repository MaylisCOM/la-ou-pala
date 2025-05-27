'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import './global-dashboard.scss';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('auth') === 'true';
    if (!isAuth) {
      router.push('/admin');
    }
  }, []);

  return (
    <div className="container">
      <aside className="sidebar-container">
        <Sidebar />
      </aside>

      <section className="content">
        <h1 className="title">Bienvenue dans votre Dashboard</h1>
        <p className="description">
          Cet espace vous permet de suivre les performances de votre site, d’accéder rapidement à la gestion des pages, médias et autres paramètres.
        </p>

        <div className="widgets">
          <div className="widget">
            <h3>Visites du site</h3>
            <p>12 456</p>
            <span>depuis 30 jours</span>
          </div>

          <div className="widget">
            <h3>Contacts reçus</h3>
            <p>328</p>
            <span>via le formulaire de contact</span>
          </div>

          <div className="widget">
            <h3>Pages actives</h3>
            <p>5</p>
            <span>pages actuellement en ligne</span>
          </div>

          <div className="widget">
            <h3>Fichiers média</h3>
            <p>82</p>
            <span>images et vidéos</span>
          </div>
        </div>
      </section>
    </div>
  );
}
