"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(false);
    const timer = setTimeout(() => {
      setMounted(true);
    }, 20);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        mounted
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 translate-y-2 blur-[1px]"
      }`}
    >
      {children}
    </div>
  );
}
