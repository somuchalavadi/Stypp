export default function Influencer() {
  return (
    <>
      {/*  Influencer Marketing Section (Section 9)  */}
  <section id="influencer">
    <div className="inf-bg"></div>
    <div className="inf-layout">
      <div className="inf-left">
        <div className="stag reveal">Influencer Marketing</div>
        <h2 className="inf-stitle reveal">Creator Campaigns That<br /><em>Move Audiences.</em></h2>
        <p className="inf-sub reveal">
          We bridge brands with the right voices — nano, micro, and macro creators across Instagram, YouTube, and beyond. In influencer marketing, the product is the campaign: strategic creator selection, authentic briefing, seamless coordination, and conversion-focused distribution.
        </p>
        <div className="inf-pills reveal">
          <div className="inf-pill">📸 Instagram <span>Reels</span></div>
          <div className="inf-pill">▶️ YouTube <span>Shorts</span></div>
          <div className="inf-pill">👤 Nano <span>1K–10K</span></div>
          <div className="inf-pill">👥 Micro <span>10K–100K</span></div>
          <div className="inf-pill">🌟 Macro <span>100K+</span></div>
          <div className="inf-pill">🍽️ Food & Hospitality</div>
          <div className="inf-pill">👗 D2C & Lifestyle</div>
          <div className="inf-pill">🎯 Campaign Strategy</div>
        </div>
        <div className="reveal">
          <a href="https://wa.me/917259354415?text=Hi%20Stypp%2C%20I%20want%20to%20discuss%20an%20Influencer%20Marketing%20Campaign"
            target="_blank" rel="noopener" className="btn-infl">💫 Launch Influencer Campaign</a>
        </div>
      </div>

      <div className="inf-right reveal">
        {/*  Authentic Capability Pillars (No fake stats/metrics)  */}
        <div className="inf-cards">
          <div className="inf-card">
            <div className="inf-glow"></div>
            <div className="inf-card-tag">PHASE 01</div>
            <h4 className="inf-card-heading">Campaign Strategy</h4>
            <p className="inf-card-desc">Niche audience targeting and creator discovery matched to your campaign goals.</p>
          </div>
          <div className="inf-card">
            <div className="inf-glow" style={{'background': 'radial-gradient(circle,rgba(0,212,255,.15) 0%,transparent 70%)'}}></div>
            <div className="inf-card-tag">PHASE 02</div>
            <h4 className="inf-card-heading">Creator Coordination</h4>
            <p className="inf-card-desc">Product dispatch, briefing, script angles, and strict quality control.</p>
          </div>
          <div className="inf-card">
            <div className="inf-glow" style={{'background': 'radial-gradient(circle,rgba(245,166,35,.12) 0%,transparent 70%)'}}></div>
            <div className="inf-card-tag">PHASE 03</div>
            <h4 className="inf-card-heading">Multi-Format Assets</h4>
            <p className="inf-card-desc">High-retention Reels, Shorts, unboxings, and honest reviews that drive interest.</p>
          </div>
          <div className="inf-card">
            <div className="inf-glow" style={{'background': 'radial-gradient(circle,rgba(74,222,128,.12) 0%,transparent 70%)'}}></div>
            <div className="inf-card-tag">PHASE 04</div>
            <h4 className="inf-card-heading">Campaign Tracking</h4>
            <p className="inf-card-desc">Deliverable verification, engagement reporting, and conversion link tracking.</p>
          </div>
        </div>

        <div className="inf-types">
          <div className="itr">
            <div className="itl">
              <span className="it-icon">🎯</span>
              <div>
                <div className="it-name">Nano Influencers</div>
                <div className="it-desc">1K – 10K Followers · Hyper-local reach & trusted community engagement</div>
              </div>
            </div>
            <span className="it-badge">High Trust</span>
          </div>
          <div className="itr">
            <div className="itl">
              <span className="it-icon">⚡</span>
              <div>
                <div className="it-name">Micro Influencers</div>
                <div className="it-desc">10K – 100K Followers · Niche authority & highly engaged buyer intent</div>
              </div>
            </div>
            <span className="it-badge">Targeted</span>
          </div>
          <div className="itr">
            <div className="itl">
              <span className="it-icon">🌟</span>
              <div>
                <div className="it-name">Macro Creators</div>
                <div className="it-desc">100K+ Followers · Broad brand awareness & massive cultural reach</div>
              </div>
            </div>
            <span className="it-badge">Mass Reach</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
