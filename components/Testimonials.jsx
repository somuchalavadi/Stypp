export default function Testimonials() {
  return (
    <>
      {/*  Testimonials Section  */}
  <section id="testimonials">
    <div className="reveal">
      <div className="stag">Client Feedback</div>
      <h2 className="stitle">What Partners Say</h2>
    </div>
    <div className="tgrid">
      <div className="tc reveal">
        <div>
          <div className="tq">"</div>
          <p className="tt">
            Stypp built our entire digital presence. The website, brand photos, and social reels positioned Greezo as a premium healthy food brand right from day one.
          </p>
        </div>
        <div className="tau">
          <div className="tav">G</div>
          <div>
            <div className="tname">Founder, Greezo</div>
            <div className="trole">Healthy Food & Juice Brand · Bengaluru · greezo.in</div>
          </div>
        </div>
      </div>

      <div className="tc reveal rd1">
        <div>
          <div className="tq">"</div>
          <p className="tt">
            The team designed a fast, clean online store and product photography that showcases our salads perfectly. Ordering became smooth and effortless for our customers.
          </p>
        </div>
        <div className="tau">
          <div className="tav">D</div>
          <div>
            <div className="tname">Dee, Dee's Salad Station</div>
            <div className="trole">Fresh Salad Brand · deessalad.shop</div>
          </div>
        </div>
      </div>

      <div className="tc reveal rd2">
        <div>
          <div className="tq">"</div>
          <p className="tt">
            From web development to creator campaigns and video pacing, Stypp delivers with deep creative standards and genuine commercial focus.
          </p>
        </div>
        <div className="tau">
          <div className="tav flip">F</div>
          <div>
            <div className="tname">Team TheFlip</div>
            <div className="trole">Creative Platform · theflip.in</div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
