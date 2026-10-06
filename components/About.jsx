export default function About() {
  return (
    <>
      {/*  About Section (Section 14: Entity & Positioning)  */}
  <section id="about">
    <div className="about-wrap reveal">
      <div className="stag">About Stypp</div>
      <h2 className="stitle">Digital &amp; Marketing Agency Built for Growth</h2>
      <p className="about-lead">
        Stypp is a digital and marketing agency that builds websites, grows brands and creates the campaigns and content that move them forward.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <div className="about-step">01 — BUILD</div>
          <h3 className="about-title">WE BUILD.</h3>
          <p className="about-text">
            Custom websites, high-converting landing pages, and responsive digital platforms engineered for speed, mobile usability, and search readiness. Your website is the digital foundation of your brand — the destination where marketing traffic turns into enquiries, bookings, leads and sales.
          </p>
        </div>
        <div className="about-card hl">
          <div className="about-step">02 — MARKET</div>
          <h3 className="about-title">WE MARKET.</h3>
          <p className="about-text">
            Targeted digital marketing across Google Ads, Meta Ads, social media management, brand campaigns, influencer marketing, and client SEO, AEO &amp; GEO. We capture active intent, drive qualified traffic, and execute multi-channel campaigns aligned with commercial growth.
          </p>
        </div>
        <div className="about-card">
          <div className="about-step">03 — SHOOT</div>
          <h3 className="about-title">WE SHOOT.</h3>
          <p className="about-text">
            On-location videography, brand photography, commercial video creation, and high-retention Reels produced with a direct marketing purpose. Our creative production is a supporting capability engineered to power your campaigns, stop the scroll, and elevate brand perception.
          </p>
        </div>
      </div>
      <div className="about-foot">
        <div className="about-quote">
          "From digital foundation to ongoing customer acquisition — we integrate website development, marketing campaigns, and creative production into one cohesive engine."
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
