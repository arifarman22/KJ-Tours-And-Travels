"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahat Ahmed",
    role: "Student Visa (Canada)",
    text: "KJ Global made my dream of studying in Canada possible. Their step-by-step guidance on documentation and visa interview was exceptional.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rahat"
  },
  {
    name: "Sumaiya Jahan",
    role: "Tourist Visa (USA)",
    text: "Highly professional service! I got my USA tourist visa approved within weeks. The team is very knowledgeable and supportive.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sumaiya"
  },
  {
    name: "Imran Khan",
    role: "Work Visa (Cambodia)",
    text: "The best travel agency in Bogura. They handled my work permit and visa for Cambodia with total transparency. Highly recommended!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=imran"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-montserrat text-kj-blue mb-4 uppercase tracking-tight"
          >
            Client <span className="text-kj-gold">Success Stories</span>
          </motion.h2>
          <div className="h-1 bg-kj-gold mx-auto w-20 mb-6" />
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="pb-16"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl h-full flex flex-col border border-slate-100"
              >
                <div className="flex text-kj-gold mb-6">
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                
                <FaQuoteLeft className="text-kj-gold/20 text-4xl mb-4" />
                
                <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">
                  "{t.text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-kj-gold">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-kj-blue">{t.name}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
