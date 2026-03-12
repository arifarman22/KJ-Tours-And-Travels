"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Visa Processed", value: 1000, suffix: "+" },
  { label: "Countries Served", value: 15, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Satisfaction", value: 98, suffix: "%" },
];

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const increment = end / (totalMiliseconds / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="bg-kj-gold py-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <h3 className="text-kj-blue text-4xl md:text-5xl font-black font-montserrat mb-2">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-kj-blue/70 text-sm uppercase tracking-widest font-bold font-poppins">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
