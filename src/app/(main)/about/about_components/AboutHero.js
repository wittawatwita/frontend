import React from 'react'
import Link from 'next/link'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        
        <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[140px] animate-pulse duration-[8000ms]"></div>
        <div className="absolute bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          
          <div className="text-center lg:col-span-7 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400 backdrop-blur-md shadow-inner shadow-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              Who We Are
            </span>

            <h1 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-6xl lg:leading-[1.15]">
              เบื้องหลังความสำเร็จ
              <span className="mt-2 block bg-gradient-to-r from-violet-200 via-indigo-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                ในทุกก้าวสู่ยุคดิจิทัล
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-xl mx-auto lg:mx-0 font-light">
              เราคือทีมผู้เชี่ยวชาญด้านเทคโนโลยีที่มุ่งมั่นส่งมอบซอฟต์แวร์ระดับสากล 
              ด้วยการผสานความคิดสร้างสรรค์เข้ากับวิศวกรรมซอฟต์แวร์ที่แม่นยำ 
              เพื่อเปลี่ยนไอเดียของคุณให้กลายเป็นนวัตกรรมที่จับต้องได้และยั่งยืน
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-900 pt-8 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-extrabold text-white sm:text-3xl">50+</p>
                <p className="mt-1 text-xs text-slate-500 font-medium uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white sm:text-3xl">99%</p>
                <p className="mt-1 text-xs text-slate-500 font-medium uppercase tracking-wider">Client Satisfied</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white sm:text-3xl">5+ Years</p>
                <p className="mt-1 text-xs text-slate-500 font-medium uppercase tracking-wider">Experience</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-violet-500/20"
              >
                มาร่วมงานกับเรา
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-20 blur-3xl animate-pulse duration-[5000ms]"></div>
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-4 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                
                <div className="overflow-hidden rounded-xl border border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
                    alt="Our Tech Team Working Together"
                    className="w-full h-auto object-cover transition-transform duration-1000 ease-out hover:scale-105 filter brightness-90 contrast-105"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/90 p-4 shadow-xl backdrop-blur-md">
                <div className="rounded-lg bg-violet-500/10 p-2 text-violet-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Our Commitment</p>
                  <p className="text-sm font-bold text-white">Quality & Innovation</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
