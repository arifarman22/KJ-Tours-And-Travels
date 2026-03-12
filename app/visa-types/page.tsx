"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VisaTypes from "@/sections/VisaTypes";
import { motion } from "framer-motion";
import { HiClock, HiDocumentText, HiCurrencyDollar, HiCheckCircle } from "react-icons/hi";
import Image from "next/image";

const visaRequirements = [
  {
    type: "Tourist Visa",
    processing: "7-14 days",
    validity: "30-90 days",
    documents: ["Valid passport", "Passport photos", "Travel itinerary", "Hotel bookings", "Bank statements"]
  },
  {
    type: "Student Visa",
    processing: "14-30 days",
    validity: "1-5 years",
    documents: ["Admission letter", "Financial proof", "Academic transcripts", "Language proficiency", "Medical certificate"]
  },
  {
    type: "Job Visa",
    processing: "21-45 days",
    validity: "1-3 years",
    documents: ["Job offer letter", "Work permit", "Professional certificates", "Police clearance", "Medical reports"]
  }
];

const features = [
  { icon: HiClock, title: "Fast Processing", desc: "Quick turnaround times" },
  { icon: HiDocumentText, title: "Document Support", desc: "Complete guidance" },
  { icon: HiCurrencyDollar, title: "Transparent Pricing", desc: "No hidden charges" },
  { icon: HiCheckCircle, title: "High Success Rate", desc: "98% approval rate" }
];

export default function VisaTypesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Visa Types Hero"
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
              Visa <span className="text-kj-gold">Categories</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Find the perfect visa type for your journey. Expert guidance for every destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-kj-blue flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-kj-gold text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-kj-blue">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types Grid */}
      <VisaTypes />

      {/* Requirements Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
            >
              Visa <span className="text-kj-gold">Requirements</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-kj-gold mx-auto mb-6"
            />
            <p className="text-slate-600 max-w-2xl mx-auto">
              General requirements for popular visa categories. Specific requirements may vary by country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visaRequirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-kj-blue mb-6">{req.type}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">Processing Time</span>
                    <span className="text-kj-blue font-bold">{req.processing}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-600 font-medium">Validity</span>
                    <span className="text-kj-blue font-bold">{req.validity}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-kj-blue mb-3">Required Documents:</h4>
                  <ul className="space-y-2">
                    {req.documents.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <HiCheckCircle className="text-kj-gold flex-shrink-0 mt-0.5" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Book a free consultation with our visa experts today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors">
                Apply Now
              </a>
              <a href="tel:+8801234567890" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
