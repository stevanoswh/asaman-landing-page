"use client";

import {
  ComponentPropsWithoutRef,
  createElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import type { JSX as ReactJSX } from "react";

type ElementTag = keyof ReactJSX.IntrinsicElements;

export type ScrollRevealProps<T extends ElementTag = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  initiallyVisible?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "ref">;

export default function ScrollReveal<T extends ElementTag = "div">({
  as,
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -10% 0px",
  initiallyVisible = false,
  ...rest
}: ScrollRevealProps<T>) {
  const Component = (as ?? "div") as ElementTag;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(initiallyVisible);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      setReady(true);
      return;
    }

    if (initiallyVisible) {
      setReady(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      setReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    setReady(true);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, initiallyVisible]);

  const composedClass = className ? `scroll-reveal ${className}` : "scroll-reveal";

  return createElement(
    Component,
    {
      ref: (node: HTMLElement | null) => {
        ref.current = node;
      },
      className: composedClass,
      "data-visible": visible,
      "data-reveal-ready": ready,
      ...rest,
    },
    children
  );
}
