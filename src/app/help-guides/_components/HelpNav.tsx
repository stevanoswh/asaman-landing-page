"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { DocNode } from "@/lib/guides";
import { ChevronDown, ChevronRight } from "lucide-react";

function usePersistentOpen(key: string, defaultOpen: boolean) {
  const storageKey = `help-nav-open:${key}`;
  const [open, setOpen] = useState<boolean>(defaultOpen);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw === null) {
        window.localStorage.setItem(storageKey, defaultOpen ? "1" : "0");
      } else {
        setOpen(raw === "1");
      }
    } catch {}
  }, [storageKey]);

  // Persist whenever it changes
  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, open ? "1" : "0");
    } catch {}
  }, [storageKey, open]);

  useEffect(() => {
    if (defaultOpen) setOpen(true);
  }, [defaultOpen]);

  return [open, setOpen] as const;
}


export default function HelpNav({
  tree,
  activeSlug,
  basePath = "/help-guides",
}: {
  tree: DocNode[];
  activeSlug: string;
  basePath?: string;
}) {
  return (
    <div className="space-y-3">
      <ul className="space-y-3" role="list">
        {tree.map((node) => (
          <Node
            key={node.slug}
            node={node}
            activeSlug={activeSlug}
            basePath={basePath}
            depth={0}
          />
        ))}
      </ul>
    </div>
  );
}


function Node({
  node,
  activeSlug,
  basePath,
  depth,
}: {
  node: DocNode;
  activeSlug: string;
  basePath: string;
  depth: number;
}) {
  if (node.type === "doc") {
    const href = `${basePath}/${node.slug}`;
    const active = node.slug === activeSlug;

    return (
      <li>
        <Link
          href={href}
          prefetch
          scroll={false}
          className={`block rounded-lg px-3 py-2 text-sm ${
            active
              ? "bg-sky-50 text-sky-700 ring-1 ring-sky-200"
              : "hover:bg-slate-50 text-slate-700"
          } ${depth > 0 ? "ml-3" : ""}`}
          aria-current={active ? "page" : undefined}
        >
          {node.title}
        </Link>
      </li>
    );
  }

  // FOLDER
  const containsActive = useMemo(
    () => containsSlug(node, activeSlug),
    [node, activeSlug]
  );

  const [open, setOpen] = usePersistentOpen(node.slug, containsActive);
  const controlsId = `folder-${node.slug}`;

  return (
    <li>
      <div className={`rounded-xl border border-slate-200 bg-white ${depth > 0 ? "ml-3" : ""}`}>
        <button
          type="button"
          data-help-folder={node.slug}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800"
          aria-expanded={open}                 
          aria-controls={controlsId}
        >
          <span className="flex items-center gap-2">
            {depth > 0 && <span className="h-3 w-0.5 rounded bg-slate-200" />}
            {node.title}
          </span>
          {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>

        <ul
          id={controlsId}
          role="list"
          className={`${open ? "block" : "hidden"} border-t border-slate-200 p-2 space-y-2`}
        >
          {node.children.map((child) => (
            <Node
              key={child.slug}
              node={child}
              activeSlug={activeSlug}
              basePath={basePath}
              depth={depth + 1}
            />
          ))}
        </ul>
      </div>
    </li>
  );
}


function containsSlug(node: DocNode, slug: string): boolean {
  if (node.type === "doc") return node.slug === slug;
  return node.children.some((c) => containsSlug(c, slug));
}
