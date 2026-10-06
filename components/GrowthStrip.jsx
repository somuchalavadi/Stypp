export default function GrowthStrip() {
  return (
    <>
      {/*  Growth Strip (Section 46: Authentic Agency Pillars, no empty 0-stats)  */}
  <section id="growth-strip">
    <div className="growth-grid">
      <div className="growth-item reveal">
        <span className="growth-icon">💻</span>
        <h3 className="growth-heading">WE BUILD</h3>
        <p className="growth-sub">Websites & Landing Pages</p>
      </div>
      <div className="growth-item reveal rd1">
        <span className="growth-icon">🎯</span>
        <h3 className="growth-heading">WE MARKET</h3>
        <p className="growth-sub">Google & Meta Paid Campaigns</p>
      </div>
      <div className="growth-item reveal rd2">
        <span className="growth-icon">🎬</span>
        <h3 className="growth-heading">WE SHOOT</h3>
        <p className="growth-sub">Video, Photography & Reels</p>
      </div>
      <div className="growth-item reveal rd3">
        <span className="growth-icon">🔍</span>
        <h3 className="growth-heading">WE GROW</h3>
        <p className="growth-sub">Search, AEO & AI Discovery</p>
      </div>
    </div>
  </section>
    </>
  );
}
