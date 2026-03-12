"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ApplicationForm from "@/sections/ApplicationForm";
import { motion } from "framer-motion";
import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import Image from "next/image";

const contactInfo = [
  {
    icon: HiMail,
    title: "Email",
    details: ["info@kjglobal.com", "support@kjglobal.com"],
    link: "mailto:info@kjglobal.com"
  },
  {
    icon: HiLocationMarker,
    title: "Head Office",
    details: ["Bogura, Bangladesh", "Opposite City Center"],
    link: null
  },
  {
    icon: HiClock,
    title: "Working Hours",
    details: ["Sat - Thu: 9:00 AM - 6:00 PM", "Friday: Closed"],
    link: null
  }
];

const offices = [
  {
    name: "Bogura Head Office",
    address: "Opposite City Center, Bogura, Bangladesh",
    email: "bogura@kjglobal.com"
  },
  {
    name: "Dhaka Branch",
    address: "Gulshan-2, Dhaka, Bangladesh",
    email: "dhaka@kjglobal.com"
  },
  {
    name: "Cambodia Office",
    address: "Phnom Penh, Cambodia",
    email: "cambodia@kjglobal.com"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
          alt="Contact Us Hero"
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
              Get In <span className="text-kj-gold">Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to start your journey? Contact us today for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-kj-blue flex items-center justify-center mb-4">
                  <info.icon className="text-kj-gold text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-kj-blue mb-3">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="space-y-1 hover:text-kj-gold transition-colors">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-slate-600 text-sm">{detail}</p>
                    ))}
                  </a>
                ) : (
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-slate-600 text-sm">{detail}</p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <ApplicationForm />

      {/* Office Locations */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
            >
              Our <span className="text-kj-gold">Offices</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-kj-gold mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-kj-blue mb-4">{office.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <HiLocationMarker className="text-kj-gold text-xl flex-shrink-0 mt-1" />
                    <p className="text-slate-600">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiMail className="text-kj-gold text-xl flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-slate-600 hover:text-kj-gold transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.14793387178!2d89.29270842167968!3d24.84897780000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-gradient-to-br from-kj-blue to-kj-blue-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat text-white mb-6 uppercase tracking-tight">
              Need <span className="text-kj-gold">Urgent Help?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our 24/7 emergency support team is always ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@kjglobal.com"
                className="px-8 py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-colors"
              >
                Email Us Now
              </a>
              <a
                href="https://wa.me/8801234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
