"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultSiteContent, SiteContent } from "@/lib/siteContent";

const STORAGE_KEY = "kajiado_site_content";

type SiteContentContextType = {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  resetContent: () => void;
};

const SiteContentContext = createContext<SiteContentContextType | null>(null);

export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    const hydrate = async () => {
      try {
        const response = await fetch("/site-content.json", { cache: "no-store" });
        if (response.ok) {
          const data = (await response.json()) as SiteContent;
          setContentState(data);
        }
      } catch {
        // keep defaults if file is unavailable
      }

      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          setContentState(JSON.parse(saved) as SiteContent);
        }
      } catch {
        // ignore corrupt local content
      }
    };

    void hydrate();
  }, []);

  const setContent = (next: SiteContent) => {
    setContentState(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const resetContent = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContentState(defaultSiteContent);
  };

  const value = useMemo(
    () => ({ content, setContent, resetContent }),
    [content]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);
  if (!context) {
    throw new Error("useSiteContent must be used within SiteContentProvider");
  }
  return context;
}
