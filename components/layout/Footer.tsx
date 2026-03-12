"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-kj-blue text-kj-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col">
            <span className="text-3xl font-bold font-montserrat tracking-tighter text-kj-gold leading-none">
              KJ GLOBAL
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-kj-white/80 font-medium">
              Travel Agency
            </span>
          </Link>
          <p className="text-kj-white/70 text-sm leading-relaxed">
            Your trusted partner for global travel and visa processing services. We make your international dreams a reality with 98% satisfaction rate.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-kj-gold hover:text-white transition-colors text-xl"><FaFacebook /></a>
            <a href="#" className="text-kj-gold hover:text-white transition-colors text-xl"><FaTwitter /></a>
            <a href="#" className="text-kj-gold hover:text-white transition-colors text-xl"><FaInstagram /></a>
            <a href="#" className="text-kj-gold hover:text-white transition-colors text-xl"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold font-montserrat mb-6 text-kj-gold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4 text-sm text-kj-white/70">
            <li><Link href="#" className="hover:text-kj-gold transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-kj-gold transition-colors">About Us</Link></li>
            <li><Link href="#services" className="hover:text-kj-gold transition-colors">Services</Link></li>
            <li><Link href="#visas" className="hover:text-kj-gold transition-colors">Visa Categories</Link></li>
            <li><Link href="#contact" className="hover:text-kj-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Visa Services */}
        <div>
          <h4 className="text-lg font-bold font-montserrat mb-6 text-kj-gold uppercase tracking-wider">Visa Services</h4>
          <ul className="space-y-4 text-sm text-kj-white/70">
            <li><Link href="#" className="hover:text-kj-gold transition-colors">Tourist Visa</Link></li>
            <li><Link href="#" className="hover:text-kj-gold transition-colors">Student Visa</Link></li>
            <li><Link href="#" className="hover:text-kj-gold transition-colors">Job Visa</Link></li>
            <li><Link href="#" className="hover:text-kj-gold transition-colors">Business Visa</Link></li>
            <li><Link href="#" className="hover:text-kj-gold transition-colors">Medical Visa</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold font-montserrat mb-6 text-kj-gold uppercase tracking-wider">Contact Us</h4>
          <div className="space-y-6 text-sm text-kj-white/70">
            <div className="flex items-start space-x-3">
              <HiLocationMarker className="text-kj-gold text-xl flex-shrink-0" />
              <p>Satmatha, Panir Tank Road, Bogura, Bangladesh</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-kj-gold flex-shrink-0" />
              <p>01721-725650, 01311-950118</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-kj-gold text-xl flex-shrink-0" />
              <p>+880 1721-725650</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-xs text-kj-white/50 uppercase tracking-widest font-medium">
        &copy; {new Date().getFullYear()} KJ Global Travel Agency. All rights reserved.
      </div>
    </footer>
  );
}
