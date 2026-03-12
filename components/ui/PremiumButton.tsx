"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // I'll create this utility shortly

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function PremiumButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-kj-gold text-kj-blue hover:bg-kj-gold-light shadow-lg hover:shadow-kj-gold/20",
    secondary: "bg-kj-blue text-kj-white hover:bg-kj-blue-light shadow-lg hover:shadow-kj-blue/20",
    outline: "border-2 border-kj-gold text-kj-gold hover:bg-kj-gold hover:text-kj-blue",
    ghost: "text-kj-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-full font-semibold transition-all duration-300 font-montserrat uppercase tracking-wider",
        variants[variant],
        sizes[size],
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
