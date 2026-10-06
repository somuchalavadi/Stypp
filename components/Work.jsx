export default function Work() {
  return (
    <>
      {/*  Portfolio Section (Section 13 & 14)  */}
  <section id="work">
    <div className="whead reveal">
      <div>
        <div className="stag">Portfolio</div>
        <h2 className="stitle">Marketing That Moves Brands</h2>
      </div>
      <p style={{'maxWidth': '380px', 'color': 'var(--gray-light)', 'fontSize': '.9rem', 'fontWeight': '300', 'lineHeight': '1.7'}}>
        Websites, campaigns, digital experiences and creative built around real business goals.
      </p>
    </div>

    <div className="wgrid">
      {/*  Feature 1: Hotel Shiva Inn (Section 13 addition)  */}
      <div className="wc feat reveal">
        <div className="wbg bg-shivainn">
          <div className="cpat"></div>
          <div className="clp">Hotel Shiva Inn<br /><span style={{'fontSize': '1rem', 'opacity': '.5'}}>shivainn.com</span></div>
        </div>
        <div className="wov"></div>
        <div className="whov"></div>
        <a href="https://shivainn.com/" target="_blank" rel="noopener" className="warrow"
          aria-label="Visit Hotel Shiva Inn website">↗</a>
        <div className="wi">
          <div className="wtags">
            <span className="wtag">Website Development</span>
            <span className="wtag">Local SEO</span>
            <span className="wtag">Brand Photography</span>
            <span className="wtag">Reels</span>
          </div>
          <h3 className="wtitle">Hotel Shiva Inn</h3>
          <p className="wsub">
            Complete website development, local SEO optimization, brand photography and social reels for premier hospitality in Haveri, Karnataka · shivainn.com
          </p>
        </div>
      </div>

      {/*  Project 2: Greezo  */}
      <div className="wc reveal rd1">
        <div className="wbg bg-greezo">
          <div className="cpat"></div>
          <div className="clp">Greezo<br /><span style={{'fontSize': '.85rem', 'opacity': '.5'}}>greezo.in</span></div>
        </div>
        <div className="wov"></div>
        <div className="whov"></div>
        <a href="https://greezo.in" target="_blank" rel="noopener" className="warrow"
          aria-label="Visit Greezo website">↗</a>
        <div className="wi">
          <div className="wtags">
            <span className="wtag">Website Development</span>
            <span className="wtag">Digital Marketing</span>
            <span className="wtag">Photography</span>
          </div>
          <h3 className="wtitle">Greezo</h3>
          <p className="wsub">Custom web development, brand photography and launch digital marketing · Bengaluru</p>
        </div>
      </div>

      {/*  Project 3: Dee's Salad Station  */}
      <div className="wc reveal">
        <div className="wbg bg-deessa">
          <div className="cpat"></div>
          <div className="clp">Dee's<br /><span style={{'fontSize': '.85rem', 'opacity': '.5'}}>deessalad.shop</span></div>
        </div>
        <div className="wov"></div>
        <div className="whov"></div>
        <a href="https://www.deessalad.shop" target="_blank" rel="noopener" className="warrow"
          aria-label="Visit Dee's Salad Station website">↗</a>
        <div className="wi">
          <div className="wtags">
            <span className="wtag">Website Development</span>
            <span className="wtag">Brand Photography</span>
          </div>
          <h3 className="wtitle">Dee's Salad Station</h3>
          <p className="wsub">Fresh salad food brand digital store, photography and online ordering · deessalad.shop</p>
        </div>
      </div>

      {/*  Project 4: TheFlip  */}
      <div className="wc reveal rd1">
        <div className="wbg bg-flip">
          <div className="cpat"></div>
          <div className="clp">TheFlip<br /><span style={{'fontSize': '.85rem', 'opacity': '.5'}}>theflip.in</span></div>
        </div>
        <div className="wov"></div>
        <div className="whov"></div>
        <a href="https://theflip.in" target="_blank" rel="noopener" className="warrow"
          aria-label="Visit TheFlip.in website">↗</a>
        <div className="wi">
          <div className="wtags">
            <span className="wtag">Website Development</span>
            <span className="wtag">Video Editing</span>
            <span className="wtag">Branding</span>
          </div>
          <h3 className="wtitle">TheFlip.in</h3>
          <p className="wsub">Creative platform digital build, video showcases and brand direction · theflip.in</p>
        </div>
      </div>

      {/*  Project 5: Jiana Suites  */}
      <div className="wc reveal rd2">
        <div className="wbg bg-jiana">
          <div className="cpat"></div>
          <div className="clp">Jiana Suites<br /><span style={{'fontSize': '.85rem', 'opacity': '.5'}}>Hospitality</span></div>
        </div>
        <div className="wov"></div>
        <div className="whov"></div>
        <div className="warrow">↗</div>
        <div className="wi">
          <div className="wtags">
            <span className="wtag">Website Development</span>
            <span className="wtag">Hospitality Marketing</span>
          </div>
          <h3 className="wtitle">Jiana Suites</h3>
          <p className="wsub">Luxury hospitality stay website design, digital brand presentation and enquiry flow</p>
        </div>
      </div>

      {/*  Project 6: PG Association  */}
      <div className="wc feat reveal rd2">
        <div className="wbg bg-pg">
          <div className="cpat"></div>
          <div className="clp">PG Association<br /><span style={{'fontSize': '1rem', 'opacity': '.5'}}>@pgassociationblr</span></div>
        </div>
        <div className="wov"></div>
        <div className="whov"></div>
        <a href="https://www.instagram.com/pgassociationblr/" target="_blank" rel="noopener noreferrer" className="warrow"
          aria-label="Visit PG Association Instagram profile">↗</a>
        <div className="wi">
          <div className="wtags">
            <span className="wtag">Digital Presence</span>
            <span className="wtag">Social Media</span>
            <span className="wtag">Instagram</span>
            <span className="wtag">Digital Marketing</span>
          </div>
          <h3 className="wtitle">
            <a href="https://www.instagram.com/pgassociationblr/" target="_blank" rel="noopener noreferrer" style={{'color': 'inherit', 'textDecoration': 'none'}}>PG Association</a>
          </h3>
          <p className="wsub">We handle the complete digital presence of PG Association, including its Instagram presence and digital marketing.</p>
        </div>
      </div>

      {/*  Project 7: Amma Mess  */}
      <div className="wc reveal rd3">
        <div className="wbg bg-amma">
          <div className="cpat"></div>
          <div className="clp">Amma Mess<br /><span style={{'fontSize': '.85rem', 'opacity': '.5'}}>@ammamess.blr</span></div>
        </div>
        <div className="wov"></div>
        <div className="whov"></div>
        <a href="https://www.instagram.com/ammamess.blr/" target="_blank" rel="noopener noreferrer" className="warrow"
          aria-label="Visit Amma Mess Instagram profile">↗</a>
        <div className="wi">
          <div className="wtags">
            <span className="wtag">Social Media</span>
            <span className="wtag">Instagram</span>
            <span className="wtag">Digital Marketing</span>
          </div>
          <h3 className="wtitle">
            <a href="https://www.instagram.com/ammamess.blr/" target="_blank" rel="noopener noreferrer" style={{'color': 'inherit', 'textDecoration': 'none'}}>Amma Mess</a>
          </h3>
          <p className="wsub">Social media management, brand content, and digital marketing campaigns across Instagram · Bengaluru</p>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
