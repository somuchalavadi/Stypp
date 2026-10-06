'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="nb" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nl">Sty<span>pp</span></a>
      <div className="nlinks">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#ecosystem">Ecosystem</a>
        <a href="#work">Work</a>
        <a href="#influencer">Influencers</a>
        <a href="#process">Process</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" className="ncta">Start a Project</a>
      </div>
    </nav>
  );
}
