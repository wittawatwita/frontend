"use client";

import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ScrollReveal, TextReveal } from "@/components/ScrollReveal";
import ImageWithFallback from "@/components/ImageWithFallback";
import AnimatedBackground from "@/components/AnimatedBackground";

export const dynamic = "force-dynamic";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=80"
          alt="About"
          className="h-full w-full object-cover"
          fallbackClassName="h-full w-full"
        />
        <div className="absolute inset-0 bg-stone/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <AnimatedSection>
              <p className="font-mono text-xs uppercase tracking-widest text-cream/80 mb-4">Our Story</p>
              <TextReveal as="h1" className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream">
                About Lumina
              </TextReveal>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-24 relative">
        <div className="absolute inset-0 bg-stone/70 backdrop-blur-sm" />
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <TextReveal as="h2" className="font-serif text-3xl md:text-5xl text-cream mb-6">
              Founded with purpose
            </TextReveal>
            <p className="text-cream/80 text-lg leading-relaxed">
              Lumina began in a small studio with a big idea: that beautiful design should be accessible, sustainable, and timeless. We partner with independent makers and established studios who share our commitment to quality and ethical production.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Curate", desc: "We source pieces that stand the test of time — from emerging designers to heritage brands." },
              { num: "02", title: "Craft", desc: "Every product is evaluated for material integrity, construction, and design longevity." },
              { num: "03", title: "Deliver", desc: "Carbon-neutral shipping and careful packaging ensure your order arrives perfectly." },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <span className="font-mono text-xs text-cream/50 block mb-4">{step.num}</span>
                <h3 className="font-serif text-2xl text-cream mb-3">{step.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-24 bg-stone text-cream">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <TextReveal as="h2" className="font-serif text-3xl md:text-5xl text-cream mb-6">
              Meet the team
            </TextReveal>
            <p className="text-cream/80 max-w-lg mx-auto">
              A small, dedicated team based between Portland and Copenhagen.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Elena Voss", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
              { name: "Marcus Chen", role: "Head of Product", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
              { name: "Sofia Reyes", role: "Lead Designer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" },
              { name: "James Miller", role: "Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" },
            ].map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.1}>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-stone-200/20">
                  <ImageWithFallback
                    src={person.img}
                    alt={person.name}
                    className="h-full w-full object-cover"
                    fallbackClassName="h-full w-full"
                  />
                </div>
                <h3 className="font-medium text-cream">{person.name}</h3>
                <p className="text-sm text-cream/60">{person.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
