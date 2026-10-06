export default function Ecosystem() {
  return (
    <>
      {/*  Website + Marketing Ecosystem Section (Section 15)  */}
  <section id="ecosystem">
    <div className="eco-header reveal">
      <div className="stag">Integrated Growth Model</div>
      <h2 className="stitle">One Brand. Multiple Growth Channels.</h2>
      <p style={{'color': 'var(--gray-light)', 'fontSize': '.95rem', 'fontWeight': '300', 'lineHeight': '1.7'}}>
        Your website is where your marketing traffic becomes enquiries, bookings, leads and customers. Stypp unites digital infrastructure, audience discovery, paid campaigns, and conversion optimization into a single, cohesive engine.
      </p>
    </div>

    {/*  Four Pillars  */}
    <div className="eco-grid">
      <div className="eco-card reveal">
        <div className="eco-step-num">PILLAR 01</div>
        <h3 className="eco-name">GET BUILT</h3>
        <ul className="eco-list">
          <li>Websites</li>
          <li>Landing Pages</li>
          <li>Digital Experiences</li>
          <li>Conversion Architecture</li>
        </ul>
      </div>

      <div className="eco-card reveal rd1">
        <div className="eco-step-num">PILLAR 02</div>
        <h3 className="eco-name">GET FOUND</h3>
        <ul className="eco-list">
          <li>SEO (Organic Search)</li>
          <li>AEO (Answer Engines)</li>
          <li>GEO (Generative AI Discovery)</li>
          <li>Google Local & Maps</li>
        </ul>
      </div>

      <div className="eco-card reveal rd2">
        <div className="eco-step-num">PILLAR 03</div>
        <h3 className="eco-name">GET SEEN</h3>
        <ul className="eco-list">
          <li>Meta Ads (IG & FB)</li>
          <li>Social Media Marketing</li>
          <li>Influencer Campaigns</li>
          <li>Campaign Creative</li>
        </ul>
      </div>

      <div className="eco-card reveal rd3">
        <div className="eco-step-num">PILLAR 04</div>
        <h3 className="eco-name">GET CONVERTED</h3>
        <ul className="eco-list">
          <li>Campaign Landing Pages</li>
          <li>Lead Generation Systems</li>
          <li>Smart Remarketing</li>
          <li>Conversion Optimization</li>
        </ul>
      </div>
    </div>

    {/*  The Customer Journey Flow  */}
    <div className="journey-box reveal">
      <div className="journey-title">The Complete Stypp Brand Growth Journey</div>
      <div className="journey-flow">
        <div className="j-node">BRAND</div>
        <span className="j-arrow">→</span>
        <div className="j-node hl">WEBSITE</div>
        <span className="j-arrow">→</span>
        <div className="j-node">GOOGLE / META / SOCIAL</div>
        <span className="j-arrow">→</span>
        <div className="j-node hl">CAMPAIGN</div>
        <span className="j-arrow">→</span>
        <div className="j-node">TRAFFIC</div>
        <span className="j-arrow">→</span>
        <div className="j-node hl">LANDING PAGE</div>
        <span className="j-arrow">→</span>
        <div className="j-node">LEAD / BOOKING / SALE</div>
        <span className="j-arrow">→</span>
        <div className="j-node hl">OPTIMIZATION</div>
      </div>
    </div>
  </section>
    </>
  );
}
