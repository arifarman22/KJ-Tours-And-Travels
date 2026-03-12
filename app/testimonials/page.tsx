"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/sections/Testimonials";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import Image from "next/image";

const stats = [
  { value: "2,000+", label: "Happy Clients" },
  { value: "98%", label: "Success Rate" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "15+", label: "Countries Served" }
];

const achievements = [
  {
    title: "Industry Recognition",
    desc: "Awarded Best Travel Agency in Bogura 2023"
  },
  {
    title: "Client Satisfaction",
    desc: "Maintained 98% client satisfaction rate for 5 consecutive years"
  },
  {
    title: "Fast Processing",
    desc: "Average visa processing time 30% faster than industry standard"
  },
  {
    title: "Expert Team",
    desc: "Team of 20+ certified visa consultants with 10+ years experience"
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
          alt="Testimonials Hero"
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
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className="text-kj-gold text-3xl" />
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-montserrat text-white mb-6 uppercase tracking-tight">
              Client <span className="text-kj-gold">Success Stories</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Read what our clients say about their experience with KJ Global Travel Agency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-black text-kj-blue mb-2">{stat.value}</h3>
                <p className="text-slate-600 uppercase tracking-wider text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Achievements */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
            >
              Our <span className="text-kj-gold">Achievements</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-kj-gold mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-kj-gold/20 flex items-center justify-center flex-shrink-0">
                    <HiStar className="text-kj-gold text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-kj-blue mb-2">{achievement.title}</h3>
                    <p className="text-slate-600">{achievement.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-kj-blue to-kj-blue-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat text-white mb-6 uppercase tracking-tight">
              Join Our <span className="text-kj-gold">Success Stories</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let us help you achieve your travel dreams. Start your journey today.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
