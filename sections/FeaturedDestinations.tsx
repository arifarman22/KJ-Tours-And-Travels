"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const destinations = [
  {
    name: "United States",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d9e62e1e9?q=80&w=2070&auto=format&fit=crop",
    visaType: "Tourist/Business",
    processing: "15-30 days"
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    visaType: "Tourist/Student",
    processing: "15-21 days"
  },
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070&auto=format&fit=crop",
    visaType: "Tourist/Work",
    processing: "14-30 days"
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    visaType: "Tourist/Student",
    processing: "15-30 days"
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
            >
              Popular <span className="text-kj-gold">Destinations</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-kj-gold mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-600 max-w-xl"
            >
              Explore visa services for the world's most sought-after destinations
            </motion.p>
          </div>
          <Link href="/destinations">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-kj-blue font-bold hover:text-kj-gold transition-colors mt-4 md:mt-0"
            >
              View All Destinations
              <HiArrowRight className="text-xl" />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Link href="/destinations">
                <div className="relative h-80">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kj-blue via-kj-blue/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-kj-gold transition-colors">
                      {dest.name}
                    </h3>
                    <div className="flex justify-between items-center text-white/80 text-sm">
                      <span>{dest.visaType}</span>
                      <span>{dest.processing}</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-kj-gold text-kj-blue px-3 py-1 rounded-full text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Apply Now
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
