"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-6 right-6 z-50 size-12 rounded-full bg-samara-orange text-white shadow-lg hover:bg-samara-orange/90"
      aria-label="Scroll to top"
    >
      <ChevronUp className="size-6" />
    </Button>
  );
}
