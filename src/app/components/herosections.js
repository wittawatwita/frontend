import React from 'react'
import Link from 'next/link'

export default function HeroSections() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse duration-[6000ms]"></div>
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          
          <div className="text-center lg:col-span-7 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 backdrop-blur-md shadow-inner shadow-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Next-Gen Technology
            </span>

            <h1 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-6xl lg:leading-[1.1]">
              สร้างอนาคตด้วย
              <span className="mt-2 block bg-gradient-to-r from-indigo-200 via-sky-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-sm">
                เทคโนโลยีและนวัตกรรม
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-xl mx-auto lg:mx-0 font-light">
              รับพัฒนาเว็บไซต์ แอปพลิเคชัน และระบบสารสนเทศครบวงจร 
              ด้วยสถาปัตยกรรมซอฟต์แวร์ล้ำสมัยที่พร้อมจะขับเคลื่อนและยกระดับองค์กรของคุณสู่ยุคดิจิทัล
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-indigo-500/20"
              >
                เรียนรู้เพิ่มเติม
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/40 px-8 py-4 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 blur-3xl animate-pulse duration-[4000ms]"></div>
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-4 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                
                <div className="flex gap-1.5 pb-3 opacity-60">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
                    alt="Modern Technology Space"
                    className="w-full h-auto object-cover transition-transform duration-1000 ease-out hover:scale-105 filter brightness-95 contrast-105"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-4 shadow-xl backdrop-blur-md animate-bounce duration-[5000ms]">
                <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">System Status</p>
                  <p className="text-sm font-bold text-white">100% Operational</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
