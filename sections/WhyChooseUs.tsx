"use client";

import { motion } from "framer-motion";
import { HiShieldCheck, HiClock, HiUserGroup, HiStar, HiGlobe, HiSupport } from "react-icons/hi";
import Link from "next/link";

const features = [
  {
    icon: HiShieldCheck,
    title: "98% Success Rate",
    description: "Industry-leading visa approval rate with expert guidance and proven track record",
    stat: "98%"
  },
  {
    icon: HiClock,
    title: "Fast Processing",
    description: "Quick turnaround times with efficient document handling and priority service",
    stat: "7-14 Days"
  },
  {
    icon: HiUserGroup,
    title: "Expert Team",
    description: "20+ certified consultants with 10+ years of international visa expertise",
    stat: "20+ Experts"
  },
  {
    icon: HiStar,
    title: "Trusted by Thousands",
    description: "Over 2,000 satisfied clients have achieved their travel dreams with us",
    stat: "2,000+"
  },
  {
    icon: HiGlobe,
    title: "Global Coverage",
    description: "Comprehensive visa services for 15+ countries across all continents",
    stat: "15+ Countries"
  },
  {
    icon: HiSupport,
    title: "24/7 Support",
    description: "Round-the-clock customer service and application tracking system",
    stat: "Always Available"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002D62' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-kj-gold" />
            <span className="text-kj-gold font-semibold uppercase tracking-[0.2em] text-sm">Our Advantages</span>
            <div className="h-px w-12 bg-kj-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-kj-blue mb-6 tracking-tight"
          >
            Why Choose <span className="text-kj-gold">KJ Global?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We combine expertise, efficiency, and excellence to deliver exceptional visa and travel services. Here's what sets us apart from the competition.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border-2 border-slate-100 rounded-xl p-8 hover:border-kj-gold hover:shadow-xl transition-all duration-300"
            >
              {/* Top Section */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-lg bg-kj-blue/5 flex items-center justify-center text-kj-blue text-3xl group-hover:bg-kj-blue group-hover:text-white transition-all duration-300">
                  <feature.icon />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-kj-gold">{feature.stat}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-kj-blue mb-3 group-hover:text-kj-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-kj-blue via-kj-gold to-kj-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-kj-blue to-kj-blue-light rounded-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-kj-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have trusted us with their visa applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-lg hover:bg-kj-gold-light transition-colors shadow-lg"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/30"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
