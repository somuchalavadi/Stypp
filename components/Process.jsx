export default function Process() {
  return (
    <>
      {/*  Process Section (Section 16: 6 Steps)  */}
  <section id="process">
    <div className="reveal">
      <div className="stag">Framework</div>
      <h2 className="stitle">How We Grow Brands</h2>
      <p style={{'maxWidth': '560px', 'color': 'var(--gray-light)', 'fontSize': '.92rem', 'fontWeight': '300', 'lineHeight': '1.7'}}>
        A disciplined, step-by-step methodology designed to eliminate guesswork, align digital assets, and drive consistent business growth.
      </p>
    </div>

    <div className="psteps">
      <div className="ps reveal">
        <div className="pdot">01</div>
        <h3 className="pname">Understand</h3>
        <p className="pdesc">We learn your business, audience, offer, competition and growth goals.</p>
      </div>
      <div className="ps reveal rd1">
        <div className="pdot">02</div>
        <h3 className="pname">Strategize</h3>
        <p className="pdesc">We build the digital and marketing plan — channels, campaigns, audience, budget and creative direction.</p>
      </div>
      <div className="ps reveal rd2">
        <div className="pdot">03</div>
        <h3 className="pname">Build</h3>
        <p className="pdesc">We build the website, landing pages and digital experiences needed to support the strategy.</p>
      </div>
      <div className="ps reveal rd3">
        <div className="pdot">04</div>
        <h3 className="pname">Launch</h3>
        <p className="pdesc">We launch Google, Meta, social, influencer and content campaigns.</p>
      </div>
      <div className="ps reveal rd4">
        <div className="pdot">05</div>
        <h3 className="pname">Optimize</h3>
        <p className="pdesc">We study performance, test creatives, refine audiences and improve campaigns.</p>
      </div>
      <div className="ps reveal rd4">
        <div className="pdot">06</div>
        <h3 className="pname">Scale</h3>
        <p className="pdesc">We double down on what works and build the next stage of growth.</p>
      </div>
    </div>
  </section>
    </>
  );
}
