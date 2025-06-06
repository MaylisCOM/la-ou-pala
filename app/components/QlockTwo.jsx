import React, { useState, useEffect } from 'react';

const LETTERS = [
  'P','E','G','R','A','P','H','I','S','T','E','G','N','E','G',
  'I','I','R','X','E','G','L','I','S','A','S','A','M','R','M',
  'D','E','V','E','L','O','P','P','E','U','S','E','A','D','C',
  'I','V','P','X','D','E','V','E','L','O','P','P','E','U','R',
  'S','S','H','I','W','E','B','D','E','S','I','G','N','E','R',
  'N','T','I','G','S','H','S','S','T','I','R','H','N','I','N',
];

// Positions horizontales et verticales des domaines
const DOMAIN_POSITIONS = {
  WEBDESIGNER:  [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
  GRAPHISTE:    [2,  3,  4,  5,  6,  7,  8,  9,  10],
  DEVELOPPEUSE: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
};

// Mapping index → nom du domaine
const indexToDomain = {};
Object.entries(DOMAIN_POSITIONS).forEach(([domain, indices]) => {
  indices.forEach(i => {
    indexToDomain[i] = domain;
  });
});

export default function QlockTwo() {
  const [now, setNow] = useState(() => new Date());
  const [hoveredDomain, setHoveredDomain] = useState(null);

  useEffect(() => {
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    const timeoutId = setTimeout(() => {
      setNow(new Date());
      const intervalId = setInterval(() => {
        setNow(new Date());
      }, 60 * 1000);
      return () => clearInterval(intervalId);
    }, msToNextMinute);
    return () => clearTimeout(timeoutId);
  }, [now]);

  return (
    <div className="qlocktwo-container" style={{ position: 'relative' }}>
      <div className="qlocktwo">
        {LETTERS.map((char, idx) => {
          const domainName = indexToDomain[idx];
          const isDomain = Boolean(domainName);
          const isHovered = domainName === hoveredDomain;
          return (
            <span
              key={idx}
              className={`letter${isDomain ? ' domain' : ''}${isHovered ? ' selected' : ''}`}
              onMouseEnter={() => {
                if (domainName) setHoveredDomain(domainName);
              }}
              onMouseLeave={() => {
                if (domainName) setHoveredDomain(null);
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
      <div className="time-display">
        {now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
}
