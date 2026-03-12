"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/sections/About";
import Locations from "@/sections/Locations";
import { motion } from "framer-motion";
import { HiTrendingUp, HiUserGroup, HiGlobe, HiShieldCheck } from "react-icons/hi";
import Image from "next/image";

const values = [
  {
    icon: HiShieldCheck,
    title: "Trust & Integrity",
    desc: "We build lasting relationships through honest and transparent service"
  },
  {
    icon: HiTrendingUp,
    title: "Excellence",
    desc: "Committed to delivering the highest quality in every service we provide"
  },
  {
    icon: HiUserGroup,
    title: "Client-Centric",
    desc: "Your success is our success. We prioritize your needs above all"
  },
  {
    icon: HiGlobe,
    title: "Global Reach",
    desc: "Connecting you to opportunities across 15+ countries worldwide"
  }
];

const milestones = [
  { year: "2013", event: "KJ Global Travel Agency founded in Bogura" },
  { year: "2016", event: "Expanded services to include international visa processing" },
  { year: "2019", event: "Opened international office in Cambodia" },
  { year: "2021", event: "Achieved 2,000+ successful visa applications" },
  { year: "2024", event: "Serving 15+ countries with 98% success rate" }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop"
          alt="About Us Hero"
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
              About <span className="text-kj-gold">KJ Global</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A decade of excellence in travel and visa services. Your trusted partner for global opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
            >
              Our Core <span className="text-kj-gold">Values</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-kj-gold mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-kj-blue flex items-center justify-center">
                  <value.icon className="text-kj-gold text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-kj-blue mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
            >
              Our <span className="text-kj-gold">Journey</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-kj-gold mx-auto"
            />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-kj-gold/30" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="glass-dark p-6 rounded-xl inline-block">
                    <h3 className="text-2xl font-bold text-kj-gold mb-2">{milestone.year}</h3>
                    <p className="text-white/80">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-kj-gold border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <Locations />

      <Footer />
    </main>
  );
}
