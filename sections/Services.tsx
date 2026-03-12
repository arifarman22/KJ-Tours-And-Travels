"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import { 
  HiIdentification, 
  HiGlobe, 
  HiTicket, 
  HiShieldCheck, 
  HiFingerPrint, 
  HiUserGroup, 
  HiDocumentAdd,
  HiClipboardCheck,
  HiTruck,
  HiBriefcase
} from "react-icons/hi";

const services = [
  {
    title: "E-Passport Application",
    description: "Hassle-free online application for e-passports with full documentation support.",
    icon: HiIdentification,
    slug: "e-passport"
  },
  {
    title: "E-Visa Application",
    description: "Fast-track electronic visa processing for destinations worldwide.",
    icon: HiGlobe,
    slug: "e-visa"
  },
  {
    title: "Visa Processing",
    description: "Comprehensive assistance for tourist, student, and work visa applications.",
    icon: HiClipboardCheck,
    slug: "visa-processing"
  },
  {
    title: "Air Ticketing",
    description: "Best deals on domestic and international air tickets with all major airlines.",
    icon: HiTicket,
    slug: "air-ticketing"
  },
  {
    title: "Travel Support",
    description: "International travel transport and logistics support for your journeys.",
    icon: HiTruck,
    slug: "travel-support"
  },
  {
    title: "Police Clearance",
    description: "End-to-end processing for police clearance certificates for international travel.",
    icon: HiShieldCheck,
    slug: "police-clearance"
  },
  {
    title: "Police Verification",
    description: "Professional assistance for official police verification requirements.",
    icon: HiFingerPrint,
    slug: "police-verification"
  },
  {
    title: "NID Correction",
    description: "Assistance with National ID card corrections and updates online.",
    icon: HiUserGroup,
    slug: "nid-correction"
  },
  {
    title: "Birth Registration",
    description: "Online birth certificate registration and authentication services.",
    icon: HiDocumentAdd,
    slug: "birth-registration"
  },
  {
    title: "Manpower Assistance",
    description: "Recruitment assistance and export manpower services for global opportunities.",
    icon: HiBriefcase,
    slug: "manpower"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
          >
            Our <span className="text-kj-gold">Premium Services</span>
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
            className="text-slate-600 max-w-2xl mx-auto"
          >
            We provide a comprehensive range of travel and documentation services to ensure your international journey is smooth and successful.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
