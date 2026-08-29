import React from 'react'

export default function LoginHero({ children }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />
        
        <div className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse duration-[6000ms]"></div>
        <div className="absolute bottom-1/4 right-1/3 h-[400px] w-[400px] rounded-full bg-emerald-600/5 blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md sm:max-w-lg mx-auto">
        
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-20 blur-2xl animate-pulse duration-[4000ms]"></div>
        
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/65 p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          <div className="flex justify-between items-center pb-6 border-b border-slate-900 mb-6">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-500 tracking-wider">SECURE_AUTH_SESSION</span>
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-white tracking-tight">เข้าสู่ระบบจัดการ</h2>
            <p className="text-sm text-slate-400 mt-2 bg-gradient-to-r from-indigo-200 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              เทคโนโลยีและนวัตกรรม
            </p>
          </div>

          <div className="relative z-10">
            {children}
          </div>
        </div>

        <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-950/90 px-3 py-2 shadow-xl backdrop-blur-md">
          <div className="rounded-lg bg-emerald-500/10 p-1.5 text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-13.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
            </svg>
          </div>
          <p className="text-[11px] text-slate-400 font-mono">ID Protections Active</p>
        </div>

      </div>
    </section>
  )
}
