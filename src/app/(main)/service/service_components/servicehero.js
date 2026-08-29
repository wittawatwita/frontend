import React from 'react'
import Link from 'next/link'

export default function ServiceHero() {
  const previewServices = [
    {
      title: "Web & Mobile App",
      desc: "พัฒนาเว็บและแอปพลิเคชันยุคใหม่ รองรับผู้ใช้งานจำนวนมากด้วยความเร็วสูงสุด",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    },
    {
      title: "Enterprise System",
      desc: "ออกแบบสถาปัตยกรรมซอฟต์แวร์และระบบสารสนเทศหลังบ้านสำหรับองค์กรขนาดใหญ่",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v3.75H3V3z" />
        </svg>
      )
    },
    {
      title: "Cloud & DevOps",
      desc: "วางระบบโครงสร้างพื้นฐานบน Cloud ที่เสถียร ปลอดภัย และพร้อม Scale ได้อย่างไร้รอยต่อ",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A8.915 8.915 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      )
    }
  ]

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)] opacity-70" />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-400 backdrop-blur-sm">
            Our Services
          </span>
          
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            ขับเคลื่อนธุรกิจของคุณด้วย <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              โซลูชันซอฟต์แวร์ระดับโปร
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-relaxed text-slate-400 font-light max-w-2xl mx-auto">
            ตั้งแต่การระดมไอเดียไปจนถึงการนำระบบขึ้นใช้งานจริง (Production) 
            เราส่งมอบซอฟต์แวร์ที่ตอบโจทย์เสถียรภาพ ความปลอดภัย และการเติบโตแบบไร้ขีดจำกัด
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/30 hover:brightness-110"
            >
              คุยเรื่องโปรเจกต์ของคุณ
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-900/40 p-6 backdrop-blur-md shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-800 hover:bg-slate-900/60"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="inline-flex rounded-xl bg-slate-950 p-3 border border-slate-800 transition-colors duration-300 group-hover:border-slate-700">
                {service.icon}
              </div>

              <h3 className="mt-4 text-lg font-bold text-white transition-colors duration-300 group-hover:text-teal-400">
                {service.title}
              </h3>
              
              <p className="mt-2 text-sm leading-relaxed text-slate-400 font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
