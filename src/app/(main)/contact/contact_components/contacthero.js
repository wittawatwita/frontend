import React from 'react'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        
        <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-rose-600/10 blur-[120px] animate-pulse duration-[8000ms]"></div>
        <div className="absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Get In Touch
            </span>

            <h1 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-5xl lg:leading-[1.1]">
              มาเริ่มสร้าง
              <span className="mt-2 block bg-gradient-to-r from-rose-200 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
                โปรเจกต์ถัดไปของคุณ
              </span>
              ไปด้วยกัน
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-400 font-light">
              ไม่ว่าคุณจะมีพิมพ์เขียวที่พร้อมเริ่มงาน หรือมีเพียงไอเดียเริ่มต้น 
              ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและช่วยออกแบบโซลูชันที่เหมาะสมที่สุดให้คุณ
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-rose-400 transition-colors duration-300 group-hover:border-rose-500/40">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615m19.5 0v-3c0-.621-.504-1.125-1.125-1.125h-2.25M3 6.75v3c0 .621.504 1.125 1.125 1.125h2.25m-3 0h16.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">ส่งอีเมลหาเรา</p>
                  <a href="mailto:hello@yourcompany.com" className="text-sm font-semibold text-slate-200 hover:text-rose-400 transition-colors">hello@yourcompany.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-purple-400 transition-colors duration-300 group-hover:border-purple-500/40">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.977 14.977 0 01-6.538-6.538l2.018-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v1.75z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">สายด่วนโทรฟรี</p>
                  <a href="tel:+6621234567" className="text-sm font-semibold text-slate-200 hover:text-purple-400 transition-colors">+66 (0) 2 123 4567</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.6)]">
              
              <div className="absolute top-4 left-6 flex gap-1.5 opacity-50">
                <span className="h-2 w-2 rounded-full bg-slate-700" />
                <span className="h-2 w-2 rounded-full bg-slate-700" />
                <span className="h-2 w-2 rounded-full bg-slate-700" />
              </div>

              <form className="mt-4 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">ชื่อของคุณ</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/50"
                      placeholder="สมชาย ใจดี"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">ชื่อบริษัท / องค์กร</label>
                    <input
                      type="text"
                      id="company"
                      className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/50"
                      placeholder="Company Co., Ltd."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">อีเมลติดต่อ</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/50"
                    placeholder="somchai@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">รายละเอียดโปรเจกต์ หรือข้อความของคุณ</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-rose-500/50 focus:outline-none focus:ring-1 focus:ring-rose-500/50 resize-none"
                    placeholder="อยากทำระบบเว็บ E-commerce หรือแอปพลิเคชันสำหรับ..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 py-4 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition-all duration-300 hover:brightness-110 hover:shadow-rose-500/30 active:scale-[0.98]"
                >
                  ส่งข้อความหาทีมงาน
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
