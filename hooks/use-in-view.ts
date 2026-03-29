'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * A hook that detects when an element enters the browser viewport.
 * Useful for triggering animations when the user scrolls to a section.
 */
export function useInView({ threshold = 0.1, triggerOnce = false }: UseInViewOptions = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the browser supports IntersectionObserver
    if (!window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // If triggerOnce is true, stop observing after the first appearance
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          // If not triggering once, reset the state when the element leaves view
          if (!triggerOnce) {
            setInView(false);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return { ref, inView };
}