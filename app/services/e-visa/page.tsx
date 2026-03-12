"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiCheckCircle, HiClock, HiCurrencyDollar } from "react-icons/hi";

export default function EVisaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop"
          alt="E-Visa Service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-kj-blue/90 via-kj-blue-light/85 to-kj-blue/90" />
        
        <div className="max-w-7xl mx-auto relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center w-full"
          >
            <h1 className="text-5xl md:text-7xl font-black font-montserrat text-white mb-6 uppercase tracking-tight">
              E-Visa <span className="text-kj-gold">Application</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Fast-track electronic visa processing for destinations worldwide
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black font-montserrat text-kj-blue mb-6">
            Quick & Easy <span className="text-kj-gold">E-Visa Processing</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Get your electronic visa approved quickly with our streamlined online application process. We support e-visa applications for multiple countries including Turkey, India, UAE, and more.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors">
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
