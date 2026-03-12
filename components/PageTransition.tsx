'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Plane } from 'lucide-react';

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-kj-blue/95 backdrop-blur-sm animate-fadeIn">
      <div className="text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-kj-gold/30 blur-2xl rounded-full animate-pulse" />
          <Plane className="w-16 h-16 text-kj-gold mx-auto animate-spin-slow" strokeWidth={2} />
        </div>
        <div className="mt-6 flex gap-2 justify-center">
          <div className="w-2 h-2 bg-kj-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-kj-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-kj-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
