import React from 'react';
import QlockTwo from '../components/QlockTwo';
export default function Banner({ title, subtitle }) {
  return (
    <div id="Banner">
      <div className="title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="">
        <QlockTwo />
      </div>
    </div>
  );
}
