"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { cn } from "@/utils/cn";
import ImageWithFallback from "@/components/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Wireless Headphones Pro",
    category: "Audio",
    price: 249,
    originalPrice: 299,
    discount: 17,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    tag: "Best Seller",
    rating: 4.8,
    sold: 2340,
  },
  {
    id: 2,
    name: "Mechanical Keyboard X1",
    category: "Peripherals",
    price: 179,
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    tag: "New",
    rating: 4.9,
    sold: 567,
  },
  {
    id: 3,
    name: "Precision Mouse M7",
    category: "Peripherals",
    price: 89,
    originalPrice: 109,
    discount: 18,
    image: "https://bewellofficial.com/pub/media/catalog/product/cache/2891eed40c6a15a9c1fe3827f4b31fc9/r/e/recover-vertical-ergonomic-mouse-small-hand.jpg",
    tag: null,
    rating: 4.7,
    sold: 1890,
  },
  {
    id: 4,
    name: "Smart Watch Ultra",
    category: "Wearables",
    price: 399,
    originalPrice: 449,
    discount: 11,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    tag: "Limited",
    rating: 4.6,
    sold: 892,
  },
  {
    id: 5,
    name: "Portable Speaker Boom",
    category: "Audio",
    price: 129,
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    tag: "Hot",
    rating: 4.9,
    sold: 124,
  },
  {
    id: 6,
    name: "USB-C Hub Pro 7-in-1",
    category: "Accessories",
    price: 79,
    originalPrice: 99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80",
    tag: null,
    rating: 4.5,
    sold: 445,
  },
  {
    id: 7,
    name: "4K Monitor 27-inch",
    category: "Displays",
    price: 599,
    originalPrice: 699,
    discount: 14,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    tag: "Sale",
    rating: 4.8,
    sold: 89,
  },
  {
    id: 8,
    name: "Wireless Earbuds Air",
    category: "Audio",
    price: 149,
    originalPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    tag: "New",
    rating: 4.4,
    sold: 3200,
  },
];

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({ product, index = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.38, 0.98] }}
      className="group"
    >
      <Link href="/service" className="block">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100 mb-3 border border-transparent group-hover:border-accent/40 transition-colors duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-accent/10">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
            fallbackClassName="h-full w-full"
          />
          {product.tag && (
            <span className="absolute top-3 left-3 bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm">
              {product.tag}
            </span>
          )}
          {product.discount && (
            <span className="absolute top-3 right-3 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded-lg">
              -{product.discount}%
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-stone font-medium text-sm py-3 rounded-xl w-full justify-center items-center gap-2 flex">
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="space-y-1.5 px-0.5">
          <p className="text-[11px] font-mono uppercase tracking-wider text-cream/70">{product.category}</p>
          <h3 className="text-sm font-medium text-cream leading-snug line-clamp-2 group-hover:text-cream/80 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-cream">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-cream/50 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <div className="flex items-center gap-3 text-[11px] text-cream/70">
            <span className="flex items-center gap-1">
              <Star size={12} className="text-accent fill-accent" />
              {product.rating}
            </span>
            <span>|</span>
            <span>{product.sold.toLocaleString()} sold</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProductGrid({ products: productsProp, title, subtitle }) {
  const displayProducts = productsProp || products;
  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2">{title}</h3>}
          {subtitle && <p className="text-sm text-cream/60">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
