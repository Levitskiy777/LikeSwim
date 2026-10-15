"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GAEventTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as Element).closest("a");
      if (!target || typeof window.gtag !== "function") return;

      const href = target.getAttribute("href") ?? "";

      if (href.startsWith("https://wa.me") || href.includes("whatsapp")) {
        window.gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: target.textContent?.trim().slice(0, 50) ?? "",
        });
      } else if (href.startsWith("tel:")) {
        window.gtag("event", "call_click", {
          event_category: "engagement",
          event_label: href.replace("tel:", ""),
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
