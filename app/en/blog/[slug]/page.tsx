import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowLeft, Clock } from "lucide-react";
import { blogPostsEn, getEnPostBySlug, WHATSAPP_URL_EN } from "@/lib/blog-posts-en";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return blogPostsEn.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getEnPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://like-swim.com/en/blog/${post.slug}`,
      languages: {
        en: `/en/blog/${post.slug}`,
        "x-default": `/en/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      locale: "en_US",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function EnBlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getEnPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Pavel Levitskii",
      url: "https://like-swim.com/#person",
    },
    publisher: {
      "@type": "Organization",
      name: "LikeSwim",
      url: "https://like-swim.com",
    },
    mainEntityOfPage: `https://like-swim.com/en/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[#1a3350]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-2xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
            <span className="text-slate-700">·</span>
            <span className="text-slate-500 text-sm">{formatDate(post.date)}</span>
            <span className="text-slate-700">·</span>
            <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed">{post.excerpt}</p>
        </header>

        {/* Divider */}
        <div className="border-t border-white/5 mb-10" />

        {/* Article body */}
        <article className="prose-blog">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 leading-snug"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "p") {
              return (
                <p key={i} className="text-slate-400 leading-relaxed mb-5 text-[1.0625rem]">
                  {block.text}
                </p>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="space-y-2 mb-5 pl-0">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-slate-400 text-[1.0625rem] leading-relaxed"
                    >
                      <span className="text-cyan-400 shrink-0 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </article>

        {/* CTA block */}
        <div className="mt-14 p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
          <p className="text-white font-bold text-xl mb-2">
            Ready to get started?
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Book a trial lesson with Pavel Levitskii. First lesson is 50% off.
            I travel to private and condominium pools across South Florida —
            Miami, Hallandale Beach, Hollywood, Aventura, Sunny Isles Beach, Fort Lauderdale, and beyond.
            Lessons in English, Russian, and Hebrew.
          </p>
          <a
            href={WHATSAPP_URL_EN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.03] transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
