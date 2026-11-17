import type { Metadata } from "next";
import Link from "next/link";
import { blogPostsEn } from "@/lib/blog-posts-en";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Swimming Blog | LikeSwim — Coach Pavel Levitskii, Miami",
  description:
    "Practical swimming articles from Miami swim coach Pavel Levitskii: teaching kids to swim, overcoming fear of water, special-needs swim lessons and triathlon prep.",
  alternates: {
    canonical: "https://like-swim.com/en/blog",
  },
  openGraph: {
    title: "Swimming Blog | LikeSwim",
    description: "Practical swimming articles from Miami swim coach Pavel Levitskii.",
    type: "website",
    locale: "en_US",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Kids": "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  "Adults": "text-blue-400 border-blue-500/30 bg-blue-500/10",
  "Tips": "text-violet-400 border-violet-500/30 bg-violet-500/10",
  "Triathlon": "text-amber-400 border-amber-500/30 bg-amber-500/10",
  "Technique": "text-sky-400 border-sky-500/30 bg-sky-500/10",
  "Adaptive Swimming": "text-rose-400 border-rose-500/30 bg-rose-500/10",
  "Special Needs": "text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EnBlogIndexPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 bg-[#1a3350]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6">
            LikeSwim Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Swimming{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              articles
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Practical advice from coach Pavel Levitskii — for kids, adults and triathletes
          </p>
        </div>

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {blogPostsEn.map((post) => {
            const categoryClass =
              CATEGORY_COLORS[post.category] ??
              "text-slate-400 border-slate-500/30 bg-slate-500/10";
            return (
              <Link
                key={post.slug}
                href={`/en/blog/${post.slug}`}
                className="group flex flex-col p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/20 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-250"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-xs font-medium ${categoryClass}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-slate-600 text-xs shrink-0">{post.readingTime}</span>
                </div>

                <h2 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-cyan-300 transition-colors duration-200 flex-1">
                  {post.title}
                </h2>

                <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-slate-600 text-xs">{formatDate(post.date)}</span>
                  <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Read →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-10 rounded-3xl border border-white/5 bg-white/[0.02]">
          <p className="text-slate-400 text-lg mb-2">Ready to start?</p>
          <p className="text-white font-bold text-2xl mb-6">
            First lesson 50% off
          </p>
          <a
            href="https://wa.me/17542928576"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.03] transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
