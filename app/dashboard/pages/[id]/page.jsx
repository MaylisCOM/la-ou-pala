'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';
import '../../global-dashboard.scss';
import { labelMap } from '../../../../lib/labels';

export default function EditPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [mediaOptions, setMediaOptions] = useState([]);

  useEffect(() => {
    fetch(`/api/content?page=${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData(data);
        setIsLoading(false);
      });

    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        const values = Object.values(data);
        const options = values.filter(val => typeof val === 'string' && val.match(/\.(png|jpe?g|webp|svg|mp4)$/))
                               .map(path => path.replace(/^\/img\//, ''));
        setMediaOptions(options);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData({ ...formData, [name]: url });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    alert('Contenu mis à jour !');
  };

  const getLabel = (key) => {
    if (key === 'titre') return 'Titre Banner';
    return labelMap[key] || key;
  };

  const groupedSections = {
    Banner: ['titre', 'subtitle', 'video'],
    Collapse: Object.keys(formData).filter(k => k.startsWith('collapse')),
    Carousel: Object.keys(formData).filter(k => k.startsWith('carousel')),
    Cards: Object.keys(formData).filter(k => k.startsWith('cards') || k.startsWith('card')),
  };

  if (isLoading) return <p>Chargement...</p>;

  return (
    <div className="container">
      <aside className="sidebar-container">
        <Sidebar />
      </aside>

      <section className="content">
        <div className="editor">
          <div className="editorHeader">
            <h1> Modification de la page d'accueil</h1>
            <div className="editorActions">
              <button
                className="previewBtn"
                type="button"
                onClick={() => window.open(id === 'index' ? '/' : `/${id}`, '_blank')}
              >
                Preview
              </button>
              <button className="saveBtn" type="button" onClick={handleSubmit}>Save</button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="editorForm">
            {Object.entries(groupedSections).map(([section, keys]) => (
              <div className="editorSection" key={section}>
                <h2 className="editorSectionTitle">{section}</h2>
                {keys
                  .filter((key) => key !== 'image' && !key.includes('alt'))
                  .map((key) => (
                    formData[key] !== undefined && (
                      <div key={key} className="editorBlock">
                        <label className="editorLabel">{getLabel(key)}</label>
                        {key.includes('img') || key.includes('video') ? (
                          <div className="mediaUpload">
                            <select
                              name={key}
                              value={formData[key].replace(/^\/img\//, '')}
                              onChange={(e) => handleChange({ target: { name: key, value: '/img/' + e.target.value } })}
                              className="mediaSelect"
                            >
                              <option value="">-- Sélectionner une ressource existante --</option>
                              {mediaOptions.map((name, i) => (
                                <option key={i} value={name}>{name}</option>
                              ))}
                            </select>

                            <input
                              type="file"
                              name={key}
                              accept="image/*,video/*"
                              onChange={handleFileChange}
                              className="mediaFile"
                            />
                          </div>
                        ) : (
                          <textarea
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="editorTextarea"
                          />
                        )}
                      </div>
                    )
                  ))}
              </div>
            ))}
          </form>
        </div>
      </section>
    </div>
  );
}
