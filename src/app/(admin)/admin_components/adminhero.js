'use client'

import React, { useState, useEffect } from 'react'

export default function AdminHeroSections() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const [visiblePasswords, setVisiblePasswords] = useState({})
  const [copiedId, setCopiedId] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.itdev.cmtc.ac.th/users')
        if (!response.ok) {
          throw new Error('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ API ได้')
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message || 'เกิดข้อผิดพลาดในการดึงข้อมูล')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const handleCopy = (text, typeId) => {
    navigator.clipboard.writeText(text)
    setCopiedId(typeId)
    setTimeout(() => setCopiedId(null), 1500)
  }

  const getUserFullName = (user) => {
    if (!user) return 'ไม่ระบุชื่อ'
    if (user.name) return user.name
    
    const firstName = user.fname || user.firstname || user.first_name || user.firstName || ''
    const lastName = user.lname || user.lastname || user.last_name || user.lastName || ''
    
    if (firstName || lastName) {
      return `${firstName} ${lastName}`.trim()
    }
    return user.username || user.user_name || user.user || `User #${user.id}`
  }

  const getUserEmail = (user) => {
    if (!user) return '-'
    
    const email = user.email || user.user_email || user.userEmail || user.Email || ''
    if (email) return email

    const fallbackAccount = user.username || user.user_name || user.user || user.student_id || ''
    if (fallbackAccount) return fallbackAccount

    return `ID: ${user.id}`
  }

  const getInitials = (user) => {
    const name = getUserFullName(user)
    
    if (!name || name === 'ไม่ระบุชื่อ' || name.startsWith('User #')) {
      return 'US'
    }

    const parts = name.trim().split(' ')
    if (parts.length > 1) {
      const firstPart = parts[0]?.[0] || ''
      const lastPart = parts[1]?.[0] || ''
      
      if (firstPart && lastPart) {
        return (firstPart + lastPart).toUpperCase()
      }
    }
    
    return name.substring(0, 2).toUpperCase()
  }

  const togglePasswordVisibility = (userId) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }))
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[130px] animate-pulse duration-[6000ms]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[110px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          
          <div className="relative w-full max-w-6xl">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-30 blur-3xl animate-pulse duration-[4000ms]"></div>
            
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-6">
                <div className="flex gap-1.5 opacity-60">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-slate-500">user_credentials_database.sys</span>
              </div>

              {loading && (
                <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500/20 border-t-indigo-500 mb-4" />
                  <p className="text-sm font-medium">กำลังโหลดและแปลงโครงสร้างข้อมูล...</p>
                </div>
              )}

              {error && !loading && (
                <div className="text-center py-16 px-4 rounded-xl border border-rose-500/20 bg-rose-500/5 text-rose-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <p className="font-semibold mb-1">เกิดข้อผิดพลาดในการดึงข้อมูลจาก API</p>
                  <p className="text-xs text-rose-500/80 font-mono">{error}</p>
                </div>
              )}

              {!loading && !error && (
                <div className="overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-900/10 scrollbar-thin scrollbar-thumb-slate-800">
                  <table className="w-full text-left border-collapse table-auto">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900/50 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        <th className="px-6 py-4 min-w-[240px]">ชื่อ - นามสกุล</th>
                        <th className="px-6 py-4 min-w-[240px]">อีเมล / บัญชีผู้ใช้ (Account)</th>
                        <th className="px-6 py-4 min-w-[180px]">รหัสผ่าน (Password)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50 text-sm text-slate-300">
                      {users.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="text-center py-12 text-slate-500 font-light">
                            ไม่พบข้อมูลผู้ใช้งานในระบบคลาวด์
                          </td>
                        </tr>
                      ) : (
                        users.map((user) => {
                          const fullName = getUserFullName(user)
                          const email = getUserEmail(user)
                          const password = user.password || user.pass || 'N/A'
                          const userId = user.id

                          return (
                            <tr key={userId} className="transition-colors hover:bg-white/[0.015]">
                              
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 overflow-hidden select-none">
                                    <span className="truncate max-w-[32px] block text-center">
                                      {getInitials(user)}
                                    </span>
                                  </div>
                                  <div className="truncate max-w-[200px]" title={fullName}>
                                    <span className="font-semibold text-white text-sm">{fullName}</span>
                                  </div>
                                </div>
                              </td>

                              <td className="px-6 py-4">
                                <div className="flex items-center justify-between group/cell max-w-[240px]">
                                  <span className="text-slate-300 font-mono text-xs truncate mr-2" title={email}>
                                    {email}
                                  </span>
                                  {email !== '-' && (
                                    <button
                                      onClick={() => handleCopy(email, `e-${userId}`)}
                                      className="shrink-0 opacity-0 group-hover/cell:opacity-100 p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-all duration-150"
                                      title="คัดลอกข้อมูลบัญชี"
                                    >
                                      {copiedId === `e-${userId}` ? (
                                        <span className="text-[10px] text-emerald-400 font-sans">คัดลอกแล้ว!</span>
                                      ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.16-7.5-8.875a9.06 9.06 0 00-1.5-.124m7.5 10.376t-7.5-10.376" />
                                        </svg>
                                      )}
                                    </button>
                                  )}
                                </div>
                              </td>

                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <div className="bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 flex items-center justify-between w-full max-w-[160px] group/pass">
                                    <span className="font-mono text-xs tracking-wider text-indigo-300 truncate mr-2">
                                      {visiblePasswords[userId] ? password : '••••••••'}
                                    </span>
                                    
                                    <div className="flex items-center gap-1 shrink-0">
                                      {password !== 'N/A' && visiblePasswords[userId] && (
                                        <button
                                          onClick={() => handleCopy(password, `p-${userId}`)}
                                          className="p-1 rounded hover:bg-slate-800 text-slate-500 hover:text-white transition-colors"
                                          title="คัดลอกรหัสผ่าน"
                                        >
                                          {copiedId === `p-${userId}` ? (
                                            <span className="text-[8px] text-emerald-400 font-sans">คัดลอกแล้ว!</span>
                                          ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75" />
                                            </svg>
                                          )}
                                        </button>
                                      )}
                                      
                                      <button 
                                        onClick={() => togglePasswordVisibility(userId)}
                                        className="p-1 rounded hover:bg-slate-800 text-slate-500 hover:text-white transition-colors"
                                      >
                                        {visiblePasswords[userId] ? (
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                          </svg>
                                        ) : (
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                          </svg>
                                        )}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </td>

                            </tr>
                          )
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {!loading && !error && (
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/95 px-5 py-3 shadow-2xl backdrop-blur-md animate-bounce duration-[6000ms]">
                <div className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 p-2 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Total Registered Accounts</p>
                  <p className="text-sm font-bold text-white">
                    {users.length.toLocaleString()} บัญชี
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
