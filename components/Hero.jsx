export default function Hero() {
  return (
    <>
      {/*  Hero Section  */}
  <section id="hero">
    <div className="hbg"></div>
    <div className="hgrain"></div>
    <div className="hline"></div>
    <div className="hline"></div>

    <div className="htag">STYPP · Digital &amp; Marketing Agency · Bengaluru <span className="hbadge">Now Onboarding Brands</span></div>

    {/*  Semantic Single H1 (Section 2, 22, 23)  */}
    <h1 className="htitle">
      <span className="ln"><span>We Build.</span></span>
      <span className="ln"><span>We Market.</span></span>
      <span className="ln"><span>We Shoot.</span></span>
    </h1>

    <div className="hbottom">
      <div className="hsub-wrap">
        <p className="hsub">
          Stypp is a Bengaluru-based digital and marketing agency building websites and growing brands through digital marketing, Google Ads, Meta Ads, social media, influencer marketing and SEO, AEO &amp; GEO.
        </p>
        <p className="hsub-line">
          WE BUILD. WE MARKET. WE SHOOT.
        </p>
      </div>
      <div className="hacts">
        <a href="#contact" className="btn-p">Start a Project</a>
        <a href="#work" className="btn-o">View Our Work →</a>
      </div>
    </div>

    <div className="hscroll">
      <div className="sline"></div>
      <span>Scroll</span>
    </div>
  </section>
    </>
  );
}
