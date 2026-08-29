'use client';

/**
 * StickyStackSection.js
 * -----------------------------------------------------------------------
 * Closely mirrors the "How it works" section on godaylight.com:
 *
 *  - Left column: numbered step list (01 / 02 / 03...). The active
 *    step is highlighted, with a vertical progress line that fills
 *    as you scroll.
 *  - Each step transition is a SLIDING BLOCK reveal (not a crossfade):
 *    a solid panel slides up from the bottom to fully cover the
 *    current text/image, the content swaps underneath while hidden,
 *    then the panel keeps sliding up and off-screen, revealing the
 *    new content as if it were uncovered from below.
 *  - Right column: a phone-frame style media panel showing the
 *    current step's image, using the same sliding-block reveal.
 *  - The whole section pins to the viewport and everything is scrubbed
 *    to scroll position, so scrolling up smoothly reverses the sequence
 *    (the block slides back down to cover, swaps back, then slides
 *    down and off, revealing the previous step).
 *
 * Install dependency first:
 *   npm install gsap
 *
 * Usage (page.js):
 *
 *   import StickyStackSection from "@/components/StickyStackSection";
 *
 *   const howItWorksSteps = [
 *     {
 *       title: "Browse & choose",
 *       description: "Explore curated audio, peripherals, and wearables picked for quality and value.",
 *       image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
 *     },
 *     {
 *       title: "Fast, free shipping",
 *       description: "Orders over $100 ship free, with tracking every step of the way.",
 *       image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=1200&q=80",
 *     },
 *     {
 *       title: "Enjoy, worry-free",
 *       description: "Every order is backed by a 1-year warranty and hassle-free returns.",
 *       image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
 *       cta: { label: "Shop now", href: "/service" },
 *     },
 *   ];
 *
 *   <StickyStackSection steps={howItWorksSteps} />
 * -----------------------------------------------------------------------
 */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

// How much extra scroll distance (in px) is given per step.
const SCROLL_DISTANCE_PER_STEP = 700;

