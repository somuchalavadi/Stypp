'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={hidden ? 'hidden' : ''}>
      <div className="lt">
        <span>S</span>
        <span>t</span>
        <span>y</span>
        <span>p</span>
        <span>p</span>
      </div>
    </div>
  );
}
