"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { HiLocationMarker, HiStar } from "react-icons/hi";
import Link from "next/link";

const destinations = [
  {
    name: "Paris",
    country: "France",
    landmark: "Eiffel Tower",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    visas: "120+"
  },
  {
    name: "New York",
    country: "USA",
    landmark: "Statue of Liberty",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    visas: "200+"
  },
  {
    name: "Rome",
    country: "Italy",
    landmark: "Colosseum",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop",
    rating: 4.9,
    visas: "150+"
  },
  {
    name: "Dubai",
    country: "UAE",
    landmark: "Burj Khalifa",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    visas: "180+"
  },
  {
    name: "Tokyo",
    country: "Japan",
    landmark: "Mount Fuji",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop",
    rating: 4.9,
    visas: "160+"
  },
  {
    name: "London",
    country: "UK",
    landmark: "Big Ben",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    visas: "190+"
  }
];

export default function DestinationShowcase() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-900 via-kj-blue to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-kj-gold rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-kj-gold/20 border border-kj-gold/30 rounded-full text-kj-gold text-xs uppercase tracking-[0.3em] font-bold">
              Explore The World
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-montserrat text-white mb-6 uppercase tracking-tight"
          >
            Dream <span className="text-kj-gold">Destinations</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Discover iconic landmarks and vibrant cities across the globe with our expert visa services
          </motion.p>
        </div>

        {/* 3D Coverflow Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="destination-swiper pb-16"
          >
            {destinations.map((dest, index) => (
              <SwiperSlide key={index} className="!w-[400px] md:!w-[500px]">
                <Link href="/destinations">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                  >
                    {/* Image */}
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      {/* Top Badge */}
                      <div className="flex justify-between items-start">
                        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                          <div className="flex items-center gap-2">
                            <HiStar className="text-kj-gold" />
                            <span className="text-white font-bold">{dest.rating}</span>
                          </div>
                        </div>
                        <div className="bg-kj-gold/90 backdrop-blur-md px-4 py-2 rounded-full">
                          <span className="text-kj-blue font-bold text-sm">{dest.visas} Visas</span>
                        </div>
                      </div>

                      {/* Bottom Info */}
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="mb-4"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <HiLocationMarker className="text-kj-gold text-xl" />
                            <span className="text-white/80 text-sm uppercase tracking-wider">{dest.landmark}</span>
                          </div>
                          <h3 className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:text-kj-gold transition-colors">
                            {dest.name}
                          </h3>
                          <p className="text-white/60 text-lg uppercase tracking-[0.3em]">{dest.country}</p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-4 bg-kj-gold text-kj-blue font-bold rounded-full hover:bg-kj-gold-light transition-all uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        >
                          Apply for Visa
                        </motion.button>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-kj-gold/30 to-transparent" />
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/destinations">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 uppercase tracking-wider"
            >
              Explore All Destinations
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      <style jsx global>{`
        .destination-swiper .swiper-pagination-bullet {
          background: #FFD700;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .destination-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 40px;
          border-radius: 6px;
        }
        .destination-swiper .swiper-button-next,
        .destination-swiper .swiper-button-prev {
          color: #FFD700;
          background: rgba(0, 45, 98, 0.8);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }
        .destination-swiper .swiper-button-next:after,
        .destination-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
      `}</style>
    </section>
  );
}
