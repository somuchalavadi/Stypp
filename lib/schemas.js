// Structured Data for SEO, AEO & GEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": [
    "Organization",
    "LocalBusiness"
  ],
  "@id": "https://www.stypp.in/#organization",
  "name": "Stypp",
  "alternateName": "Stypp Creative Studio",
  "url": "https://www.stypp.in/",
  "logo": "https://www.stypp.in/Sp.png",
  "image": "https://www.stypp.in/Sp.png",
  "description": "Stypp is a Bengaluru-based digital and marketing agency specializing in website development, digital marketing, advertising, social media, influencer marketing, SEO, AEO, GEO and creative production.",
  "priceRange": "\u20b9\u20b9",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9716,
    "longitude": 77.5946
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "City",
      "name": "Bengaluru"
    }
  ],
  "telephone": "+91-72593-54415",
  "email": "contact@stypp.in",
  "sameAs": [
    "https://www.instagram.com/stypp_creativestudio/"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Website Development",
        "description": "Custom, high-performance websites for businesses, corporate brands, hotels, restaurants and startups \u2014 including landing pages, website redesigns, SEO-ready architecture and conversion-focused digital experiences."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "Digital marketing strategy, multi-channel campaigns, performance tracking, conversion optimization and audience growth aligned with commercial goals."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Google Ads",
        "description": "Google Search Ads, Performance Max campaigns, keyword targeting, conversion tracking, and remarketing designed to capture active search intent."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Meta Ads",
        "description": "Instagram and Facebook advertising campaigns for brand awareness, qualified lead generation, sales, and custom retargeting."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Social Media & Campaigns",
        "description": "Social media strategy, content planning, brand campaigns, and ongoing platform management across Instagram and relevant channels."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Influencer Marketing",
        "description": "End-to-end influencer campaigns with nano, micro and macro creators \u2014 including discovery, briefing, coordination, and campaign tracking."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "SEO / AEO / GEO Services",
        "description": "Search Engine Optimization (SEO), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), technical SEO, on-page optimization, content strategy, and AI search visibility services for clients."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Creative Production",
        "description": "Campaign-ready video creation, videography, brand photography, reels, and video editing engineered to power marketing campaigns."
      }
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.stypp.in/#website",
  "name": "Stypp",
  "alternateName": "Stypp \u2014 Digital & Marketing Agency",
  "url": "https://www.stypp.in/",
  "description": "Stypp is a Bengaluru-based digital and marketing agency building websites and growing brands through digital marketing, Google Ads, Meta Ads, social media, influencer marketing and SEO, AEO & GEO.",
  "publisher": {
    "@id": "https://www.stypp.in/#organization"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.stypp.in/#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Stypp do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stypp is a digital and marketing agency based in Bengaluru, India. We operate across three core pillars: We Build (custom websites, landing pages and digital experiences), We Market (digital marketing, Google Ads, Meta Ads, social media campaigns, influencer marketing and SEO/AEO/GEO), and We Shoot (video, photography and reels designed specifically to power marketing campaigns)."
      }
    },
    {
      "@type": "Question",
      "name": "Is Stypp a digital marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Stypp is primarily a digital and marketing agency. We help brands acquire customers and scale through paid advertising, search engine optimization, social media marketing, influencer campaigns, and conversion-focused websites."
      }
    },
    {
      "@type": "Question",
      "name": "Does Stypp build websites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Website development is a core Stypp capability. We build custom, high-performance websites for businesses, corporate brands, hotels, restaurants, D2C brands and startups, engineered to convert marketing traffic into enquiries, bookings, leads and sales."
      }
    },
    {
      "@type": "Question",
      "name": "Does Stypp manage Google Ads and Meta Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We design, execute and optimize performance advertising campaigns across Google (Search Ads, Performance Max, Remarketing) and Meta (Instagram and Facebook Ads) focused on customer acquisition, lead generation, and sales."
      }
    },
    {
      "@type": "Question",
      "name": "Does Stypp handle social media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We treat social media as an active marketing channel, providing strategic management, content planning, creative direction, brand campaigns, and audience engagement across Instagram, YouTube and other relevant platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Does Stypp provide SEO, AEO and GEO services to clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Stypp provides comprehensive Search Engine Optimization (SEO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) services to clients. We help businesses acquire organic Google Search visibility, execute search-intent strategies, implement technical and on-page SEO, optimize content, and build authority across AI discovery platforms like ChatGPT, Google Gemini, and Perplexity."
      }
    },
    {
      "@type": "Question",
      "name": "Does Stypp provide influencer marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Stypp executes end-to-end influencer marketing campaigns with nano, micro and macro creators across Instagram and YouTube, managing creator discovery, briefing, coordination, creative direction, and campaign tracking."
      }
    },
    {
      "@type": "Question",
      "name": "Does Stypp provide video and creative production?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Creative production is our supporting capability. We shoot on-location brand videos, commercial photography, and edit Instagram Reels specifically created to stop the scroll and support active marketing campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Stypp based?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stypp is based in Bengaluru, Karnataka, India, and serves clients across Karnataka and India."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does Stypp work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stypp has verified project experience across hospitality and hotels, restaurants and food brands, D2C retail brands, professional associations, creative platforms, and startups."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact Stypp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Stypp directly by phone or WhatsApp at +91 72593 54415, by email at contact@stypp.in, or by booking a project consultation on our website at https://www.stypp.in/."
      }
    }
  ]
};