export default function StickyStackSection({ steps = [] }) {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);
  const textOverlayRef = useRef(null);
  const imageOverlayRef = useRef(null);
  const panelRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  textRefs.current = [];
  imageRefs.current = [];
  const addTextRef = (el) => {
    if (el && !textRefs.current.includes(el)) textRefs.current.push(el);
  };
  const addImageRef = (el) => {
    if (el && !imageRefs.current.includes(el)) imageRefs.current.push(el);
  };

  useEffect(() => {
    if (!steps.length) return;

    gsap.registerPlugin(ScrollTrigger);

    const texts = textRefs.current;
    const images = imageRefs.current;
    const textOverlay = textOverlayRef.current;
    const imageOverlay = imageOverlayRef.current;
    const panel = panelRef.current;

    const ctx = gsap.context(() => {
      // Only the first step is visible at the start; everything else
      // sits underneath, hidden, waiting to be swapped in while the
      // block is covering the view.
      gsap.set(texts[0], { opacity: 1, y: 0 });
      gsap.set(texts.slice(1), { opacity: 0, y: 24 });
      gsap.set(images[0], { opacity: 1, scale: 1 });
      gsap.set(images.slice(1), { opacity: 0, scale: 1.08 });

      // Overlays start parked just below the visible area.
      gsap.set([textOverlay, imageOverlay], { yPercent: 100 });

      // The dark panel itself rests as a smaller, rounded "card" — it only
      // snaps to fullscreen the instant you scroll down and reach it.
      gsap.set(panel, {
        scale: 0.86,
        borderRadius: '2.5rem',
        transformOrigin: 'center center',
      });

      const panelBurstTl = gsap.timeline({ paused: true });
      panelBurstTl.to(panel, {
        scale: 1,
        borderRadius: '0rem',
        duration: 0.4,
        ease: 'power3.out',
      });

      const panelShrinkTl = gsap.timeline({ paused: true });
      panelShrinkTl.to(panel, {
        scale: 0.86,
        borderRadius: '2.5rem',
        duration: 0.4,
        ease: 'power2.inOut',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${SCROLL_DISTANCE_PER_STEP * (steps.length - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(
              steps.length - 1,
              Math.round(self.progress * (steps.length - 1))
            );
            setActiveIndex((prev) => (prev === idx ? prev : idx));
          },
          onEnter: () => panelBurstTl.restart(),
          onEnterBack: () => panelBurstTl.restart(),
          onLeave: () => panelShrinkTl.restart(),
          onLeaveBack: () => panelShrinkTl.restart(),
          // markers: true, // uncomment while debugging positions
        },
      });

      steps.forEach((_, i) => {
        if (i === 0) return;
        const segmentStart = i - 1; // each step gets 1 timeline "unit"
        const segmentMid = segmentStart + 0.5;

        // Reset the block just below the frame (instant, invisible — it's
        // already off-screen from the previous segment's end position).
        tl.set([textOverlay, imageOverlay], { yPercent: 100 }, segmentStart);

        // One continuous, symmetric tween carries the block the whole way:
        // up from below (100) to fully covering (0) to off the top (-100).
        // A single "inOut" ease — instead of two separate tweens stitched
        // together — has no velocity seam at the midpoint, so the motion
        // reads as one fluid sweep rather than a stop-and-go.
        tl.to(
          textOverlay,
          { yPercent: -100, duration: 1, ease: 'sine.inOut' },
          segmentStart
        );
        tl.to(
          imageOverlay,
          { yPercent: -100, duration: 1, ease: 'sine.inOut' },
          segmentStart
        );

        // Content swap happens exactly at the midpoint, which is the one
        // instant the block is fully opaque over the frame — still hidden,
        // still instant, but now landing precisely at the true cover point.
        tl.set(texts[i - 1], { opacity: 0 }, segmentMid);
        tl.set(texts[i], { opacity: 1 }, segmentMid);
        tl.set(images[i - 1], { opacity: 0 }, segmentMid);
        tl.set(images[i], { opacity: 1 }, segmentMid);

        // As the block uncovers the new content, ease it in with a soft
        // rise/scale so the reveal itself feels like part of one continuous
        // motion rather than content just sitting there waiting.
        tl.fromTo(
          texts[i],
          { y: 24 },
          { y: 0, duration: 0.6, ease: 'power2.out' },
          segmentMid
        );
        tl.fromTo(
          images[i],
          { scale: 1.08 },
          { scale: 1, duration: 0.6, ease: 'power2.out' },
          segmentMid
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [steps.length]);

  if (!steps.length) return null;

  return (
    <section ref={containerRef} className="relative" aria-label="How it works">
      <div
        ref={panelRef}
        className="relative h-screen w-full overflow-hidden bg-stone text-cream"
      >
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left: step indicator + block-reveal text stack */}
          <div className="flex w-full md:w-1/2 gap-6 md:gap-10">
            {/* Numbered step list with progress line */}
            <div className="flex flex-col gap-8 pt-2 shrink-0">
              {steps.map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs transition-colors duration-300 ${
                      i === activeIndex ? 'text-accent' : 'text-cream/30'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`h-px transition-all duration-300 ${
                      i === activeIndex ? 'w-8 bg-accent' : 'w-4 bg-cream/20'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Text stack, covered/uncovered by a sliding block */}
            <div className="relative flex-1 min-h-[220px] overflow-hidden">
              {steps.map((step, i) => (
                <div key={i} ref={addTextRef} className="absolute inset-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-3">
                    Step {i + 1}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4 leading-tight">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-cream/70 max-w-sm mb-6">{step.description}</p>
                  )}
                  {step.cta && (
                    <a
                      href={step.cta.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-cream hover:text-accent transition-colors"
                    >
                      {step.cta.label} <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              ))}
              {/* Sliding block: covers this panel then slides off, revealing the next step */}
              <div
                ref={textOverlayRef}
                className="absolute inset-0 bg-stone z-20 pointer-events-none will-change-transform"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-cream/20" />
              </div>
            </div>
          </div>

          {/* Right: phone-frame style media, covered/uncovered by a sliding block */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[260px] sm:w-[300px] aspect-[9/19] rounded-[2.5rem] border-4 border-cream/15 bg-black/40 p-2 shadow-2xl">
              {/* notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black/60 z-30" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                {steps.map((step, i) => (
                  <div key={i} ref={addImageRef} className="absolute inset-0">
                    {step.image && (
                      <img
                        src={step.image}
                        alt={step.title || ''}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                ))}
                {/* Sliding block: covers the screen then slides off, revealing the next image */}
                <div
                  ref={imageOverlayRef}
                  className="absolute inset-0 bg-stone z-20 pointer-events-none will-change-transform"
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-cream/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}