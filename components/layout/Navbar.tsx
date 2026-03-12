"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import PremiumButton from "../ui/PremiumButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Visa Types", href: "/visa-types" },
  { name: "Destinations", href: "/destinations" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12",
        isScrolled ? "glass-dark py-3 shadow-2xl" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold font-montserrat tracking-tighter text-kj-gold leading-none">
            KJ GLOBAL
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-kj-white/80 font-medium">
            Travel Agency
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-kj-white hover:text-kj-gold transition-colors font-medium text-sm uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <PremiumButton variant="primary" size="sm">
              Apply Now
            </PremiumButton>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-kj-gold text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-dark border-t border-white/10 flex flex-col p-6 space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-kj-white text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <PremiumButton variant="primary" className="w-full">
                Apply for Visa
              </PremiumButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
