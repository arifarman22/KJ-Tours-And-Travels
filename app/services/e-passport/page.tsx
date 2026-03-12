"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiCheckCircle, HiClock, HiCurrencyDollar } from "react-icons/hi";

const features = [
  "Online application assistance",
  "Document verification support",
  "Biometric enrollment guidance",
  "Application tracking",
  "Fast processing options",
  "Delivery to your doorstep"
];

const requirements = [
  "Valid National ID Card",
  "Birth Certificate",
  "Recent passport-size photos",
  "Previous passport (if renewal)",
  "Payment receipt"
];

const process = [
  { step: "01", title: "Consultation", desc: "Free consultation to understand your requirements" },
  { step: "02", title: "Documentation", desc: "Collect and verify all required documents" },
  { step: "03", title: "Application", desc: "Submit online application with our assistance" },
  { step: "04", title: "Biometric", desc: "Schedule and complete biometric enrollment" },
  { step: "05", title: "Delivery", desc: "Receive your e-passport at your address" }
];

export default function EPassportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop"
          alt="E-Passport Service"
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
              E-Passport <span className="text-kj-gold">Application</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Hassle-free e-passport application service with complete documentation support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <HiClock className="text-kj-gold text-4xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-kj-blue mb-2">7-14 Days</h3>
              <p className="text-slate-600">Processing Time</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <HiCurrencyDollar className="text-kj-gold text-4xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-kj-blue mb-2">Affordable</h3>
              <p className="text-slate-600">Competitive Pricing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <HiCheckCircle className="text-kj-gold text-4xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-kj-blue mb-2">100%</h3>
              <p className="text-slate-600">Success Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black font-montserrat text-kj-blue mb-6 uppercase tracking-tight">
                What We <span className="text-kj-gold">Offer</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our e-passport application service provides complete assistance from start to finish. We handle all the paperwork, guide you through the online application process, and ensure your documents are properly verified.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <HiCheckCircle className="text-kj-gold text-xl flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black font-montserrat text-kj-blue mb-6 uppercase tracking-tight">
                Required <span className="text-kj-gold">Documents</span>
              </h2>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="w-6 h-6 rounded-full bg-kj-blue text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {req}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
            >
              Our <span className="text-kj-gold">Process</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-kj-gold mx-auto"
            />
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg flex gap-6 items-start"
              >
                <div className="w-16 h-16 rounded-full bg-kj-blue text-kj-gold flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-kj-blue mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
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
              Ready to <span className="text-kj-gold">Apply?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get your e-passport with our expert assistance
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors"
            >
              Start Application
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
