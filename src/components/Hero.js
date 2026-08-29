"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function Hero() {
  return (
    <section className="relative h-[90vh] lg:h-screen w-full overflow-hidden bg-stone">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-40"
          src="https://assets.mixkit.co/videos/8468/8468-720.mp4"
          poster="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=2400&q=80"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone via-stone/40 to-stone/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.38, 0.98] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-beige/10 backdrop-blur-sm border border-beige/20 rounded-full px-4 py-2 mb-8"
          >
            <Zap size={14} className="text-accent" />
            <span className="text-xs font-medium text-beige/90 uppercase tracking-wider">New Collection 2026</span>
          </motion.div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.95] mb-6">
            Gear that performs
            <br />
            <span className="italic text-beige">for every moment</span>
          </h1>
          <p className="text-stone-200 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover premium headphones, keyboards, watches, and accessories crafted for work, play, and everything in between.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/service" className="btn-white pill-btn w-full sm:w-auto">
              <span>Shop Collection</span>
            </Link>
            <Link href="/about" className="flex items-center gap-2 text-beige/90 text-sm font-medium hover:gap-3 transition-all px-6 py-3">
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.38, 0.98] }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-stone-200/50"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-stone-200/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
