"use client";

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import PremiumButton from "@/components/ui/PremiumButton";

const offices = [
  {
    city: "Bogura Office",
    address: "Satmatha, Panir Tank Road, Bogura, Bangladesh",
    phone: "01721-725650 / 01311-950118",
    whatsapp: "01721-725650",
    email: "info@kjglobal.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14555.2345!2d89.3712!3d24.8481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUwJzUzLjIiTiA4OcKwMjInMTYuMyJF!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
  },
  {
    city: "Cambodia Office",
    address: "Sen Sok, Phnom Penh, Cambodia",
    phone: "+855 904 7026",
    whatsapp: "+855 904 7026",
    email: "kh@kjglobal.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7706!2d104.8765!3d11.5448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMyJzQxLjMiTiAxMDTCsDUyJzM1LjQiRQ!5e0!3m2!1sen!2skh!4v1620000000000!5m2!1sen!2skh"
  }
];

export default function Locations() {
  return (
    <section id="office" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
          >
            Visit Our <span className="text-kj-gold">Global Offices</span>
          </motion.h2>
          <div className="h-1 bg-kj-gold mx-auto w-20 mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="h-[300px] w-full bg-slate-200 relative">
                <iframe
                  src={office.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black font-montserrat text-kj-blue mb-6 uppercase">
                  {office.city}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="text-kj-gold text-xl flex-shrink-0 mt-1" />
                    <p className="text-slate-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-kj-gold flex-shrink-0" />
                    <p className="text-slate-600 font-bold">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-kj-gold flex-shrink-0" />
                    <p className="text-slate-600">{office.email}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <PremiumButton variant="secondary" size="sm" className="flex items-center space-x-2">
                    <FaPhone /> <span>Call Now</span>
                  </PremiumButton>
                  <PremiumButton variant="primary" size="sm" className="flex items-center space-x-2">
                    <FaWhatsapp className="text-lg" /> <span>WhatsApp</span>
                  </PremiumButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
