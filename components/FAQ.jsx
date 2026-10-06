export default function FAQ() {
  return (
    <>
      {/*  FAQ Section (AEO & Search Engine Clarity, Section 24, 25, 37)  */}
  <section id="faq">
    <div className="faq-head reveal">
      <div className="stag">Direct Answers & AEO</div>
      <h2 className="stitle">Frequently Asked Questions</h2>
      <p style={{'color': 'var(--gray-light)', 'fontSize': '.92rem', 'fontWeight': '300', 'lineHeight': '1.7'}}>
        Concise, factual information on Stypp's capabilities, business model, and services for clients and search engines.
      </p>
    </div>

    <div className="faq-container">
      {/*  Q1  */}
      <details className="faq-item reveal" open>
        <summary className="faq-summary">What does Stypp do?</summary>
        <div className="faq-answer">
          Stypp is a digital and marketing agency based in Bengaluru, India. We operate across three core pillars: We Build (custom websites, landing pages and digital experiences), We Market (digital marketing, Google Ads, Meta Ads, social media campaigns, influencer marketing and SEO/AEO/GEO), and We Shoot (video, photography and reels designed specifically to power marketing campaigns).
        </div>
      </details>

      {/*  Q2  */}
      <details className="faq-item reveal rd1" open>
        <summary className="faq-summary">Is Stypp a digital marketing agency?</summary>
        <div className="faq-answer">
          Yes. Stypp is primarily a digital and marketing agency. We help brands acquire customers and scale through paid advertising, search engine optimization, social media marketing, influencer campaigns, and conversion-focused websites.
        </div>
      </details>

      {/*  Q3  */}
      <details className="faq-item reveal">
        <summary className="faq-summary">Does Stypp build websites?</summary>
        <div className="faq-answer">
          Yes. Website development is a core Stypp capability. We build custom, high-performance websites for businesses, corporate brands, hotels, restaurants, D2C brands and startups, engineered to convert marketing traffic into enquiries, bookings, leads and sales.
        </div>
      </details>

      {/*  Q4  */}
      <details className="faq-item reveal rd1">
        <summary className="faq-summary">Does Stypp manage Google Ads and Meta Ads?</summary>
        <div className="faq-answer">
          Yes. We design, execute and optimize performance advertising campaigns across Google (Search Ads, Performance Max, Remarketing) and Meta (Instagram and Facebook Ads) focused on customer acquisition, lead generation, and sales.
        </div>
      </details>

      {/*  Q5  */}
      <details className="faq-item reveal">
        <summary className="faq-summary">Does Stypp handle social media?</summary>
        <div className="faq-answer">
          Yes. We treat social media as an active marketing channel, providing strategic management, content planning, creative direction, brand campaigns, and audience engagement across Instagram, YouTube and other relevant platforms.
        </div>
      </details>

      {/*  Q6  */}
      <details className="faq-item reveal rd1">
        <summary className="faq-summary">Does Stypp provide SEO, AEO and GEO services to clients?</summary>
        <div className="faq-answer">
          Yes. Stypp provides comprehensive Search Engine Optimization (SEO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) services to clients. We help businesses acquire organic Google Search visibility, execute search-intent strategies, implement technical and on-page SEO, optimize content, and build authority across AI discovery platforms like ChatGPT, Google Gemini, and Perplexity.
        </div>
      </details>

      {/*  Q7  */}
      <details className="faq-item reveal">
        <summary className="faq-summary">Does Stypp provide influencer marketing?</summary>
        <div className="faq-answer">
          Yes. Stypp executes end-to-end influencer marketing campaigns with nano, micro and macro creators across Instagram and YouTube, managing creator discovery, briefing, coordination, creative direction, and campaign tracking.
        </div>
      </details>

      {/*  Q8  */}
      <details className="faq-item reveal rd1">
        <summary className="faq-summary">Does Stypp provide video and creative production?</summary>
        <div className="faq-answer">
          Yes. Creative production is our supporting capability. We shoot on-location brand videos, commercial photography, and edit Instagram Reels specifically created to stop the scroll and support active marketing campaigns.
        </div>
      </details>

      {/*  Q9  */}
      <details className="faq-item reveal">
        <summary className="faq-summary">Where is Stypp based?</summary>
        <div className="faq-answer">
          Stypp is based in Bengaluru, Karnataka, India, and serves clients across Karnataka and India.
        </div>
      </details>

      {/*  Q10  */}
      <details className="faq-item reveal rd1">
        <summary className="faq-summary">What industries does Stypp work with?</summary>
        <div className="faq-answer">
          Stypp has verified project experience across hospitality and hotels, restaurants and food brands, D2C retail brands, professional associations, creative platforms, and startups.
        </div>
      </details>

      {/*  Q11  */}
      <details className="faq-item reveal">
        <summary className="faq-summary">How can I contact Stypp?</summary>
        <div className="faq-answer">
          You can contact Stypp directly by phone or WhatsApp at +91 72593 54415, by email at contact@stypp.in, or by booking a project consultation on our website at https://www.stypp.in/.
        </div>
      </details>
    </div>
  </section>
    </>
  );
}
