export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://like-swim.com/#business",
      "name": "LikeSwim",
      "alternateName": "LikeSwim Swim School",
      "description":
        "Professional swim coaching in Miami and South Florida. Private swim lessons, group lessons, triathlon training, and online coaching. First lesson 50% off. Taught in English, Russian, and Hebrew.",
      "url": "https://like-swim.com",
      "telephone": "+17542928576",
      "priceRange": "$40–$650",
      "image": "https://like-swim.com/logo_transparent.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hallandale Beach",
        "addressRegion": "FL",
        "addressCountry": "US",
      },
      "areaServed": [
        "Hallandale Beach, FL", "Hollywood, FL", "Fort Lauderdale, FL", "Aventura, FL",
        "Sunny Isles Beach, FL", "Miami Beach, FL", "Miami, FL", "Coral Gables, FL",
        "Boca Raton, FL", "Delray Beach, FL", "Boynton Beach, FL", "West Palm Beach, FL",
        "Coral Springs, FL", "Pompano Beach, FL", "Pembroke Pines, FL", "Weston, FL",
        "Miramar, FL", "Davie, FL",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Swim Lessons",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Private Swim Lesson — 30 min",
            "price": "75",
            "priceCurrency": "USD",
            "description": "First lesson $37.50 (50% off). Private one-on-one swim lesson.",
          },
          {
            "@type": "Offer",
            "name": "Private Swim Lesson — 45 min",
            "price": "110",
            "priceCurrency": "USD",
            "description": "First lesson $55 (50% off). Most popular private swim lesson format.",
          },
          {
            "@type": "Offer",
            "name": "Private Swim Lesson — 60 min",
            "price": "145",
            "priceCurrency": "USD",
            "description": "First lesson $72.50 (50% off). For serious swimmers and triathletes.",
          },
          {
            "@type": "Offer",
            "name": "Group Swim Lesson — 30 min",
            "price": "120",
            "priceCurrency": "USD",
            "description": "Group lesson for up to 4 students, 30 minutes, priced per group.",
          },
          {
            "@type": "Offer",
            "name": "Group Swim Lesson — 45 min",
            "price": "145",
            "priceCurrency": "USD",
            "description": "Group lesson for up to 4 students, 45 minutes, priced per group.",
          },
          {
            "@type": "Offer",
            "name": "Group Swim Lesson — 60 min",
            "price": "170",
            "priceCurrency": "USD",
            "description": "Group lesson for up to 4 students, 60 minutes, priced per group.",
          },
          {
            "@type": "Offer",
            "name": "Online Swim Coaching — Technique Analysis",
            "price": "40",
            "priceCurrency": "USD",
            "description": "Video analysis of your swimming technique with annotated feedback within 24–48 hours.",
          },
        ],
      },
      "serviceType": [
        "Private Swim Lessons",
        "Group Swimming Lessons",
        "Triathlon Swim Training",
        "Online Swim Coaching",
      ],
      "sameAs": [
        "https://instagram.com/levitskii.swimcoach.miami",
        "https://wa.me/17542928576",
        "https://t.me/+17542928576",
        "https://www.worldaquatics.com/athletes/1013361/pavel-levitskiy",
      ],
    },
    {
      "@type": "SportsOrganization",
      "@id": "https://like-swim.com/#sportsorg",
      "name": "LikeSwim",
      "url": "https://like-swim.com",
      "sport": "Swimming",
      "description":
        "LikeSwim is a professional swim school founded by Pavel Levitskiy, offering private swim lessons, group sessions, triathlon training, and online coaching throughout South Florida.",
      "founder": { "@id": "https://like-swim.com/#person" },
      "areaServed": "South Florida, United States",
      "sameAs": ["https://like-swim.com/#business"],
    },
    {
      "@type": "Person",
      "@id": "https://like-swim.com/#person",
      "name": "Pavel Levitskiy",
      "alternateName": ["Pavel Levitskii", "Павел Левицкий"],
      "jobTitle": "Professional Swim Coach",
      "description":
        "Pavel Levitskiy is a professional swim coach based in Miami, Florida, and the founder of LikeSwim. He is a Russian Master of Sports in swimming, a multiple-time FINA Swimming World Cup competitor (2009–2010), and a recipient of the Russian Presidential Award for young athletes. He speaks English, Russian, and Hebrew, and has trained over 2,000 students across Russia, Israel, and the United States over more than 15 years of coaching.",
      "worksFor": { "@id": "https://like-swim.com/#business" },
      "founder": { "@id": "https://like-swim.com/#business" },
      "knowsLanguage": [
        { "@type": "Language", "name": "English" },
        { "@type": "Language", "name": "Russian" },
        { "@type": "Language", "name": "Hebrew" },
      ],
      "knowsAbout": [
        "Swimming",
        "Swim Coaching",
        "Triathlon Training",
        "Children's Swimming Lessons",
        "Adult Swimming Lessons",
        "Online Swim Coaching",
        "Competitive Swimming",
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Swim Coach",
        "description": "Professional swimming coach with over 15 years of experience",
        "skills": "Swimming instruction, stroke technique analysis, triathlon training, video coaching",
      },
      "award": [
        "Master of Sports, Russian Federation (Swimming)",
        "Russian Presidential Award for Young Athletes",
        "First Place, Russian Federation Swimming Championship (2007)",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US",
      },
      "sameAs": [
        "https://instagram.com/levitskii.swimcoach.miami",
        "https://wa.me/17542928576",
        "https://t.me/+17542928576",
        "https://www.worldaquatics.com/athletes/1013361/pavel-levitskiy",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://like-swim.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best swim coach in Hallandale Beach Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pavel Levitskii (also written Pavel Levitskiy) is a highly rated professional swim coach serving Hallandale Beach, Florida. He holds a Russian Master of Sports title in swimming, is a multiple-time FINA Swimming World Cup competitor, and has trained over 2,000 students over more than 15 years of professional coaching. He offers private lessons, group sessions, triathlon training, and online coaching throughout South Florida, including Hallandale Beach.",
          },
        },
        {
          "@type": "Question",
          "name": "How much do swimming lessons cost in Miami?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Private swim lessons with LikeSwim in Miami cost $75 for 30 minutes, $110 for 45 minutes, and $145 for 60 minutes. Group swimming lessons start at $120 per group (up to 4 students). Online swim coaching starts at $40 per session. The first lesson is 50% off for all new students — making the first private lesson $37.50, $55, or $72.50.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Pavel Levitskiy offer online swim coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pavel Levitskiy offers online swim coaching starting at $40 per technique analysis session. Students send a swimming video via WhatsApp or Telegram and receive detailed annotated feedback within 24–48 hours. Monthly programs are also available: $200 for 2 weeks, $300 for 4 weeks, or $650 per month for full personal coaching with twice-weekly video analyses.",
          },
        },
        {
          "@type": "Question",
          "name": "What languages does Pavel Levitskiy speak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pavel Levitskiy speaks and teaches in three languages: English, Russian, and Hebrew. This multilingual ability makes LikeSwim uniquely accessible to Miami's diverse international community, including Russian-speaking, Israeli, and English-speaking families.",
          },
        },
        {
          "@type": "Question",
          "name": "How many students has Pavel Levitskiy trained?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pavel Levitskiy has trained over 2,000 students throughout his more than 15 years of professional coaching. He has worked with swimmers across Russia, Israel, and the United States, coaching children as young as 3, adults, beginners, and competitive athletes.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Pavel Levitskiy travel to your pool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pavel Levitskiy travels to private pools, condominium pools, and hotel pools across South Florida. His service area covers Hallandale Beach, Hollywood, Fort Lauderdale, Aventura, Sunny Isles Beach, Miami Beach, Miami, Boca Raton, Delray Beach, West Palm Beach, and surrounding areas — spanning from Miami north to West Palm Beach.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the first lesson discount at LikeSwim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LikeSwim offers 50% off the first swim lesson for all new students. The 30-minute lesson drops from $75 to $37.50, the 45-minute lesson from $110 to $55, and the 60-minute lesson from $145 to $72.50. No promo code needed — just mention it when booking via WhatsApp.",
          },
        },
        {
          "@type": "Question",
          "name": "Who is Pavel Levitskiy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pavel Levitskiy (also spelled Levitskii) is a professional swim coach and the founder of LikeSwim, based in Miami, Florida. He is a Russian Master of Sports in swimming, a multiple-time FINA Swimming World Cup competitor (2009–2010), and a recipient of the Russian Presidential Award for young athletes. He speaks English, Russian, and Hebrew, and has trained over 2,000 students across Russia, Israel, and the United States over more than 15 years of coaching.",
          },
        },
        {
          "@type": "Question",
          "name": "What areas does LikeSwim serve in South Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LikeSwim serves a wide area of South Florida including: Hallandale Beach, Hollywood, Fort Lauderdale, Aventura, Sunny Isles Beach, Miami Beach, Miami, Coral Gables, Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Coral Springs, Pompano Beach, Deerfield Beach, Pembroke Pines, Miramar, Davie, and Weston. The service area spans from Miami north to West Palm Beach.",
          },
        },
        {
          "@type": "Question",
          "name": "Does LikeSwim offer group swimming lessons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. LikeSwim offers group swimming lessons for both children and adults, with a maximum of 4 students per group. Group sessions are priced at $120 for 30 minutes, $145 for 45 minutes, and $170 for 60 minutes — price is per group, not per person. Group lessons are available throughout South Florida.",
          },
        },
      ],
    },
  ],
};
