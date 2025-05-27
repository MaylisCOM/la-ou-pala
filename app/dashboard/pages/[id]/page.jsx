'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import './global-dashboard.scss';

export default function EditPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/content?page=${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData(data);
        setIsLoading(false);
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

  if (isLoading) return <p>Chargement...</p>;

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.main}>
        <h1>Modifier la page : {id}</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {Object.keys(formData).map((key) => (
            <div key={key} className={styles.inputGroup}>
              <label>{key}</label>
              {key.includes('img') || key.includes('video') ? (
                <>
                  <input type="text" name={key} value={formData[key]} onChange={handleChange} />
                  <input type="file" name={key} accept="image/*,video/*" onChange={handleFileChange} />
                </>
              ) : (
                <textarea name={key} value={formData[key]} onChange={handleChange} />
              )}
            </div>
          ))}
          <button type="submit" className={styles.submit}>Enregistrer</button>
        </form>
      </main>
    </div>
  );
}
