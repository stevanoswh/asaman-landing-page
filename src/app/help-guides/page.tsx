// app/help-guides/page.tsx
import HelpCenterHero from "./_sections/hero-section";
import ContactSection from "./_sections/contact-section";

import { buildTree, findFirstDoc, getDocBySlug } from "@/lib/guides";
import HelpHeader from "./_components/HelpHeader";
import HelpNav from "./_components/HelpNav";
import HelpArticle from "./_components/HelpArticle";

export const dynamic = "force-static";
export const revalidate = false;

// helper to find the nearest parent folder title (for the section heading)
function findPath(nodes: any[], targetSlug: string, path: any[] = []): any[] | null {
  for (const n of nodes) {
    if (n.type === "doc" && n.slug === targetSlug) return [...path, n];
    if (n.type === "folder") {
      const res = findPath(n.children || [], targetSlug, [...path, n]);
      if (res) return res;
    }
  }
  return null;
}

export default function HelpGuidesLanding() {
  const tree = buildTree();
  const first = findFirstDoc(tree);

  // If no content yet, show only hero + friendly message + contact
  if (!first) {
    return (
      <main>
        <HelpCenterHero />
        <section className="mx-auto max-w-6xl px-4 py-10">
          <HelpHeader />
          <p className="mt-6 text-center text-sm text-slate-500">
            No guides found. Add files under <code>/content/guides</code>.
          </p>
        </section>
        <ContactSection />
      </main>
    );
  }

  const doc = getDocBySlug(first.slug);

  // Section title from nearest parent folder (e.g., “FAQs”)
  const path = findPath(tree, first.slug) || [];
  const lastFolder = [...path].reverse().find((n) => n.type === "folder");
  const sectionTitle = lastFolder?.title ?? null;

  return (
    <main>
      <HelpCenterHero />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <HelpHeader />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
          <aside className="md:pr-2">
            <HelpNav basePath="/help-guides" tree={tree} activeSlug={first.slug} />
          </aside>

          <div>
            {sectionTitle && (
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-slate-900">{sectionTitle}</h2>
                <div className="mt-3 h-px bg-slate-300" />
              </div>
            )}

            <HelpArticle
              title={doc?.title ?? "Not Found"}
              markdown={doc?.content ?? "_Document not found_"}
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
