"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Collapse from './components/Collapse';
import Carousel from './components/Carousel';
import CardsSection from './components/CardsSection';
import Cta from './components/Cta';

export default function HomePage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  if (!content) return <p>Chargement...</p>;

  return (
    <main>
      <Header />
      <Banner title={content.titre} subtitle={content.subtitle} video={content.video} />
      <CardsSection content={content} />
      <Collapse content={content} />
      <Carousel content={content} />
      <Cta content={content} />
      <Footer />
    </main>
  );
}
