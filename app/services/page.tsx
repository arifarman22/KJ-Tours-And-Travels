"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/sections/Services";
import { motion } from "framer-motion";
import { HiCheckCircle, HiTicket, HiOfficeBuilding, HiTruck } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const whyChooseUs = [
  "Expert visa consultants with 10+ years experience",
  "98% visa approval success rate",
  "24/7 customer support and tracking",
  "Transparent pricing with no hidden fees",
  "Fast processing with guaranteed timelines",
  "Personalized service for every client"
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Free initial consultation to understand your needs" },
  { step: "02", title: "Documentation", desc: "We guide you through required documents" },
  { step: "03", title: "Application", desc: "Expert submission and follow-up" },
  { step: "04", title: "Approval", desc: "Receive your visa and travel documents" }
];

const additionalServices = [
  {
    icon: HiTicket,
    title: "Air Ticket Bookings",
    description: "Get the best deals on domestic and international flights with all major airlines. We compare prices and find you the most convenient routes.",
    features: ["Best price guarantee", "All major airlines", "Flexible booking options", "24/7 booking support"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: HiOfficeBuilding,
    title: "Hotel Bookings",
    description: "Book comfortable accommodations worldwide. From budget-friendly options to luxury hotels, we help you find the perfect stay for your trip.",
    features: ["Worldwide hotel network", "Competitive rates", "Instant confirmation", "Special group discounts"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: HiTruck,
    title: "Transport Support",
    description: "Complete ground transportation solutions including airport transfers, car rentals, and local transport arrangements for a hassle-free journey.",
    features: ["Airport pickup/drop-off", "Car rental services", "Local transport booking", "Professional drivers"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    color: "from-emerald-500 to-teal-600"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop"
          alt="Services Hero"
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
              Our <span className="text-kj-gold">Services</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive travel and documentation solutions tailored to your needs. From visa processing to air ticketing, we handle it all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Additional Services Section - NEW UNIQUE DESIGN */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-kj-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-kj-blue/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="h-px w-12 bg-kj-gold" />
              <span className="text-kj-gold font-semibold uppercase tracking-[0.2em] text-sm">Complete Travel Solutions</span>
              <div className="h-px w-12 bg-kj-gold" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-kj-blue mb-6 tracking-tight"
            >
              We Also <span className="text-kj-gold">Provide</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg max-w-3xl mx-auto"
            >
              Beyond visa services, we offer complete travel support to make your journey seamless from start to finish
            </motion.p>
          </div>

          {/* Services Cards */}
          <div className="space-y-12">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`group relative ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-kj-gold`}>
                  {/* Image Side */}
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-8 left-8">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-4xl shadow-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                        <service.icon />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-3xl font-bold text-kj-blue mb-4 group-hover:text-kj-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        Book Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-kj-blue to-kj-blue-light rounded-2xl p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Complete Travel Package?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let us handle everything - visa, flights, hotels, and transport. Get a customized package tailored to your needs.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors shadow-lg"
              >
                Get Custom Package
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-8 uppercase tracking-tight">
                Why Choose <span className="text-kj-gold">KJ Global?</span>
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <HiCheckCircle className="text-kj-gold text-2xl flex-shrink-0 mt-1" />
                    <p className="text-slate-700 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-dark p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-kj-gold mb-6">Our Process</h3>
                <div className="space-y-6">
                  {processSteps.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kj-gold/20 flex items-center justify-center">
                        <span className="text-kj-gold font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
