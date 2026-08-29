"use client";

import { useRef } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ProductGrid } from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import StickyStackSection from "@/components/StickyStackSection";
import { ScrollReveal, TextReveal } from "@/components/ScrollReveal";
import {
  ArrowRight,
  Truck,
  Shield,
  Leaf,
  Flame,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

// เพิ่มหมวดหมู่สินค้า
const categories = [
  { name: "Audio", count: 24, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" },
  { name: "Peripherals", count: 18, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80" },
  { name: "Wearables", count: 12, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { name: "Gaming", count: 29, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80" },
  { name: "Smart Home", count: 15, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80" },
  { name: "Monitors", count: 10, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80" },
  { name: "Accessories", count: 36, image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&q=80" },
  { name: "Cables & Power", count: 21, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&q=80" },
];

const howItWorksSteps = [
  {
    title: "Browse & choose",
    description: "Explore curated audio, peripherals, and wearables picked for quality and value.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
  },
  {
    title: "Fast, free shipping",
    description: "Orders over $100 ship free, with tracking every step of the way.",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=1200&q=80",
  },
  {
    title: "Enjoy, worry-free",
    description: "Every order is backed by a 1-year warranty and hassle-free returns.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
    cta: { label: "Shop now", href: "/service" },
  },
];

// รายการสินค้าเพิ่มเติม
const popularProducts = [
  {
    id: 201,
    name: "Wireless Headphones Pro",
    category: "Audio",
    price: 249,
    originalPrice: 299,
    discount: 17,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    tag: "Hot",
    rating: 4.7,
    sold: 5205,
  },
  {
    id: 202,
    name: "Mechanical Keyboard X1",
    category: "Peripherals",
    price: 179,
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    tag: "Best Seller",
    rating: 4.8,
    sold: 3892,
  },
  {
    id: 203,
    name: "Precision Mouse M7",
    category: "Peripherals",
    price: 89,
    originalPrice: 109,
    discount: 18,
    image: "https://bewellofficial.com/pub/media/catalog/product/cache/2891eed40c6a15a9c1fe3827f4b31fc9/r/e/recover-vertical-ergonomic-mouse-small-hand.jpg",
    tag: null,
    rating: 4.6,
    sold: 1567,
  },
  {
    id: 204,
    name: "Smart Watch Ultra",
    category: "Wearables",
    price: 399,
    originalPrice: 449,
    discount: 11,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    tag: "Sale",
    rating: 4.5,
    sold: 2341,
  },
  {
    id: 205,
    name: "Ultrawide Curved Monitor 34\"",
    category: "Monitors",
    price: 699,
    originalPrice: 799,
    discount: 12,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    tag: "New",
    rating: 4.9,
    sold: 842,
  },
  {
    id: 206,
    name: "Wireless Charging Pad 3-in-1",
    category: "Accessories",
    price: 49,
    originalPrice: 65,
    discount: 24,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
    tag: "Hot",
    rating: 4.4,
    sold: 4120,
  },
  {
    id: 207,
    name: "Pro Gaming Mousepad XXL",
    category: "Gaming",
    price: 35,
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
    tag: null,
    rating: 4.8,
    sold: 6210,
  },
  {
    id: 208,
    name: "Smart Ambient Light Bar",
    category: "Smart Home",
    price: 119,
    originalPrice: 139,
    discount: 14,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80",
    tag: "Popular",
    rating: 4.7,
    sold: 1930,
  },
];

export default function Home() {
  const categoryScrollRef = useRef(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Hero />

      {/* Categories Slider Section */}
      <section className="py-6 lg:py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-stone/70 backdrop-blur-sm" />
        
        {/* ปุ่มลูกศรซ้ายสุดหน้าจอ */}
        <button
          type="button"
          onClick={() => {
            if (categoryScrollRef.current) {
              categoryScrollRef.current.scrollBy({
                left: -categoryScrollRef.current.clientWidth * 0.75,
                behavior: "smooth",
              });
            }
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-stone/80 text-cream backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-stone hover:scale-105 active:scale-95"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* ปุ่มลูกศรขวาสุดหน้าจอ */}
        <button
          type="button"
          onClick={() => {
            if (categoryScrollRef.current) {
              categoryScrollRef.current.scrollBy({
                left: categoryScrollRef.current.clientWidth * 0.75,
                behavior: "smooth",
              });
            }
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-stone/80 text-cream backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-stone hover:scale-105 active:scale-95"
          aria-label="Scroll Right"
        >
          <ChevronRight size={20} />
        </button>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            ref={categoryScrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat, i) => (
              <AnimatedSection
                key={cat.name}
                delay={i * 0.05}
                className="shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
              >
                <Link
                  href="/service"
                  className="group block relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone/30 group-hover:bg-stone/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="font-serif text-lg sm:text-xl text-cream mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-cream/70">{cat.count} items</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Banner Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-stone to-stone-light rounded-3xl p-8 sm:p-12 lg:p-16 text-cream relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
                  <Flame size={14} />
                  Flash Sale
                </div>
                <TextReveal as="h2" className="font-serif text-3xl md:text-5xl text-cream mb-4">
                  Up to 40% off
                </TextReveal>
                <p className="text-cream/80 mb-8 max-w-lg">
                  Limited-time offers on select gadgets and accessories. While supplies last.
                </p>
                <Link href="/service" className="btn-white pill-btn">
                  <span>
                    Shop Flash Sale <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-stone/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-cream/60 mb-3">
                  Featured
                </p>
                <TextReveal as="h2" className="font-serif text-3xl md:text-4xl text-cream">
                  New Arrivals
                </TextReveal>
              </div>
              <Link
                href="/service"
                className="inline-flex items-center gap-2 text-sm font-medium text-cream/80 hover:text-cream transition-colors"
              >
                View all <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <ProductGrid />
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-stone/90 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={18} className="text-accent" />
              <p className="font-mono text-xs uppercase tracking-widest text-cream/60">
                Trending Now
              </p>
            </div>
            <TextReveal as="h2" className="font-serif text-3xl md:text-4xl text-cream">
              Most Popular
            </TextReveal>
          </AnimatedSection>
          <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-beige/10 via-stone/40 to-stone/60 p-4 sm:p-6 shadow-xl shadow-black/20">
            {/* แสดงรายการสินค้าที่เพิ่มเข้ามา */}
            <ProductGrid products={popularProducts} />
          </div>
        </div>
      </section>

      <StickyStackSection steps={howItWorksSteps} />

      {/* Features Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-stone/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
              { icon: Shield, title: "1-Year Warranty", desc: "Full manufacturer warranty" },
              { icon: Leaf, title: "Eco Packaging", desc: "Recycled and sustainable materials" },
            ].map((feature, i) => (
              <AnimatedSection
                key={feature.title}
                delay={i * 0.15}
                className="text-center p-8 rounded-2xl bg-cream/5 border border-cream/10"
              >
                <feature.icon size={32} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-cream mb-2">{feature.title}</h3>
                <p className="text-sm text-cream/60">{feature.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-stone text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <TextReveal as="h2" className="font-serif text-3xl md:text-5xl text-cream mb-6">
              Level up your setup
            </TextReveal>
            <p className="text-cream/80 mb-10 max-w-lg mx-auto">
              Premium gear for work, play, and everything in between.
            </p>
            <Link href="/register" className="btn-white pill-btn">
              <span>Get Started</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}