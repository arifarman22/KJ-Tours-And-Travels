"use client";

import { motion } from "framer-motion";
import { HiClipboardCheck, HiDocumentText, HiCheckCircle, HiTicket } from "react-icons/hi";
import Link from "next/link";

const steps = [
  {
    icon: HiClipboardCheck,
    step: "01",
    title: "Free Consultation",
    description: "Discuss your travel plans and visa requirements with our experts"
  },
  {
    icon: HiDocumentText,
    step: "02",
    title: "Document Preparation",
    description: "We guide you through collecting and preparing all required documents"
  },
  {
    icon: HiCheckCircle,
    step: "03",
    title: "Application Submission",
    description: "Expert submission and follow-up with embassies and consulates"
  },
  {
    icon: HiTicket,
    step: "04",
    title: "Visa Approval",
    description: "Receive your approved visa and start your journey"
  }
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-br from-kj-blue via-kj-blue-light to-kj-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-kj-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-montserrat text-white mb-4 uppercase tracking-tight"
          >
            How It <span className="text-kj-gold">Works</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-kj-gold mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Simple and transparent process to get your visa approved
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative h-full"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-kj-gold/30" />
              )}

              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group h-full flex flex-col">
                <div className="w-20 h-20 rounded-full bg-kj-gold text-kj-blue flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <step.icon />
                </div>
                <div className="absolute top-4 right-4 text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center flex-shrink-0">
                  {step.title}
                </h3>
                <p className="text-white/70 text-center text-sm leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors text-lg uppercase tracking-wider"
            >
              Start Your Application
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
