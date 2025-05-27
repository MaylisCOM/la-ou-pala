"use client";

import '../global-dashboard.scss';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
import Image from 'next/image';

const pages = [
  { id: 'index', name: 'Page d’accueil' },
  { id: 'works', name: 'Mes travaux' },
  { id: 'contact', name: 'Contact' }
];

export default function Pages() {
  return (
    <div className={styles.dashboardWrapper}>
      <Sidebar />
      <div className={styles.contentArea}>
        <h1 className={styles.title}>Pages du site</h1>
        <ul className={styles.pageList}>
          {pages.map((page) => (
            <li key={page.id} className={styles.pageItem}>
              <span>{page.name}</span>
              <Link href={`/dashboard/pages/${page.id}`} className={styles.editButton}>
                <FaEdit /> Modifier
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
