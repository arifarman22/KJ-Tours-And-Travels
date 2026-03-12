"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiPhone, HiMail } from "react-icons/hi";

export default function CTASection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop"
        alt="CTA Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-kj-blue/95 via-kj-blue-light/90 to-kj-blue/95" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat text-white mb-6 uppercase tracking-tight">
              Ready to Start Your <span className="text-kj-gold">Journey?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Let our expert team guide you through the visa application process. Get started today with a free consultation and make your travel dreams a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors text-lg uppercase tracking-wider w-full sm:w-auto"
                >
                  Apply Now
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors text-lg uppercase tracking-wider backdrop-blur-sm border border-white/30 w-full sm:w-auto"
                >
                  View Services
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-kj-gold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <a href="mailto:info@kjglobal.com" className="flex items-center gap-4 text-white hover:text-kj-gold transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-kj-gold/20 flex items-center justify-center group-hover:bg-kj-gold group-hover:text-kj-blue transition-all">
                    <HiMail className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email Us</p>
                    <p className="font-semibold">info@kjglobal.com</p>
                  </div>
                </a>
                <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-kj-gold transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-kj-gold/20 flex items-center justify-center group-hover:bg-kj-gold group-hover:text-kj-blue transition-all">
                    <HiPhone className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">WhatsApp</p>
                    <p className="font-semibold">Chat with us</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-kj-gold/20 backdrop-blur-sm p-6 rounded-2xl border border-kj-gold/30">
              <p className="text-white text-center">
                <span className="font-bold text-kj-gold">24/7 Support Available</span>
                <br />
                <span className="text-sm text-white/80">We're here to help you anytime</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
