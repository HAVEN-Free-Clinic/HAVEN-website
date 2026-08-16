"use client";

import { useEffect, useState } from "react";
import { getCurrentLangFromCookie } from "@/lib/translate";
import { lookupPhrase } from "@/lib/phrases";
import { BrandText } from "@/app/components/BrandText";

/**
 * Renders a short label, substituting our own wording in languages where the
 * translation widget gets it badly wrong (see lib/phrases.ts).
 *
 * Starts as the English original so the markup matches what the server
 * rendered, then swaps after mount once we can read the active language —
 * reading the cookie during the first render would break hydration.
 */
export function Phrase({ children }: { children: string }) {
  const [override, setOverride] = useState<string | null>(null);

  useEffect(() => {
    setOverride(lookupPhrase(children, getCurrentLangFromCookie()));
  }, [children]);

  if (override) {
    return (
      <span className="notranslate" translate="no">
        {override}
      </span>
    );
  }

  return <BrandText>{children}</BrandText>;
}
