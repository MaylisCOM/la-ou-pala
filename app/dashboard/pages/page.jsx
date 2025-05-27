"use client";

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
    <div className="container">
      <aside className="sidebar-container">
        <Sidebar />
      </aside>
      <section className="content">
        <h1 className="title">Pages du site</h1>
        <ul className="pageList">
          {pages.map((page) => (
            <li key={page.id} className="pageItem">
              <span>{page.name}</span>
              <Link href={`/dashboard/pages/${page.id}`} className="editButton">
                <FaEdit /> Modifier
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
 