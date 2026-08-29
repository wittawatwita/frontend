"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ScrollReveal, TextReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import AnimatedBackground from "@/components/AnimatedBackground";

export const dynamic = "force-dynamic";

const services = [
  {
    title: "Device Setup",
    description: "We help you set up and optimize your new gadgets — from pairing headphones to configuring custom keyboard macros.",
    price: "From $49",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    features: ["1-on-1 setup session", "Software optimization", "Personalized configuration"],
  },
  {
    title: "Workspace Build",
    description: "A complete desk setup package including monitor, keyboard, mouse, and cable management tailored to your workflow.",
    price: "From $199",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    features: ["Full workspace design", "Ergonomic assessment", "Cable management"],
  },
  {
    title: "Repair & Support",
    description: "Fast, reliable repair for headphones, keyboards, mice, and other peripherals. Most fixes completed same-day.",
    price: "From $39",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80",
    features: ["Diagnostic service", "Genuine parts", "90-day warranty on repairs"],
  },
];

export default function Service() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />

      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2400&q=80"
          alt="Service"
          className="h-full w-full object-cover"
          fallbackClassName="h-full w-full"
        />
        <div className="absolute inset-0 bg-stone/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <AnimatedSection>
              <p className="font-mono text-xs uppercase tracking-widest text-cream/80 mb-4">What We Offer</p>
              <TextReveal as="h1" className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream">
                Services
              </TextReveal>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-24 relative">
        <div className="absolute inset-0 bg-stone/70 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <TextReveal as="h2" className="font-serif text-3xl md:text-5xl text-cream mb-6">
              We help you get the most out of your gear
            </TextReveal>
            <p className="text-cream/80 max-w-2xl mx-auto">
              From setup to repair, our experts keep your devices running at their best.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <div className="group h-full flex flex-col rounded-3xl overflow-hidden border border-stone-200 bg-white hover:shadow-xl transition-shadow duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
                      fallbackClassName="h-full w-full"
                    />
                  </div>
                  <div className="flex-1 p-8 flex flex-col">
                    <h3 className="font-serif text-2xl text-stone mb-2">{service.title}</h3>
                    <p className="text-stone/70 text-sm leading-relaxed mb-4">{service.description}</p>
                    <p className="font-mono text-xs text-grey mb-6">{service.price}</p>
                    <ul className="space-y-2 mb-8 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-stone/80">
                          <CheckCircle2 size={16} className="text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-stone hover:gap-3 transition-all">
                      Inquire <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-24 bg-stone/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center">
            <TextReveal as="h2" className="font-serif text-3xl md:text-5xl text-cream mb-6">
              Ready to upgrade your setup?
            </TextReveal>
            <p className="text-cream/80 mb-10 max-w-lg mx-auto">
              Book a free 15-minute consultation and we will help you build the perfect workstation.
            </p>
            <Link href="/contact" className="btn-white pill-btn">
              <span>Book a Call</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
