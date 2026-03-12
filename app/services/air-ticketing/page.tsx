"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiCheckCircle, HiClock, HiCurrencyDollar } from "react-icons/hi";

const features = [
  "Domestic flight bookings",
  "International flight bookings",
  "Best price guarantee",
  "All major airlines",
  "Group booking discounts",
  "24/7 booking support",
  "Flexible payment options",
  "E-ticket delivery"
];

const airlines = [
  "Emirates", "Qatar Airways", "Singapore Airlines", "Turkish Airlines",
  "Biman Bangladesh", "Thai Airways", "Malaysia Airlines", "Etihad Airways"
];

const process = [
  { step: "01", title: "Search", desc: "Tell us your travel dates and destination" },
  { step: "02", title: "Compare", desc: "We find the best deals from multiple airlines" },
  { step: "03", title: "Book", desc: "Confirm your booking with secure payment" },
  { step: "04", title: "Receive", desc: "Get your e-ticket via email instantly" }
];

export default function AirTicketingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Air Ticketing Service"
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
              Air <span className="text-kj-gold">Ticketing</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Best deals on domestic and international flights with all major airlines
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
              <h3 className="text-2xl font-bold text-kj-blue mb-2">Instant</h3>
              <p className="text-slate-600">Booking Confirmation</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <HiCurrencyDollar className="text-kj-gold text-4xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-kj-blue mb-2">Best Price</h3>
              <p className="text-slate-600">Guaranteed Deals</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <HiCheckCircle className="text-kj-gold text-4xl mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-kj-blue mb-2">24/7</h3>
              <p className="text-slate-600">Support Available</p>
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
                Get the best flight deals for your domestic and international travel. We work with all major airlines to provide you with competitive prices and flexible booking options.
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
                Partner <span className="text-kj-gold">Airlines</span>
              </h2>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {airlines.map((airline, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white p-4 rounded-lg text-center text-slate-700 font-medium shadow-sm hover:shadow-md transition-shadow"
                    >
                      {airline}
                    </motion.div>
                  ))}
                </div>
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
              Booking <span className="text-kj-gold">Process</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-kj-gold mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <h3 className="text-xl font-bold text-kj-blue mb-2">{item.title}</h3>
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
              Book Your <span className="text-kj-gold">Flight</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get the best deals on flights worldwide
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
