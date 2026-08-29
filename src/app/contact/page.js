"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ScrollReveal, TextReveal } from "@/components/ScrollReveal";
import ImageWithFallback from "@/components/ImageWithFallback";
import AnimatedBackground from "@/components/AnimatedBackground";

export const dynamic = "force-dynamic";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=80"
          alt="Contact"
          className="h-full w-full object-cover"
          fallbackClassName="h-full w-full"
        />
        <div className="absolute inset-0 bg-stone/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <AnimatedSection>
              <p className="font-mono text-xs uppercase tracking-widest text-cream/80 mb-4">Get in Touch</p>
              <TextReveal as="h1" className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream">
                Contact
              </TextReveal>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-24 relative">
        <div className="absolute inset-0 bg-stone/70 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <TextReveal as="h2" className="font-serif text-3xl md:text-4xl text-cream mb-8">
                Let&apos;s talk
              </TextReveal>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">Name</label>
                    <input type="text" className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">Email</label>
                    <input type="email" className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">Subject</label>
                  <input type="text" className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">Message</label>
                  <textarea rows={5} className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors resize-none" placeholder="Tell us more..." />
                </div>
                <button type="submit" className="pill-btn-primary pill-btn">
                  <span>Send Message</span>
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection variant="slideRight" delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-cream/60 mb-6">Visit Us</h3>
                  <div className="flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream/60 mt-1 shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                      <p className="text-cream font-medium">Showroom</p>
                      <p className="text-cream/70 text-sm leading-relaxed">742 Evergreen Terrace<br />Portland, OR 97201</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-cream/60 mb-6">Email</h3>
                  <div className="flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream/60 mt-1 shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <div>
                      <p className="text-cream font-medium">hello@lumina.com</p>
                      <p className="text-cream/70 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-cream/60 mb-6">Call</h3>
                  <div className="flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream/60 mt-1 shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <div>
                      <p className="text-cream font-medium">+1 (503) 555-0123</p>
                      <p className="text-cream/70 text-sm">Mon - Fri, 9am - 6pm PST</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
