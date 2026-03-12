"use client";

import { motion } from "framer-motion";
import PremiumButton from "@/components/ui/PremiumButton";
import { FaPaperPlane } from "react-icons/fa";

export default function ApplicationForm() {
  return (
    <section id="contact" className="section-padding bg-kj-blue relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-kj-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-montserrat text-white mb-4 uppercase tracking-tight"
          >
            Start Your <span className="text-kj-gold">Application</span>
          </motion.h2>
          <p className="text-white/60">
            Fill out the form below and our travel consultants will get back to you within 24 hours.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-white/70 text-xs uppercase tracking-widest font-bold ml-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-kj-gold/50 transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/70 text-xs uppercase tracking-widest font-bold ml-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+880 1234 567890"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-kj-gold/50 transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/70 text-xs uppercase tracking-widest font-bold ml-2">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-kj-gold/50 transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-white/70 text-xs uppercase tracking-widest font-bold ml-2">Visa Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-kj-gold/50 transition-colors appearance-none">
                <option className="bg-kj-blue">Select Visa Type</option>
                <option className="bg-kj-blue">Tourist Visa</option>
                <option className="bg-kj-blue">Student Visa</option>
                <option className="bg-kj-blue">Job Visa</option>
                <option className="bg-kj-blue">Business Visa</option>
              </select>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-white/70 text-xs uppercase tracking-widest font-bold ml-2">Destination Country</label>
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-kj-gold/50 transition-colors"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-white/70 text-xs uppercase tracking-widest font-bold ml-2">Message (Optional)</label>
              <textarea
                placeholder="Tell us more about your travel plans..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-kj-gold/50 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <PremiumButton variant="primary" className="w-full flex items-center justify-center space-x-3 py-5 text-lg">
                <FaPaperPlane className="text-sm" />
                <span>Submit Application</span>
              </PremiumButton>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
