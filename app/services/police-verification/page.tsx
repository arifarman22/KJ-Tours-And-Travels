"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PoliceVerificationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="Police Verification" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-kj-blue/90 via-kj-blue-light/85 to-kj-blue/90" />
        <div className="max-w-7xl mx-auto relative z-10 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center w-full">
            <h1 className="text-5xl md:text-7xl font-black font-montserrat text-white mb-6 uppercase tracking-tight">Police <span className="text-kj-gold">Verification</span></h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">Professional assistance for official police verification</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black font-montserrat text-kj-blue mb-6">Police <span className="text-kj-gold">Verification Service</span></h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">Complete assistance with police verification requirements for passport, visa, and other official purposes.</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors">Get Started</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
