"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PremiumButton from "@/components/ui/PremiumButton";

const visaTypes = [
  {
    title: "Tourist Visa",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    description: "Explore the world's most beautiful destinations."
  },
  {
    title: "Student Visa",
    image: "https://images.unsplash.com/photo-1523050335392-9bc567584bb0?q=80&w=2070&auto=format&fit=crop",
    description: "Pursue your academic dreams in top universities."
  },
  {
    title: "Job Visa",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
    description: "Build your career in leading global markets."
  },
  {
    title: "Business Visa",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Expand your business horizons internationally."
  },
  {
    title: "Medical Visa",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    description: "Access world-class healthcare services globally."
  },
  {
    title: "Hajj & Umrah",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1944&auto=format&fit=crop",
    description: "A spiritual journey of a lifetime."
  },
  {
    title: "Second Home",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    description: "Invest and reside in your dream country."
  }
];

export default function VisaTypes() {
  return (
    <section id="visas" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
          >
            Explore <span className="text-kj-gold">Visa Categories</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-kj-gold mx-auto mb-6"
          />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the right visa path for your goals. Our experts will guide you through every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={visa.image}
                alt={visa.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kj-blue via-kj-blue/20 to-transparent transition-opacity duration-300 group-hover:from-kj-blue/90" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-black font-montserrat text-white mb-2 uppercase group-hover:text-kj-gold transition-colors">
                  {visa.title}
                </h3>
                <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {visa.description}
                </p>
                <PremiumButton variant="primary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Book Consultation
                </PremiumButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
