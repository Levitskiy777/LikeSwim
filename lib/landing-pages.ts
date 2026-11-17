// ─── Types ───────────────────────────────────────────────────────────────────

export type CityType = "beach" | "urban" | "suburban";

export type CityData = {
  slug: string;
  name: string;
  county: string;
  type: CityType;
  descriptor: string;
  poolContext: string;
  nearby: string[];
};

export type ServiceType = "group-kids" | "group-adults" | "private-kids" | "private-adults" | "triathlon" | "online";

export type ServiceData = {
  slug: string;
  name: string;
  shortName: string;
  serviceType: ServiceType;
  tagline: string;
  price: string;
  priceDetail: string;
  firstLesson?: string;
  groupSize?: string;
  groupNote?: string;
  includes: string[];
  goodFor: string[];
  faq: { q: string; a: string }[];
};

// ─── Cities ──────────────────────────────────────────────────────────────────

export const cities: CityData[] = [
  {
    slug: "miami",
    name: "Miami",
    county: "Miami-Dade County",
    type: "urban",
    descriptor: "the vibrant cosmopolitan hub of South Florida",
    poolContext: "luxury condominium pools, hotel pools, and community aquatic centers",
    nearby: ["Coral Gables", "Brickell", "Coconut Grove", "Wynwood"],
  },
  {
    slug: "miami-beach",
    name: "Miami Beach",
    county: "Miami-Dade County",
    type: "beach",
    descriptor: "the iconic barrier island renowned for its Art Deco architecture and Atlantic coastline",
    poolContext: "oceanfront hotel pools, rooftop pools, and private condominium pools along Collins Avenue",
    nearby: ["Surfside", "Bal Harbour", "South Beach", "Mid-Beach"],
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    county: "Broward County",
    type: "urban",
    descriptor: "the Venice of America, celebrated for its extensive waterway network and vibrant beach scene",
    poolContext: "luxury waterfront properties, resort pools, and community aquatic facilities",
    nearby: ["Pompano Beach", "Deerfield Beach", "Oakland Park", "Wilton Manors"],
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    county: "Broward County",
    type: "beach",
    descriptor: "a laid-back coastal city perfectly positioned between Miami and Fort Lauderdale",
    poolContext: "beachside condominium pools, HOA community pools, and private residential pools",
    nearby: ["Hallandale Beach", "Dania Beach", "Pembroke Pines", "Davie"],
  },
  {
    slug: "hallandale-beach",
    name: "Hallandale Beach",
    county: "Broward County",
    type: "beach",
    descriptor: "a lively beachfront city sitting on the Miami-Dade and Broward county border",
    poolContext: "high-rise condominium pools and private residential pools throughout the city",
    nearby: ["Hollywood", "Aventura", "Golden Beach", "Pembroke Park"],
  },
  {
    slug: "aventura",
    name: "Aventura",
    county: "Miami-Dade County",
    type: "suburban",
    descriptor: "an upscale planned community known for its luxury towers and world-class shopping",
    poolContext: "resort-style condominium pools and private HOA pools in gated communities",
    nearby: ["Sunny Isles Beach", "Hallandale Beach", "Golden Beach", "North Miami Beach"],
  },
  {
    slug: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    county: "Miami-Dade County",
    type: "beach",
    descriptor: "a glamorous oceanfront city lined with luxury high-rises along the Atlantic shore",
    poolContext: "oceanfront tower pools, resort pools, and private condominium pool decks",
    nearby: ["Aventura", "Bal Harbour", "North Miami Beach", "Golden Beach"],
  },
  {
    slug: "bal-harbour",
    name: "Bal Harbour",
    county: "Miami-Dade County",
    type: "beach",
    descriptor: "an exclusive seaside village known for its world-famous luxury shopping district",
    poolContext: "private luxury condominium pools and boutique hotel pools steps from the Atlantic",
    nearby: ["Surfside", "Sunny Isles Beach", "Bay Harbor Islands", "Miami Beach"],
  },
  {
    slug: "surfside",
    name: "Surfside",
    county: "Miami-Dade County",
    type: "beach",
    descriptor: "a charming, quiet beach town nestled between Bal Harbour and Miami Beach",
    poolContext: "private residential pools, small-building condominium pools, and oceanfront properties",
    nearby: ["Bal Harbour", "Miami Beach", "Bay Harbor Islands", "North Miami Beach"],
  },
  {
    slug: "boca-raton",
    name: "Boca Raton",
    county: "Palm Beach County",
    type: "suburban",
    descriptor: "an upscale coastal city renowned for its Spanish-Mediterranean architecture and affluent communities",
    poolContext: "country club pools, gated community HOA pools, and luxury residential pools",
    nearby: ["Delray Beach", "Deerfield Beach", "Boynton Beach", "Parkland"],
  },
  {
    slug: "delray-beach",
    name: "Delray Beach",
    county: "Palm Beach County",
    type: "beach",
    descriptor: "a lively coastal city celebrated for its vibrant Atlantic Avenue dining scene and Atlantic Ocean beaches",
    poolContext: "private community pools, HOA pools, and oceanfront condominium pools",
    nearby: ["Boynton Beach", "Boca Raton", "Lake Worth Beach", "Lantana"],
  },
  {
    slug: "boynton-beach",
    name: "Boynton Beach",
    county: "Palm Beach County",
    type: "suburban",
    descriptor: "a growing coastal community with a mix of waterfront living and family-friendly neighborhoods",
    poolContext: "community recreation center pools, HOA pools, and private residential pools",
    nearby: ["Delray Beach", "West Palm Beach", "Lake Worth Beach", "Greenacres"],
  },
  {
    slug: "west-palm-beach",
    name: "West Palm Beach",
    county: "Palm Beach County",
    type: "urban",
    descriptor: "the cultural and economic heart of Palm Beach County with a thriving downtown arts scene",
    poolContext: "luxury condominium pools, community aquatic centers, and hotel pools across the city",
    nearby: ["Palm Beach", "Lake Worth Beach", "Riviera Beach", "Royal Palm Beach"],
  },
  {
    slug: "coral-springs",
    name: "Coral Springs",
    county: "Broward County",
    type: "suburban",
    descriptor: "a highly rated master-planned suburban city known for its top-ranked schools and family-friendly lifestyle",
    poolContext: "HOA community pools, neighborhood clubhouse pools, and private residential pools",
    nearby: ["Parkland", "Coconut Creek", "Margate", "Tamarac"],
  },
  {
    slug: "pompano-beach",
    name: "Pompano Beach",
    county: "Broward County",
    type: "beach",
    descriptor: "a revitalized coastal city in central Broward with a growing arts scene and beautiful Atlantic beaches",
    poolContext: "beachfront condominium pools, private home pools, and resort pool facilities",
    nearby: ["Deerfield Beach", "Fort Lauderdale", "Lighthouse Point", "Oakland Park"],
  },
  {
    slug: "deerfield-beach",
    name: "Deerfield Beach",
    county: "Broward County",
    type: "beach",
    descriptor: "a scenic coastal community at the northern edge of Broward County where the beach lifestyle thrives",
    poolContext: "condominium pools along the ocean, private home pools, and community aquatic facilities",
    nearby: ["Boca Raton", "Pompano Beach", "Hillsboro Beach", "Coconut Creek"],
  },
  {
    slug: "pembroke-pines",
    name: "Pembroke Pines",
    county: "Broward County",
    type: "suburban",
    descriptor: "one of Broward's largest and most family-oriented cities with excellent parks and recreation amenities",
    poolContext: "community recreation pools, HOA pools in planned subdivisions, and private residential pools",
    nearby: ["Miramar", "Hollywood", "Davie", "Cooper City"],
  },
  {
    slug: "miramar",
    name: "Miramar",
    county: "Broward County",
    type: "suburban",
    descriptor: "a diverse and rapidly growing suburban city in southern Broward County",
    poolContext: "neighborhood HOA pools, gated community clubhouse pools, and private residential pools",
    nearby: ["Pembroke Pines", "Hollywood", "Hallandale Beach", "Cooper City"],
  },
  {
    slug: "davie",
    name: "Davie",
    county: "Broward County",
    type: "suburban",
    descriptor: "a unique blend of equestrian heritage and modern suburban living in western Broward County",
    poolContext: "private residential pools, ranch-property pools, and community recreation pools",
    nearby: ["Weston", "Pembroke Pines", "Fort Lauderdale", "Cooper City"],
  },
  {
    slug: "weston",
    name: "Weston",
    county: "Broward County",
    type: "suburban",
    descriptor: "an award-winning master-planned community consistently ranked among the safest and most family-friendly cities in Florida",
    poolContext: "HOA community pools in gated neighborhoods, resort-style amenity pools, and private home pools",
    nearby: ["Davie", "Coral Springs", "Cooper City", "Pembroke Pines"],
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: ServiceData[] = [
  {
    slug: "group-swimming-lessons-kids",
    name: "Group Swimming Lessons for Kids",
    shortName: "Kids Group Swim Lessons",
    serviceType: "group-kids",
    tagline: "Small-group swim classes for children — up to 4 kids per session",
    price: "from $120",
    priceDetail: "$120 / 30 min · $145 / 45 min · $170 / 60 min",
    groupSize: "2–4 children",
    groupNote: "price per group, up to 4 people",
    includes: [
      "Water safety and pool rules",
      "Floating and basic body position",
      "Freestyle and backstroke fundamentals",
      "Breathing technique and rhythm",
      "Fun, age-appropriate drills and games",
      "Individual feedback each session",
    ],
    goodFor: [
      "Children ages 4–12, all skill levels",
      "Kids ready to learn with peers",
      "Parents looking for an affordable group option",
      "Beginners building water confidence",
      "Children who have basic water familiarity",
    ],
    faq: [
      { q: "What age range do group kids lessons cover?", a: "Group lessons are designed for children ages 4 to 12. For younger children (ages 3–4), private lessons are recommended for a more focused, one-on-one experience." },
      { q: "How many children are in each group?", a: "Sessions are kept small — a maximum of 4 children per group. This ensures every child receives individual attention and meaningful progress each session." },
      { q: "What level do my children need to be?", a: "All skill levels are welcome. Pavel assesses each child at the first session and groups children by ability level when possible." },
      { q: "How long until my child can swim independently?", a: "Most children show meaningful progress within 5–10 sessions. Consistency is key — weekly lessons produce the fastest results." },
      { q: "Do I need to bring any equipment?", a: "Just a swimsuit, towel, and swim cap (recommended). Pavel brings all training equipment including kickboards, pull buoys, and fins." },
      { q: "Where do the lessons take place?", a: "Lessons take place at private pools in condominiums and residential communities. Pavel travels to your pool — you don't need to travel anywhere." },
    ],
  },
  {
    slug: "group-swimming-lessons-adults",
    name: "Group Swimming Lessons for Adults",
    shortName: "Adult Group Swim Lessons",
    serviceType: "group-adults",
    tagline: "Small-group swim classes for adults — up to 4 people per session",
    price: "from $120",
    priceDetail: "$120 / 30 min · $145 / 45 min · $170 / 60 min",
    groupSize: "2–4 adults",
    groupNote: "price per group, up to 4 people",
    includes: [
      "Water confidence and relaxation techniques",
      "Proper body alignment and floating",
      "Freestyle (front crawl) stroke development",
      "Backstroke and breaststroke basics",
      "Bilateral breathing and rhythm training",
      "Endurance drills suited to your fitness level",
    ],
    goodFor: [
      "Adults 18+ at any skill level",
      "Complete beginners overcoming a fear of water",
      "Casual swimmers wanting to improve technique",
      "Adults who prefer learning alongside peers",
      "Those looking for a social, motivating environment",
    ],
    faq: [
      { q: "Is it okay if I'm a complete adult beginner?", a: "Absolutely. Many adult students start with no swimming experience at all. Pavel specializes in helping adults overcome fear of water and build genuine confidence from the ground up." },
      { q: "How many adults are in each group class?", a: "Group sessions are capped at 4 adults maximum. Small groups mean you still get personalized feedback and corrections every session." },
      { q: "What strokes will we learn?", a: "The curriculum is tailored to the group's level. Beginners typically focus on freestyle (front crawl) and backstroke. More advanced groups work on breaststroke, butterfly, and technique refinement." },
      { q: "How quickly do adults typically progress?", a: "With consistent weekly lessons, most adult beginners can swim basic freestyle confidently within 8–12 sessions. Results vary based on your starting level and how often you practice between lessons." },
      { q: "Do I need to be physically fit to join?", a: "No — lessons are adapted to your current fitness level. Pavel works with adults of all ages and fitness backgrounds." },
      { q: "Where do lessons take place?", a: "Pavel comes to private pools at condominiums, residential communities, and private homes. You tell him your pool location and he travels to you." },
    ],
  },
  {
    slug: "private-swimming-lessons-kids",
    name: "Private Swimming Lessons for Kids",
    shortName: "Private Kids Swim Lessons",
    serviceType: "private-kids",
    tagline: "Expert 1-on-1 swim coaching tailored to each child's pace and goals",
    price: "from $75",
    priceDetail: "$75 / 30 min · $110 / 45 min · $145 / 60 min",
    firstLesson: "First lesson 50% off",
    includes: [
      "Full 1-on-1 attention every session",
      "Customized lesson plan for your child's level",
      "Water safety, floating, and stroke fundamentals",
      "Fear of water addressed with patience and care",
      "Age-appropriate drills and play-based learning (ages 3–6)",
      "Advanced stroke work for older or experienced swimmers",
    ],
    goodFor: [
      "Children ages 3 and up, all skill levels",
      "Kids with fear of water or sensory sensitivities",
      "Children who need one-on-one attention to thrive",
      "Young swimmers preparing for competitive swimming",
      "Kids with busy schedules who need flexible lesson times",
    ],
    faq: [
      { q: "What is the youngest age you accept for private lessons?", a: "Private lessons start from age 3. For toddlers, lessons are play-based and focus on water acclimation and confidence. Structured technique begins around ages 4–5." },
      { q: "How is the first lesson structured?", a: "The first session (50% off) is a diagnostic lesson. Pavel assesses your child's current level, identifies any fears or hesitations, and creates a personalized plan. There's no pressure — it's all about getting comfortable." },
      { q: "My child is afraid of the water. Can you help?", a: "Yes. This is one of the most common starting points. Pavel has helped hundreds of children (and adults) work through water anxiety using a patient, progressive approach — never forcing, always encouraging." },
      { q: "How long until my child can swim independently?", a: "Most children swimming from scratch can swim basic freestyle independently within 8–15 sessions with weekly lessons. Children who already have some exposure typically progress faster." },
      { q: "What session length do you recommend for kids?", a: "For young children (ages 3–6), 30-minute sessions are ideal — it matches their attention span. For ages 7 and up, 45 minutes is the most popular and effective format." },
      { q: "Do lessons happen at our home pool?", a: "Yes — Pavel travels to your condo pool, HOA pool, or private home pool. You don't need to go anywhere." },
    ],
  },
  {
    slug: "private-swimming-lessons-adults",
    name: "Private Swimming Lessons for Adults",
    shortName: "Private Adult Swim Lessons",
    serviceType: "private-adults",
    tagline: "Personalized 1-on-1 swim coaching for adults of all levels — from beginner to advanced",
    price: "from $75",
    priceDetail: "$75 / 30 min · $110 / 45 min · $145 / 60 min",
    firstLesson: "First lesson 50% off",
    includes: [
      "Full 1-on-1 attention — 100% focused on you",
      "Water confidence and fear-of-water support",
      "Freestyle, backstroke, breaststroke, and butterfly technique",
      "Breathing mechanics and bilateral breathing",
      "Stamina and endurance building",
      "Video feedback and drill corrections on request",
    ],
    goodFor: [
      "Adult beginners with little or no swimming experience",
      "Adults who want to overcome fear of water",
      "Experienced swimmers looking to fix technique",
      "Fitness swimmers wanting to swim more efficiently",
      "Adults training for open water events or triathlons",
    ],
    faq: [
      { q: "I've never swum before. Is it too late to learn as an adult?", a: "Never. Adults often make faster progress than children because they understand instructions better and can focus intentionally. Pavel has taught many adults from complete zero — some in their 40s, 50s, and beyond." },
      { q: "I'm afraid of deep water. Can you still help me?", a: "Absolutely. Water anxiety in adults is very common. Pavel uses a gradual, respectful approach — starting in shallow water and building confidence step by step. You stay in control at all times." },
      { q: "What session length is best for adults?", a: "45 minutes is the most popular format — enough time to cover technique, drills, and real swimming practice. If your goal is fitness or triathlon prep, 60-minute sessions give more volume and depth." },
      { q: "How many lessons will it take before I can swim laps?", a: "Most adult beginners can swim basic freestyle laps within 10–15 sessions. If you already know how to swim but want better technique, you'll see meaningful improvements within 3–5 sessions." },
      { q: "Do you teach butterfly stroke?", a: "Yes. Butterfly is typically introduced after the other three strokes are solid. Pavel teaches all four competitive strokes." },
      { q: "Can you come to my apartment or condo pool?", a: "Yes — that's the standard setup. Pavel travels to your pool at a time that works for your schedule." },
    ],
  },
  {
    slug: "triathlon-swim-training",
    name: "Triathlon Swim Training",
    shortName: "Triathlon Swim Coaching",
    serviceType: "triathlon",
    tagline: "Race-focused swim coaching for triathletes and open water swimmers",
    price: "from $110",
    priceDetail: "$110 / 45 min · $145 / 60 min",
    firstLesson: "First session 50% off",
    includes: [
      "Open water swimming technique and adaptation",
      "Sighting and navigation drills",
      "Drafting strategy and pack swimming",
      "Race-pace intervals and lactate threshold work",
      "Wetsuit swimming adaptation (on request)",
      "Transition-to-bike swim-exit technique",
    ],
    goodFor: [
      "Sprint, Olympic, and Ironman triathlon competitors",
      "Cyclists and runners adding swimming to training",
      "Open water swimming enthusiasts",
      "Swimmers who want to reduce race-day swim anxiety",
      "Athletes who lose time in the swim leg of triathlons",
    ],
    faq: [
      { q: "I'm a runner/cyclist — how much swimming experience do I need?", a: "None is required to start, though most triathlon clients have some pool experience. Pavel will assess your current level and build a plan from there — whether you're doing your first sprint or preparing for an Ironman." },
      { q: "Do you coach open water swimming specifically?", a: "Yes. While training sessions are conducted in pool environments, Pavel specifically addresses open water skills: sighting, bilateral breathing, drafting, and managing the mass-start chaos of a race." },
      { q: "How many sessions per week do you recommend for triathlon prep?", a: "Most triathletes benefit from 2–3 swim sessions per week. Pavel can coach 1–2 of those sessions while providing drill sets and training plans for your independent sessions." },
      { q: "Can you help me improve my swim split time?", a: "Yes. Many triathletes have poor technique that wastes significant energy. Even small technique corrections — catch position, hip rotation, kick efficiency — can drop several minutes from your swim split." },
      { q: "Do you work with Ironman-distance athletes?", a: "Yes. Pavel has coached athletes preparing for Ironman, Half Ironman, and Olympic-distance events. Training is periodized to align with your race calendar." },
      { q: "Do lessons happen at a pool?", a: "Sessions are held at your local pool or condo pool. Pavel travels to your location in South Florida." },
    ],
  },
  {
    slug: "online-swim-coaching",
    name: "Online Swim Coaching",
    shortName: "Online Swim Coaching",
    serviceType: "online",
    tagline: "Expert video-based swim coaching from anywhere in the world",
    price: "from $40",
    priceDetail: "$40 / analysis · $200 / 2 weeks · $650 / month",
    includes: [
      "Video stroke analysis with frame-by-frame breakdown",
      "Personalized written drill and training plan",
      "Live video session via Zoom or WhatsApp",
      "Technique correction with annotated video feedback",
      "Monthly training program on request",
      "Ongoing messaging support between sessions",
    ],
    goodFor: [
      "Swimmers outside South Florida or traveling frequently",
      "Intermediate to advanced swimmers fixing specific technique issues",
      "Triathletes wanting a training plan without in-person sessions",
      "Athletes who already have access to a pool but need coaching direction",
      "Anyone who wants expert feedback on their stroke",
    ],
    faq: [
      { q: "How does online coaching work?", a: "You record yourself swimming (underwater and above-water video is ideal), share the footage with Pavel, and receive a detailed video analysis with annotated feedback and a customized drill plan within 48 hours." },
      { q: "What equipment do I need to film myself?", a: "A waterproof phone or GoPro works well. Many public and private pools allow filming. Underwater footage is most valuable, but above-water footage of your arms and breathing is also useful." },
      { q: "Can I do live sessions online?", a: "Yes — live sessions via Zoom or WhatsApp video are available. You swim while Pavel watches and gives real-time instructions. This works well for technique drills and breathing exercises." },
      { q: "Is online coaching as effective as in-person lessons?", a: "For intermediate and advanced swimmers fixing specific technique issues, online coaching can be highly effective. For complete beginners or young children, in-person lessons are strongly recommended." },
      { q: "How quickly will I receive my video analysis?", a: "Video analysis with a written report and drill plan is delivered within 48 hours of receiving your footage." },
      { q: "Do you provide training plans for triathletes online?", a: "Yes. Pavel creates periodized swim training plans for triathletes, including weekly yardage targets, drill sets, and race-prep timelines." },
    ],
  },
];

// ─── Lookup helpers ───────────────────────────────────────────────────────────

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

// ─── Content generators ───────────────────────────────────────────────────────

export function buildMetaTitle(city: CityData, service: ServiceData): string {
  return `${service.shortName} in ${city.name}, FL | LikeSwim — Pavel Levitskii`;
}

export function buildMetaDescription(city: CityData, service: ServiceData): string {
  const descByType: Record<ServiceType, string> = {
    "group-kids": `Small-group swimming lessons for kids in ${city.name}, FL. Up to 4 children per session — fun, structured, and affordable. Serving ${city.county}. First lesson 50% off.`,
    "group-adults": `Group swimming lessons for adults in ${city.name}, FL. Small classes of up to 4 people with expert coaching from a Master of Sport. Serving ${city.county}.`,
    "private-kids": `Private 1-on-1 swim lessons for kids in ${city.name}, FL. Expert coaching from a Master of Sport. First lesson 50% off — no commitment.`,
    "private-adults": `Private swimming lessons for adults in ${city.name}, FL — 1-on-1 coaching for all levels. Master of Sport in swimming. First lesson 50% off.`,
    "triathlon": `Triathlon swim coaching in ${city.name}, FL. Race-focused training for sprints, Olympics, and Ironman events. Coach Pavel Levitskii — Master of Sport in swimming.`,
    "online": `Online swim coaching with Pavel Levitskii — expert video analysis and personalized drill plans delivered worldwide. Perfect for swimmers in ${city.name} or anywhere.`,
  };
  return descByType[service.serviceType];
}

export function buildH1(city: CityData, service: ServiceData): string {
  return `${service.name} in ${city.name}, FL`;
}

// Two city-specific FAQ items (unique per city, not per service) that get
// appended to each service's FAQ list on the city/service landing pages.
export function buildLocalFaq(city: CityData): { q: string; a: string }[] {
  return [
    {
      q: `Do you travel to ${city.name} and nearby areas?`,
      a: `Yes. Pavel regularly coaches in ${city.name} (${city.county}) and nearby areas — ${city.nearby.join(", ")}. If your pool is in one of these areas, just share the address when you book on WhatsApp.`,
    },
    {
      q: `What pools do lessons take place at in ${city.name}?`,
      a: `Pavel travels directly to ${city.poolContext} throughout ${city.name}. You don't need to go anywhere — just share your pool's address when booking.`,
    },
  ];
}

export function buildSubtitle(city: CityData, service: ServiceData): string {
  const byType: Record<ServiceType, string> = {
    "group-kids": `Small-group swim classes for children in ${city.descriptor} — ${service.groupSize} per session`,
    "group-adults": `Small-group adult swim classes in ${city.descriptor} — ${service.groupSize} per session`,
    "private-kids": `Expert 1-on-1 swim coaching for children in ${city.name}, ${city.county}`,
    "private-adults": `Personalized 1-on-1 swimming instruction for adults throughout ${city.name} and ${city.county}`,
    "triathlon": `Race-focused swimming training for triathletes in ${city.name} and across ${city.county}`,
    "online": `Expert video analysis and personalized swim coaching — available to swimmers in ${city.name} and worldwide`,
  };
  return byType[service.serviceType];
}

export function buildIntro(city: CityData, service: ServiceData): string {
  const byTypeAndCityType: Record<ServiceType, Record<CityType, string>> = {
    "group-kids": {
      beach: `${city.name} is home to some of South Florida's most popular waterfront living — and teaching children to swim here means giving them skills they'll use for life. Our small-group swimming lessons for kids in ${city.name} are designed for children ages 4–12, with a maximum of 4 children per session so every child gets real coaching time, not just supervision. Coach Pavel Levitskii, a Master of Sport in competitive swimming with 10+ years of coaching experience, travels directly to ${city.poolContext}. Your children get professional instruction without leaving the building.`,
      urban: `In ${city.name}'s dynamic neighborhoods, swimming is both a life skill and a social activity. Our group swimming lessons for kids bring small classes — no more than 4 children — directly to ${city.poolContext} across ${city.county}. Coach Pavel Levitskii has trained over 2,000 students internationally and brings a structured yet fun approach to every session. Kids learn water safety, proper strokes, and build the kind of confidence in the water that lasts a lifetime.`,
      suburban: `Families in ${city.name} know the value of a great swim coach — with so many HOA pools and community amenities nearby, having a professional come to you is the obvious choice. Our small-group swimming lessons for kids serve children ages 4–12 in groups of up to 4, coming directly to ${city.poolContext}. Coach Pavel Levitskii — a Master of Sport and former Russian national youth team member — brings structured, engaging lessons tailored to each child's level.`,
    },
    "group-adults": {
      beach: `Living in ${city.name} with access to ${city.poolContext}, it makes sense to finally become the confident swimmer you've always wanted to be. Our adult group swimming lessons bring small classes (max 4 people) directly to your pool in ${city.name}. Coach Pavel Levitskii — a Master of Sport in swimming with international coaching experience across Russia, Israel, and the US — teaches practical technique you'll use whether you're doing laps for fitness or heading into the ocean.`,
      urban: `In ${city.name}, swimming is more than recreation — it's a fitness tool used by thousands of residents year-round. Our adult group swimming lessons offer a structured, social way to improve your technique with a maximum of 4 adults per class. Pavel Levitskii, a Master of Sport and former World Cup participant, coaches group sessions at ${city.poolContext} across ${city.county}. Whether you're a beginner or an intermediate swimmer, you'll progress measurably each session.`,
      suburban: `${city.name}'s active, family-oriented community is the perfect environment to learn to swim properly. Our adult group swimming lessons bring expert coaching to ${city.poolContext} in small classes of up to 4 people. Coach Pavel — a Master of Sport with 10+ years of coaching and over 2,000 students trained — adapts every session to the group's current level and goals. Whether you're starting from scratch or refining an existing stroke, you'll notice real improvement.`,
    },
    "private-kids": {
      beach: `${city.name} offers some of South Florida's most beautiful aquatic surroundings, and private swimming lessons ensure your child can enjoy them safely and confidently. Coach Pavel Levitskii offers 1-on-1 children's swim lessons at ${city.poolContext} throughout ${city.name}. With a background as a Master of Sport, former youth national team member, and 10+ years coaching children and adults, Pavel tailors every lesson to your child's unique personality, pace, and goals. The first lesson is 50% off — no commitment required.`,
      urban: `In the heart of ${city.name}, private swimming lessons give children the individual attention they need to thrive in the water. Coach Pavel Levitskii comes directly to ${city.poolContext} across ${city.county}, working 1-on-1 with children from age 3 through their teenage years. A Master of Sport in competitive swimming with deep coaching experience, Pavel is especially skilled at working with children who have fear of water or need a patient, personalized approach. First lesson 50% off.`,
      suburban: `In ${city.name}'s family-forward communities, private swimming lessons are one of the most popular activities parents invest in — and for good reason. 1-on-1 coaching means your child gets 100% of the coach's attention, progress is faster, and lessons can be scheduled flexibly around school and activities. Coach Pavel Levitskii travels directly to ${city.poolContext} in ${city.name}. A Master of Sport with international experience, he has helped hundreds of children build genuine water confidence. First lesson 50% off.`,
    },
    "private-adults": {
      beach: `In ${city.name}, being surrounded by ${city.poolContext} makes swimming feel especially relevant — and private adult swim lessons ensure you're actually enjoying the water, not just wading in it. Coach Pavel Levitskii offers fully personalized 1-on-1 lessons at your pool in ${city.name}. Whether you've never swum before, want to fix a specific technique issue, or are training for fitness or open water events, Pavel creates a program specifically for you. First lesson 50% off.`,
      urban: `${city.name} is a city where fitness and ambition go hand in hand, and private swimming lessons are one of the most efficient ways to add a low-impact, full-body workout to your routine. Coach Pavel Levitskii — a Master of Sport with 20+ years in competitive swimming and 10+ years of coaching — offers 1-on-1 adult swim lessons at ${city.poolContext} across ${city.county}. Beginners are welcome. Adults who've never swum before make up a significant share of Pavel's student base, and he's built a proven method for getting complete novices swimming confidently.`,
      suburban: `${city.name}'s active residential communities make private adult swim lessons a natural fit — most homes and HOAs already have a pool. Coach Pavel Levitskii travels directly to your pool for fully private, 1-on-1 adult swimming instruction. With over 2,000 students trained across three countries, Pavel has seen every type of adult learner — from fearful beginners to fitness swimmers wanting technique refinement. He'll build a plan that meets you exactly where you are. First lesson 50% off.`,
    },
    "triathlon": {
      beach: `${city.name}'s waterfront environment makes it a natural training ground for triathletes, and mastering the swim leg is where the biggest time gains are often hiding. Coach Pavel Levitskii — a Master of Sport in swimming and former national youth team member — offers race-focused triathlon swim coaching at ${city.poolContext} in ${city.name}. Sessions target the specific demands of triathlon racing: open water technique, sighting, drafting, race-pace intervals, and swim-to-bike transitions. Whether you're doing your first sprint tri or targeting an Ironman finish, Pavel builds a plan around your timeline.`,
      urban: `For triathletes in ${city.name}, the swim leg is often the most undertrained part of the race — and the one where minutes can be gained the fastest. Coach Pavel Levitskii brings professional triathlon swim coaching to ${city.poolContext} across ${city.county}. As a Master of Sport with deep experience in competitive swimming, Pavel understands what it takes to swim efficiently under race pressure. Sessions focus on open water skills, race-specific pacing, and technique corrections that reduce drag and conserve energy for the bike and run.`,
      suburban: `Triathletes in ${city.name} have access to great pools — what they often need is coaching that's race-specific, not just swim-club generic. Coach Pavel Levitskii offers targeted triathlon swim training at your local pool in ${city.name}, with sessions built around your event distances and race calendar. Pavel is a Master of Sport in swimming with experience coaching triathletes at sprint, Olympic, and Ironman distances. He specializes in the technique and mental skills that distinguish a confident open-water swimmer from one who's just surviving the first leg.`,
    },
    "online": {
      beach: `If you're based in ${city.name} but need coaching flexibility — or you travel frequently — online swim coaching with Pavel Levitskii gives you expert instruction without being tied to a session location. Pavel offers video stroke analysis, personalized drill plans, and live coaching sessions via WhatsApp or Zoom. As a Master of Sport with 10+ years of coaching, he provides the same level of detailed, personalized feedback online as he does in person. Upload your swim video and receive a full annotated breakdown within 48 hours.`,
      urban: `${city.name}'s fast-paced lifestyle doesn't always allow for fixed coaching schedules. Online swim coaching with Pavel Levitskii offers the flexibility of expert feedback on your schedule. Whether you need a one-time stroke analysis, an ongoing training plan, or regular video check-ins, Pavel provides structured, results-driven coaching through video analysis and live online sessions. Serving swimmers in ${city.name} and ${city.county} and beyond.`,
      suburban: `For swimmers in ${city.name} with demanding schedules, online swim coaching offers expert guidance without the commute or schedule constraints. Pavel Levitskii — a Master of Sport with over 2,000 students coached across three countries — delivers detailed stroke analysis, customized drill plans, and live video sessions. Ideal for intermediate to advanced swimmers who want technique refinement, triathlon prep, or a structured training program they can follow independently.`,
    },
  };
  return byTypeAndCityType[service.serviceType][city.type];
}
