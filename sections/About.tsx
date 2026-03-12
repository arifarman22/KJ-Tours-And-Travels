"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/chairman.png"
                alt="Md. Al-Amin Hossain - Chairman"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-kj-gold/20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-kj-blue/10 rounded-full blur-3xl z-0" />
            
            <div className="absolute bottom-10 -right-8 glass-dark p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-white/20">
              <p className="text-kj-gold font-bold text-xl mb-1">Md. Al-Amin Hossain</p>
              <p className="text-white/70 text-sm uppercase tracking-widest font-medium">Chairman, KJ Global Travel Agency Ltd.</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-kj-gold font-bold uppercase tracking-[0.4em] text-sm mb-4">Leadership & Vision</p>
            <h2 className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-8 uppercase tracking-tight">
              A Legacy of <span className="text-kj-gold">Trust & Excellence</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                At KJ Global Travel Agency, our mission is to simplify the complexities of international travel and visa processing. For over a decade, we have been the bridge between dreams and reality for thousands of travelers, students, and professionals.
              </p>
              <p className="font-medium text-kj-blue italic border-l-4 border-kj-gold pl-6 py-2">
                "Our commitment is to provide unmatched transparency, speed, and personalized service to every client who trusts us with their global aspirations."
              </p>
              <p>
                Under the visionary leadership of Md. Al-Amin Hossain, we have expanded our footprint from local offices in Bogura to international bases in Cambodia, serving over 15 countries with a consistent 98% client satisfaction rate.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-3xl font-bold text-kj-blue mb-1">10+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Years of Trust</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-kj-blue mb-1">15+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Countries Covered</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
