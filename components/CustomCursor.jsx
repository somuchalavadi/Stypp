'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cd = document.getElementById('cd');
    const cr = document.getElementById('cr');
    if (!cd || !cr) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cd.style.left = mx + 'px';
      cd.style.top = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      cr.style.left = rx + 'px';
      cr.style.top = ry + 'px';
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div id="cd"></div>
      <div id="cr"></div>
    </>
  );
}
