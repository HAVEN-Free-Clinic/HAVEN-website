import { Fragment, type ReactNode } from "react";

/*
 * Product and brand names that must survive machine translation intact.
 *
 * The site is translated by the Google Translate widget, which happily renders
 * "MyChart" as "Mi Gráfico" in Spanish. A patient told to look for "Mi Gráfico"
 * will not find it — the portal is called MyChart in every language.
 *
 * Add a name to PROTECTED_NAMES and every string passed through <BrandText> is
 * protected, including copy written later.
 */

/*
 * Vaccine brand names are here for the same reason as MyChart: they are proper
 * nouns a patient has to match against a label or a pharmacist's question, and
 * a translated one is worse than useless. Longest-first so "Hepatitis A & B"
 * style overlaps cannot be split by a shorter alternative matching first.
 */
const PROTECTED_NAMES = [
  "MyChart",
  "Heplisav-B",
  "Shingrix",
  "Gardasil",
  "Boostrix",
  "Twinrix",
  "Tdap",
];

const PATTERN = new RegExp(`(${PROTECTED_NAMES.join("|")})`, "g");

/**
 * A protected name standing on its own — a heading, a nav label, a card title.
 *
 * Only use this where the name is the entire text of its element. When it sits
 * inside a sentence, run the whole sentence through <BrandText> instead, so the
 * spacing fix below applies.
 */
export function MyChart() {
  return (
    <span className="notranslate" translate="no">
      MyChart
    </span>
  );
}

/**
 * Renders a plain string, wrapping any protected brand name so translation
 * leaves it alone.
 *
 * The subtlety: Google Translate rewrites the text nodes around a protected
 * element and drops the whitespace where they meet, so "Sign Up for MyChart"
 * comes back as "Matricularse enMyChart". We defend against that by carrying a
 * copy of the adjacent space *inside* the protected node, which translation
 * cannot touch. The original space is still in the sibling text node, but two
 * adjacent spaces collapse to one in HTML, so correct output stays correct and
 * eaten spaces get restored. A name followed by punctuation gets no trailing
 * space, so "through MyChart." does not become "through MyChart .".
 */
export function BrandText({ children }: { children: string }) {
  if (!children) return null;

  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of children.matchAll(PATTERN)) {
    const start = match.index;
    const end = start + match[0].length;

    if (start > cursor) {
      nodes.push(
        <Fragment key={key++}>{children.slice(cursor, start)}</Fragment>
      );
    }

    const charBefore = children[start - 1];
    const charAfter = children[end];
    const lead = charBefore && /\s/.test(charBefore) ? " " : "";
    const trail = charAfter && /\s/.test(charAfter) ? " " : "";

    nodes.push(
      <span key={key++} className="notranslate" translate="no">
        {lead + match[0] + trail}
      </span>
    );

    cursor = end;
  }

  if (cursor === 0) return <>{children}</>;
  if (cursor < children.length) {
    nodes.push(<Fragment key={key++}>{children.slice(cursor)}</Fragment>);
  }

  return <>{nodes}</>;
}
