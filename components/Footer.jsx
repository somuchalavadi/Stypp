export default function Footer() {
  return (
    <>
      {/*  Structured Footer (Section 48)  */}
  <footer>
    <div className="footer-top">
      <div className="footer-brand">
        <div className="flogo">Sty<span>pp</span></div>
        <div className="fentity" style={{'color': 'var(--gold)', 'fontSize': '.78rem', 'fontWeight': '700', 'letterSpacing': '.14em', 'textTransform': 'uppercase', 'margin': '6px 0 14px'}}>Digital &amp; Marketing Agency</div>
        <p className="fdesc">
          Stypp is a Bengaluru-based digital and marketing agency building websites and growing brands through digital marketing, Google Ads, Meta Ads, social media, influencer marketing and SEO, AEO &amp; GEO, supported by creative production.
        </p>
        <div className="fcontact-list">
          <div>📍 Bengaluru, Karnataka, India</div>
          <div>📞 <a href="tel:+917259354415">+91 72593 54415</a></div>
          <div>📩 <a href="mailto:contact@stypp.in">contact@stypp.in</a></div>
          <div>📷 <a href="https://www.instagram.com/stypp_creativestudio/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
        </div>
      </div>

      {/*  Column: WEBSITE  */}
      <div>
        <div className="footer-col-title">WEBSITE</div>
        <ul className="footer-links">
          <li><a href="#services">Website Development</a></li>
          <li><a href="#services">Landing Pages</a></li>
          <li><a href="#services">Corporate Websites</a></li>
          <li><a href="#services">Website Redesigns</a></li>
          <li><a href="#work">Hotel Websites</a></li>
          <li><a href="#work">Restaurant Websites</a></li>
        </ul>
      </div>

      {/*  Column: MARKETING  */}
      <div>
        <div className="footer-col-title">MARKETING</div>
        <ul className="footer-links">
          <li><a href="#services">Digital Marketing</a></li>
          <li><a href="#services">Google Ads</a></li>
          <li><a href="#services">Meta Ads</a></li>
          <li><a href="#services">Social Media &amp; Campaigns</a></li>
          <li><a href="#influencer">Influencer Marketing</a></li>
          <li><a href="#services">SEO / AEO / GEO</a></li>
        </ul>
      </div>

      {/*  Column: CREATIVE  */}
      <div>
        <div className="footer-col-title">CREATIVE</div>
        <ul className="footer-links">
          <li><a href="#services">Video Creation</a></li>
          <li><a href="#services">Videography</a></li>
          <li><a href="#services">Brand Photography</a></li>
          <li><a href="#services">Reels Production</a></li>
          <li><a href="#services">Video Editing</a></li>
          <li><a href="https://www.instagram.com/stypp_creativestudio/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="fcopy">
        © 2025–2026 <strong>Stypp</strong> · Digital &amp; Marketing Agency · Bengaluru, Karnataka, India. All rights reserved.
      </div>
      <div className="fsublinks">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#ecosystem">Ecosystem</a>
        <a href="#work">Work</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
        <a href="https://www.instagram.com/stypp_creativestudio/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </footer>
    </>
  );
}
