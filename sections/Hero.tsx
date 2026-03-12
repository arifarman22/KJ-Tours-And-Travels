"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PremiumButton from "@/components/ui/PremiumButton";
import { FaPlane, FaPassport, FaGlobeAmericas } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.png"
          alt="Luxury Travel Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kj-blue/80 via-kj-blue/40 to-kj-blue/90" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [-20, 20],
          x: [-10, 10],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] text-kj-gold/30 text-8xl hidden lg:block"
      >
        <FaPlane />
      </motion.div>
      <motion.div
        animate={{ 
          y: [20, -20],
          x: [10, -10],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] text-kj-white/20 text-7xl hidden lg:block"
      >
        <FaPassport />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center space-x-2 bg-kj-gold/10 border border-kj-gold/30 rounded-full px-4 py-2"
        >
          <FaGlobeAmericas className="text-kj-gold animate-spin-slow" />
          <span className="text-kj-gold text-xs uppercase tracking-[0.4em] font-bold">Trusted Global Travel Partner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black font-montserrat text-white mb-6 uppercase tracking-tighter leading-none"
        >
          KJ GLOBAL <br />
          <span className="text-kj-gold">TRAVEL AGENCY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-kj-white/80 text-lg md:text-2xl font-light mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Your Gateway to the World. Trusted Visa Processing & Premium Global Travel Services Tailored for Every Journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link href="/visa-types">
            <PremiumButton variant="primary" size="lg">Apply for Visa</PremiumButton>
          </Link>
          <Link href="/services">
            <PremiumButton variant="outline" size="lg">Explore Services</PremiumButton>
          </Link>
          <Link href="/contact">
            <PremiumButton variant="ghost" size="lg">Contact Us</PremiumButton>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-kj-gold" />
        <span className="text-[10px] text-kj-gold uppercase tracking-[0.3em]">Scroll</span>
      </motion.div>
    </section>
  );
}
