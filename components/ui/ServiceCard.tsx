"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay?: number;
  slug?: string;
}

export default function ServiceCard({ title, description, icon: Icon, delay = 0, slug }: ServiceCardProps) {
  return (
    <Link href={slug ? `/services/${slug}` : "/services"}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden cursor-pointer"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-kj-gold/10 rounded-bl-[100px] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:bg-kj-blue" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-kj-blue text-kj-gold text-3xl transition-all duration-500 group-hover:bg-kj-gold group-hover:text-kj-blue group-hover:scale-110">
            <Icon />
          </div>
          
          <h3 className="text-xl font-bold font-montserrat text-kj-blue mb-4 group-hover:text-white transition-colors duration-500">
            {title}
          </h3>
          
          <p className="text-slate-600 mb-8 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500 flex-grow">
            {description}
          </p>
          
          <div className="flex items-center space-x-2 text-kj-blue font-bold text-sm uppercase tracking-wider group-hover:text-kj-gold transition-colors duration-500">
            <span>Learn More</span>
            <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
