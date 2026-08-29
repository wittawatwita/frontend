"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Shop: [
    { href: "/service", label: "All Products" },
    { href: "/service", label: "New Arrivals" },
    { href: "/service", label: "Best Sellers" },
    { href: "/service", label: "Sale" },
    { href: "/service", label: "Lighting" },
    { href: "/service", label: "Furniture" },
  ],
  Support: [
    { href: "/contact", label: "FAQ" },
    { href: "/contact", label: "Shipping" },
    { href: "/contact", label: "Returns" },
    { href: "/contact", label: "Size Guide" },
    { href: "/contact", label: "Track Order" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "Careers" },
    { href: "/about", label: "Press" },
    { href: "/about", label: "Sustainability" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-stone text-cream overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
             <Link href="/" className="font-serif text-3xl font-bold text-cream inline-block mb-6">
              Lumina
            </Link>
            <p className="text-cream/60 max-w-xs text-sm leading-relaxed mb-8">
              Curated essentials for modern living. Discover furniture, lighting, and decor that transforms your space.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Twitter", "Pinterest"].map((social) => (
                 <a
                  key={social}
                  href="#"
                  className="text-xs text-cream/50 hover:text-cream transition-colors uppercase tracking-wider"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-cream/40 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Lumina. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-cream/30 text-xs">
            <span>Made with care</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/10 to-transparent pointer-events-none" />
    </footer>
  );
}
