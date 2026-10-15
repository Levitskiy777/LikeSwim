export interface BlogPostEn {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  content: ContentBlockEn[];
}

export type ContentBlockEn =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

const WHATSAPP = "https://wa.me/17542928576";

export const blogPostsEn: BlogPostEn[] = [
  {
    slug: "swimming-lessons-autism-adhd-miami",
    title: "Swimming Lessons for Kids with Autism and ADHD in Miami",
    metaTitle: "Swimming Lessons for Kids with Autism and ADHD in Miami | LikeSwim",
    metaDescription:
      "Private swim lessons for children with autism and ADHD in Miami, Hallandale Beach, and Aventura. Coach Pavel Levitskii travels to your pool. First lesson 50% off.",
    date: "2026-10-02",
    readingTime: "7 min",
    category: "Special Needs",
    excerpt:
      "In over ten years of coaching swimming across Russia, Israel, and the United States, some of my most rewarding work has been with children on the autism spectrum and kids with ADHD. Water does something for these children that's hard to replicate on land — it calms, focuses, and builds confidence. Here's what I've learned, lesson by lesson.",
    content: [
      {
        type: "p",
        text: "In over ten years of coaching swimming across Russia, Israel, and the United States — now based in Miami — some of my most rewarding work has been with children on the autism spectrum (ASD) and children with attention deficit hyperactivity disorder (ADHD). Water does something for these kids that's hard to replicate on land — it calms, focuses, and builds a sense of accomplishment that carries far beyond the pool. In this article I'll share what I've learned, lesson by lesson, coaching families across Miami, Hallandale Beach, and Aventura.",
      },
      {
        type: "h2",
        text: "Why Water Works",
      },
      {
        type: "p",
        text: "For children with ASD, the aquatic environment provides sensory input that many find naturally regulating. The even hydrostatic pressure of water against the body creates a gentle, full-body sensation similar to deep-pressure therapy. Add the rhythmic, repetitive nature of swimming strokes and breathing, and you have a stimulus pattern that many children on the spectrum find predictably calming — unlike the unpredictable sensory noise of a playground or classroom. There are no sudden sounds, no unexpected touch from peers. Just water and rhythm.",
      },
      {
        type: "p",
        text: "For children with ADHD, the mechanism is different but equally powerful. Physical exertion in water channels excess energy with remarkable efficiency — a 40-minute session in the pool delivers the neurological benefit of a much longer land-based activity. Parents regularly tell me that after a swim lesson, their child is noticeably calmer and more focused for the rest of the day. Several families specifically schedule lessons on school mornings for exactly this reason.",
      },
      {
        type: "h2",
        text: "The First Lesson: Building Trust Before Teaching Technique",
      },
      {
        type: "p",
        text: "My approach with ASD or ADHD children on day one has nothing to do with swimming technique. We meet before the session — I talk with parents, learn about the child's specific patterns: what helps them feel safe, what triggers anxiety, how they respond to new adults. Then the child sets the pace entirely. Some kids step right into the water. Some sit on the edge for 20 minutes. Some just want to watch. A first lesson is a success if the child leaves calm and willing to come back.",
      },
      {
        type: "ul",
        items: [
          "No demands in the first 5–10 minutes — just let the child explore the pool environment at their own pace.",
          "Parents may stay poolside or get in the water alongside the child if it helps them feel secure.",
          "I never force face submersion — it happens naturally, when the child is ready and comfortable.",
          "Consistent verbal cues and counting give the session a predictable rhythm the child can latch onto.",
          "Every lesson opens and closes the same way, so the routine itself becomes part of what feels safe.",
        ],
      },
      {
        type: "h2",
        text: "Techniques That Make a Difference",
      },
      {
        type: "p",
        text: "With ADHD kids, I anchor attention through rhythm: counting strokes out loud — \"one-two-three, breathe\" — keeps the mind tethered to the task. Exercises are kept short (15–20 seconds each) and varied, so the brain doesn't drift. Every lesson follows the same structure: water entry, a warm-up with a playful element, the main skill work, a brief free minute at the end. Predictability reduces cognitive load and lets the child actually focus on swimming.",
      },
      {
        type: "p",
        text: "For children with ASD, I keep the physical lesson environment consistent — same lane, same entry point, same opening phrase each time. New elements are introduced slowly and announced in advance: \"Today we're going to try something new — you'll hold the board while I count.\" Kickboards and pool noodles are regular tools, not something to phase out as quickly as possible. They give the child control over their body in an unfamiliar environment, and that sense of control is exactly where confidence begins.",
      },
      {
        type: "h2",
        text: "What Parents Should Realistically Expect",
      },
      {
        type: "p",
        text: "I tell every parent upfront: adjust your timeline. A typically developing child might start swimming independently in 8–12 lessons. A child with ASD or ADHD may need 20, 25, even 30 sessions — and that's completely normal. Progress is rarely linear: three strong lessons may be followed by one where the child refuses to get in the water at all. That's not regression. That's the process. Life outside the pool affects what happens in it.",
      },
      {
        type: "ul",
        items: [
          "The first two or three lessons might just be pool familiarity — that is still real, meaningful progress.",
          "Keep the coach informed about outside stressors: schedule disruptions, illness, poor sleep all show up in the water.",
          "Praise effort, not outcome: \"you were so brave today\" lands better than counting meters.",
          "Short video clips over time are the best evidence of progress — for you, and for the child to see themselves.",
        ],
      },
      {
        type: "h2",
        text: "I Travel to Your Pool",
      },
      {
        type: "p",
        text: "One of the biggest advantages I can offer families with special needs children is this: I come to you. No crowded public swim school, no unfamiliar locker rooms, no sensory overload before the lesson even starts. I travel to private pools, condominium pools, and hotel pools across South Florida — from Miami and Miami Beach to Hallandale Beach, Hollywood, Aventura, Sunny Isles Beach, Fort Lauderdale, and Boca Raton. Your child arrives in a familiar environment, which makes everything that follows easier.",
      },
      {
        type: "p",
        text: "I'm Pavel Levitskii, founder of LikeSwim. If you're considering swimming for your child and want to talk first — no commitment, just a conversation — message me on WhatsApp. I teach in English, Russian, and Hebrew, and I work with families across Miami-Dade and Broward County. The first lesson is 50% off for all new students.",
      },
    ],
  },
];

export function getEnPostBySlug(slug: string): BlogPostEn | undefined {
  return blogPostsEn.find((p) => p.slug === slug);
}

export const WHATSAPP_URL_EN = WHATSAPP;
