"use client";

import { useEffect, useRef } from 'react';

export default function CardsSection({ content }) {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const items = list?.querySelectorAll('li');

    if (!list || !items.length) return;

    const setActive = (target) => {
      const clicked = target.closest('li');
      if (!clicked) return;
      const index = [...items].indexOf(clicked);
      const newCols = [...items].map((_, i) => (i === index ? '10fr' : '1fr')).join(' ');
      list.style.gridTemplateColumns = newCols;

      items.forEach((li, i) => {
        li.dataset.active = i === index ? 'true' : 'false';
      });
    };

    list.addEventListener('pointermove', (e) => setActive(e.target));
    list.addEventListener('click', (e) => setActive(e.target));

    return () => {
      list.removeEventListener('pointermove', (e) => setActive(e.target));
      list.removeEventListener('click', (e) => setActive(e.target));
    };
  }, []);

  return (
    <section className="cards-section">
      <div className="text">
        <h2>{content.cardsTitle}</h2>
        <p>{content.cardsIntro}</p>
      </div>
      <ul className="cards-list" ref={listRef}>
        <li data-active="true">
          <article>
            <h3>{content.card1title}</h3>
            <p>{content.card1text}</p>
          </article>
        </li>
        <li>
          <article>
            <h3>{content.card2title}</h3>
            <p>{content.card2text}</p>
          </article>
        </li>
        <li>
          <article>
            <h3>{content.card3title}</h3>
            <p>{content.card3text}</p>
          </article>
        </li>
        <li>
          <article>
            <h3>{content.card4title}</h3>
            <p>{content.card4text}</p>
          </article>
        </li>
      </ul>
    </section>
  );
}
