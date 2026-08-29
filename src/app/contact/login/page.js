"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ScrollReveal, TextReveal } from "@/components/ScrollReveal";
import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";

export const dynamic = "force-dynamic";

export default function Login() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      
       <section className="py-24 lg:py-32 px-6 lg:px-24 relative">
         <div className="absolute inset-0 bg-stone/70 backdrop-blur-sm" />
         <div className="max-w-6xl mx-auto relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection>
               <p className="font-mono text-xs uppercase tracking-widest text-cream/60 mb-4">Welcome Back</p>
               <TextReveal as="h1" className="font-serif text-3xl md:text-5xl text-cream mb-6">
                 Log in to your account
               </TextReveal>
               <p className="text-cream/80 mb-8">
                 Access your wishlist, track orders, and enjoy a personalized shopping experience.
               </p>
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div>
                   <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">Email</label>
                   <input type="email" className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors" placeholder="you@example.com" />
                 </div>
                 <div>
                   <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">Password</label>
                   <input type="password" className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors" placeholder="••••••••" />
                 </div>
                 <div className="flex items-center justify-between">
                   <label className="flex items-center gap-2 text-sm text-cream/80">
                     <input type="checkbox" className="accent-white" />
                     Remember me
                   </label>
                   <a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors">Forgot password?</a>
                 </div>
                 <button type="submit" className="btn-white pill-btn w-full justify-center">
                   <span>Log In</span>
                 </button>
               </form>
               <p className="text-sm text-cream/60 mt-6">
                 Don&apos;t have an account?{" "}
                 <Link href="/register" className="text-cream font-medium hover:underline">
                   Sign up
                 </Link>
               </p>
             </AnimatedSection>

             <AnimatedSection variant="slideRight" delay={0.2} className="hidden lg:block">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5">
                 <ImageWithFallback
                   src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                   alt="Interior"
                   className="h-full w-full object-cover"
                   fallbackClassName="h-full w-full"
                 />
               </div>
             </AnimatedSection>
           </div>
         </div>
       </section>

      <Footer />
    </main>
  );
}
