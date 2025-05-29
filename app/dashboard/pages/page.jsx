"use client";

import Link from 'next/link';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';

const pages = [
  { id: 'index', name: 'Page d’accueil' },
  { id: 'works', name: 'Mes travaux' },
  { id: 'contact', name: 'Contact' }
];

export default function Pages() {
  const handleDelete = (id) => {
    const confirmDelete = confirm("Voulez-vous vraiment supprimer cette page ?");
    if (confirmDelete) {
      // Logique de suppression (à adapter si API côté serveur)
      alert(`Page ${id} supprimée.`);
    }
  };

  return (
    <div className="container">
      <aside className="sidebar-container">
        <Sidebar />
      </aside>
      <section className="content">
        <h1 className="title">Pages du site</h1>
        <table className="pageTable">
          <thead>
            <tr>
              <th className='title'>Nom de la page</th>
              <th className='actions'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.id} className="pageRow">
                <td>{page.name}</td>
                <td className="actions">
                  <Link href={`/dashboard/pages/${page.id}`} className="editButton">
                    <FaEdit title="Modifier" />
                  </Link>
                  <Link href={`/${page.id === 'index' ? '' : page.id}`} className="viewButton" target="_blank">
                    <FaEye title="Voir" />
                  </Link>
                  <button onClick={() => handleDelete(page.id)} className="deleteButton">
                    <FaTrash title="Supprimer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
