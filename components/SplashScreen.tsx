'use client';

import { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-kj-blue via-kj-blue-light to-kj-blue animate-fadeOut">
      <div className="text-center animate-scaleIn">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-kj-gold/20 blur-3xl rounded-full animate-pulse" />
          <Plane className="w-24 h-24 text-kj-gold mx-auto animate-flyIn" strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl font-bold text-white mb-2 font-montserrat">
          KJ Global
        </h1>
        <p className="text-kj-gold text-lg tracking-widest">TRAVEL AGENCY</p>
        <div className="mt-8 flex gap-2 justify-center">
          <div className="w-2 h-2 bg-kj-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-kj-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-kj-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
