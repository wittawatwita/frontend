"use client";

import ImageWithFallback from "@/components/ImageWithFallback";

const particles = [
  { width: 2.5, height: 2.5, left: "10%", top: "20%", duration: 18, delay: 2 },
  { width: 3, height: 2, left: "25%", top: "60%", duration: 22, delay: 5 },
  { width: 2, height: 3, left: "50%", top: "30%", duration: 20, delay: 8 },
  { width: 3.5, height: 2.5, left: "70%", top: "80%", duration: 25, delay: 1 },
  { width: 2, height: 2, left: "85%", top: "15%", duration: 19, delay: 6 },
  { width: 2.5, height: 3, left: "15%", top: "75%", duration: 23, delay: 3 },
  { width: 3, height: 2, left: "40%", top: "45%", duration: 21, delay: 7 },
  { width: 2, height: 2.5, left: "60%", top: "10%", duration: 24, delay: 4 },
  { width: 3.5, height: 3, left: "90%", top: "55%", duration: 17, delay: 9 },
  { width: 2, height: 2, left: "5%", top: "40%", duration: 26, delay: 0 },
  { width: 2.5, height: 2.5, left: "35%", top: "90%", duration: 20, delay: 5 },
  { width: 3, height: 2, left: "75%", top: "35%", duration: 22, delay: 8 },
];

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-float-orb-1" />
      <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px] animate-float-orb-2" />
      <div className="absolute bottom-[10%] left-[35%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[140px] animate-float-orb-3" />
      <div className="absolute top-[60%] left-[60%] w-[350px] h-[350px] rounded-full bg-accent/10 blur-[90px] animate-float-orb-4" />
      <div className="absolute top-[20%] right-[30%] w-[250px] h-[250px] rounded-full bg-orange-500/10 blur-[80px] animate-float-orb-5" />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#3a3128]/20 animate-float-particle"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              left: p.left,
              top: p.top,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <div className="absolute -inset-[100%] animate-slow-spin">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
