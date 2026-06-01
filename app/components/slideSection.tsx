"use client";

import React, { useRef, useEffect } from "react";
import { FontColors, FontColorsType, BackgroundColorsType } from "@/constants";

type SlideSectionProps = {
  children?: React.ReactNode,
  color: FontColorsType,
  backgroundColor: BackgroundColorsType
};

export default function SlideSection({ children, color, backgroundColor }: SlideSectionProps) {

  const containerRef = useRef<HTMLDivElement>(null);

  // cretion of custom event to send the color when component mounted
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const event = new CustomEvent("changeHeaderColor", { detail: color });
          window.dispatchEvent(event);
        }
      }, { threshold: 0.5 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // finally when the component deletes
    return () => observer.disconnect();

  }, [color]);


  return (
    <div ref={containerRef} className={`snap snap-center h-screen w-full h-screen w-full ${backgroundColor}`}>
      {children}
    </div>
  )
};
