"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DestinationShowcase from "@/sections/DestinationShowcase";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiLocationMarker, HiClock, HiCurrencyDollar, HiStar } from "react-icons/hi";

const popularDestinations = [
  {
    country: "United States",
    cities: ["New York", "Los Angeles", "Miami"],
    visaType: "Tourist/Business",
    processing: "15-30 days",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d9e62e1e9?q=80&w=2070&auto=format&fit=crop",
    popular: true
  },
  {
    country: "United Kingdom",
    cities: ["London", "Manchester", "Edinburgh"],
    visaType: "Tourist/Student",
    processing: "15-21 days",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    popular: true
  },
  {
    country: "Canada",
    cities: ["Toronto", "Vancouver", "Montreal"],
    visaType: "Tourist/Work",
    processing: "14-30 days",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070&auto=format&fit=crop",
    popular: true
  },
  {
    country: "Australia",
    cities: ["Sydney", "Melbourne", "Brisbane"],
    visaType: "Tourist/Student",
    processing: "15-30 days",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    popular: true
  },
  {
    country: "Germany",
    cities: ["Berlin", "Munich", "Frankfurt"],
    visaType: "Schengen",
    processing: "10-15 days",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
    popular: false
  },
  {
    country: "France",
    cities: ["Paris", "Lyon", "Nice"],
    visaType: "Schengen",
    processing: "10-15 days",
    image: "https://images.unsplash.com/photo-1502602898657-3e917247a184?q=80&w=2070&auto=format&fit=crop",
    popular: false
  },
  {
    country: "Dubai, UAE",
    cities: ["Dubai", "Abu Dhabi"],
    visaType: "Tourist/Business",
    processing: "3-5 days",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    popular: true
  },
  {
    country: "Singapore",
    cities: ["Singapore City"],
    visaType: "Tourist/Business",
    processing: "3-5 days",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop",
    popular: false
  },
  {
    country: "Malaysia",
    cities: ["Kuala Lumpur", "Penang"],
    visaType: "Tourist/Business",
    processing: "5-7 days",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2064&auto=format&fit=crop",
    popular: false
  }
];

const stats = [
  { icon: HiLocationMarker, value: "15+", label: "Countries" },
  { icon: HiStar, value: "98%", label: "Success Rate" },
  { icon: HiClock, value: "Fast", label: "Processing" },
  { icon: HiCurrencyDollar, value: "Best", label: "Pricing" }
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop"
          alt="Destinations Hero"
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
              Popular <span className="text-kj-gold">Destinations</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover the world's most sought-after destinations. We process visas for 15+ countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm"
              >
                <stat.icon className="text-kj-gold text-4xl mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-kj-blue mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-600 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <DestinationShowcase />

      {/* Destinations Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
            >
              We Process Visas For
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-kj-gold mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={dest.image}
                    alt={dest.country}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kj-blue via-kj-blue/50 to-transparent" />
                  
                  {dest.popular && (
                    <div className="absolute top-4 right-4 bg-kj-gold text-kj-blue px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Popular
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{dest.country}</h3>
                    <p className="text-white/70 text-sm">{dest.cities.join(" • ")}</p>
                  </div>
                </div>
                
                <div className="bg-white p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Visa Type</p>
                      <p className="text-kj-blue font-bold">{dest.visaType}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Processing</p>
                      <p className="text-kj-blue font-bold">{dest.processing}</p>
                    </div>
                  </div>
                  
                  <a
                    href="/contact"
                    className="block w-full text-center py-3 bg-kj-blue text-white font-bold rounded-lg hover:bg-kj-blue-light transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-6 uppercase tracking-tight">
              Don't See Your <span className="text-kj-gold">Destination?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We process visas for many more countries. Contact us to discuss your travel plans.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
