'use client';

import { useEffect, useState } from 'react';
import Sidebar from '../../../app/components/Sidebar';
import Image from 'next/image';
import '../global-dashboard.scss';

export default function MediaPage() {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        const values = Object.values(data);
        const images = values
          .filter(val => typeof val === 'string' && val.match(/\.(png|jpe?g|webp|svg|mp4)$/))
          .map((url, i) => ({
            name: `Media ${i + 1}`,
            url
          }));
        setMediaFiles(images);
      })
      .catch(err => console.error('Erreur chargement des médias depuis JSON :', err));
  }, []);

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      window.location.reload();
    } else {
      console.error('Erreur lors de l’upload des fichiers');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  return (
    <div className="container">
      <aside className="sidebar-container">
        <Sidebar />
      </aside>

      <section className="content">
        <div className="media-library">
          <h1>Bibliothèque de médias</h1>

          <div
            className={`drop-zone${dragOver ? ' drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
              border: '2px dashed var(--text-color)',
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              marginBottom: '2rem',
              backgroundColor: dragOver ? 'rgba(255,255,255,0.1)' : 'transparent'
            }}
          >
            <p>Déposez ici vos images ou vidéos à ajouter</p>
          </div>

          <div className="media-grid">
            {mediaFiles.map((media, index) => (
              <div className="media-item" key={index}>
                {media.url.endsWith('.mp4') ? (
                  <video src={media.url} controls width="100%" />
                ) : (
                  <img src={media.url} alt={`Media ${index + 1}`} />
                )}
                <span>Media {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}