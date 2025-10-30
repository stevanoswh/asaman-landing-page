// app/help-guides/[...slug]/page.tsx
import { buildTree, getDocBySlug } from "@/lib/guides";
import type { DocNode } from "@/lib/guides";
import HelpCenterHero from "../_sections/hero-section";
import ContactSection from "../_sections/contact-section";
import HelpHeader from "../_components/HelpHeader";
import HelpNav from "../_components/HelpNav";
import HelpArticle from "../_components/HelpArticle";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";

export const dynamic = "force-static";
export const revalidate = false;

/* ----------------------------- Type guards ------------------------------ */
type FolderNode = Extract<DocNode, { type: "folder" }>;
type DocumentNode = Extract<DocNode, { type: "doc" }>;

function isFolder(node: DocNode): node is FolderNode {
  return node.type === "folder";
}

function isDocument(node: DocNode): node is DocumentNode {
  return node.type === "doc";
}

/* --------------------------- Static params (SSG) ------------------------ */
type PageParams = { slug: string[] };

export async function generateStaticParams(): Promise<PageParams[]> {
  const tree = buildTree();
  const slugs: string[] = [];

  const walk = (nodes: DocNode[]) => {
    for (const node of nodes) {
      if (isDocument(node) && node.published) {
        slugs.push(node.slug);
      } else if (isFolder(node)) {
        walk(node.children);
      }
    }
  };

  walk(tree);
  return slugs.map((s) => ({ slug: s.split("/") }));
}

/* --------------------------- Utilities ---------------------------------- */
function flattenDocs(
  nodes: DocNode[],
  acc: Array<{ slug: string; title: string }> = []
): Array<{ slug: string; title: string }> {
  for (const node of nodes) {
    if (isDocument(node) && node.published) {
      acc.push({ slug: node.slug, title: node.title });
    } else if (isFolder(node)) {
      flattenDocs(node.children, acc);
    }
  }
  return acc;
}

// Find path (ancestors … -> doc)
function findPath(
  nodes: DocNode[],
  targetSlug: string,
  path: DocNode[] = []
): DocNode[] | null {
  for (const node of nodes) {
    if (isDocument(node) && node.slug === targetSlug) {
      return [...path, node];
    }
    if (isFolder(node)) {
      const res = findPath(node.children, targetSlug, [...path, node]);
      if (res) return res;
    }
  }
  return null;
}

/* ------------------------------ Page (Next 15: async params) ------------ */
export default async function HelpGuidesArticlePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug: slugArr } = await params; // <-- await Promise in Next 15
  const slug = slugArr.join("/");

  const tree = buildTree();
  const doc = getDocBySlug(slug);

  // prev/next
  const docs = flattenDocs(tree);
  const idx = docs.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? docs[idx - 1] : null;
  const next = idx >= 0 && idx < docs.length - 1 ? docs[idx + 1] : null;

  // Section header (nearest parent folder)
  const path = findPath(tree, slug) || [];
  const lastFolder = [...path].reverse().find((n) => n.type === "folder");
  const sectionTitle = lastFolder?.title ?? null;

  return (
    <ScrollReveal initiallyVisible>
      <HelpCenterHero />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <HelpHeader />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
          <aside className="md:pr-2">
            <HelpNav basePath="/help-guides" tree={tree} activeSlug={slug} />
          </aside>

          <div>
            {/* Section title from nav (e.g., “FAQs”) */}
            {sectionTitle && (
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-slate-900">{sectionTitle}</h2>
                <div className="mt-3 h-px bg-slate-300" />
              </div>
            )}

            {doc ? (
              <>
                <HelpArticle title={doc.title} markdown={doc.content} />

                {/* Prev / Next */}
                <nav className="mt-6 flex items-center justify-between">
                  {prev ? (
                    <Link
                      href={`/help-guides/${prev.slug}`}
                      scroll={false}
                      prefetch
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50"
                      aria-label={`Previous: ${prev.title}`}
                    >
                      <span aria-hidden>←</span>
                      <span className="line-clamp-1">{prev.title}</span>
                    </Link>
                  ) : (
                    <span />
                  )}
                  {next ? (
                    <Link
                      href={`/help-guides/${next.slug}`}
                      scroll={false}
                      prefetch
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50"
                      aria-label={`Next: ${next.title}`}
                    >
                      <span className="line-clamp-1">{next.title}</span>
                      <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <span />
                  )}
                </nav>
              </>
            ) : (
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                Document not found. Ensure the file exists under{" "}
                <code>/content/guides/{slug}.mdx</code>.
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactSection />
    </ScrollReveal>
  );
}
