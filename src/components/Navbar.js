"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X, User, ChevronDown, LogOut, LayoutDashboard } from "lucide-react";
import { cn } from "@/utils/cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const EASE = "[transition-timing-function:cubic-bezier(0.4,0,0.2,1)]";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [token, setToken] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const hideTimeoutRef = useRef(null);
  const userMenuRef = useRef(null);

  // เช็กขนาดจอ: ฟีเจอร์ "หด/ซ่อน Navbar" เปิดได้เฉพาะหน้าจอคอม (lg ขึ้นไป)
  // บนมือถือ Navbar จะแสดงเต็มและกดเมนูได้ตลอด ไม่หด/ซ่อนตัวเอง
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // จับระยะ Scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Timer 5 วินาที เมื่ออยู่ในสถานะ ย่อ (isCollapsed)
  useEffect(() => {
    // บนมือถือ ปิดฟีเจอร์หด/ซ่อนทั้งหมด เผื่อสลับจอจากคอมมาโทรศัพท์
    if (!isDesktop) {
      setIsCollapsed(false);
      setIsHidden(false);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      return;
    }

    if (isCollapsed) {
      hideTimeoutRef.current = setTimeout(() => {
        setIsHidden(true);
      }, 5000);
    } else {
      setIsHidden(false);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    }

    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [isCollapsed, isDesktop]);

  // ดึง Token จาก localStorage และตรวจจับการเปลี่ยนแปลงของ Token แบบ Real-time
  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    };

    // เช็กครั้งแรกเมื่อ Component Mount
    checkToken();

    // ฟัง event storage (เมื่อมีการเปลี่ยน localStorage จาก tab/window อื่น)
    // และ custom event 'auth-change' (เมื่อ Login จากหน้าเดียวกัน)
    window.addEventListener("storage", checkToken);
    window.addEventListener("auth-change", checkToken);
    window.addEventListener("focus", checkToken);

    return () => {
      window.removeEventListener("storage", checkToken);
      window.removeEventListener("auth-change", checkToken);
      window.removeEventListener("focus", checkToken);
    };
  }, []);

  // ปิด User Menu เมื่อคลิกภายนอก Dropdown (Click Outside)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ฟังก์ชันขยาย/ย่อ เมนู
  const toggleCollapse = (e) => {
    e.preventDefault();
    // บนมือถือ ปิดฟีเจอร์หด/ซ่อน Navbar (ให้แสดงเต็มและกดเมนูได้ตลอด)
    if (!isDesktop) return;
    if (isHidden) {
      setIsHidden(false);
      return;
    }
    setIsCollapsed((prev) => !prev);
    if (isOpen) setIsOpen(false);
  };

  // Event Handlers สำหรับ Mouse hover
  const handleMouseEnter = () => {
    if (isCollapsed) {
      setIsHidden(false);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isCollapsed && !isHidden) {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => {
        setIsHidden(true);
      }, 5000);
    }
  };

  // ฟังก์ชัน Logout สำหรับลบ Token
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsUserMenuOpen(false);
    setIsOpen(false);
    
    // แจ้งเตือน Event ให้หน้าอื่นๆ ทราบ
    window.dispatchEvent(new Event("auth-change"));
    window.location.href = "/";
  };

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 flex justify-center pointer-events-none transition-all duration-700",
        EASE,
        isHidden ? "-translate-y-16 top-0" : "translate-y-0 top-4"
      )}
    >
      <div
        className={cn(
          "pointer-events-auto rounded-full transition-all duration-700 relative",
          EASE,
          "border border-stone/10 overflow-visible",
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-lg"
            : "bg-background/40 backdrop-blur-sm shadow-none",
          isCollapsed
            ? "w-[124px] h-12 px-5 py-2 overflow-hidden"
            : "w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-2 lg:py-3"
        )}
      >
        <div className="flex items-center justify-start h-8 lg:h-10 relative w-full">
          {/* Logo Button */}
          <button
            onClick={toggleCollapse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            className={cn(
              "font-serif font-bold tracking-tight text-stone text-xl lg:text-2xl cursor-pointer select-none shrink-0 z-10 relative",
              "transition-all duration-300 ease-out hover:opacity-80 active:scale-95 flex items-center gap-1"
            )}
            title={
              isHidden
                ? "Click to show navbar"
                : isCollapsed
                ? "Click to expand"
                : "Click to collapse"
            }
          >
            Lumina
          </button>

          {/* Wrapper สำหรับเนื้อหาฝั่งขวา */}
          <div
            className={cn(
              "flex items-center justify-between w-full transition-all duration-700",
              EASE,
              "origin-left ml-4",
              isCollapsed
                ? "opacity-0 max-w-0 -translate-x-2 pointer-events-none overflow-hidden"
                : "opacity-100 max-w-[1000px] translate-x-0 pointer-events-auto"
            )}
          >
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm font-medium text-stone/80 hover:text-stone transition-colors duration-300 whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-stone transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop Search & Actions */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <div className="relative flex items-center group">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-48 xl:w-56 h-10 pl-10 pr-4 rounded-full bg-stone/10 border border-stone/10 text-sm text-stone placeholder:text-stone/50 focus:outline-none focus:border-stone/30 focus:bg-stone/15 focus:w-56 xl:focus:w-64 transition-all duration-300 ease-out"
                />
                <Search
                  size={16}
                  className="absolute left-3.5 text-stone/50 pointer-events-none transition-colors duration-300 group-focus-within:text-stone/70"
                />
              </div>

              {/* Account / Auth Dropdown */}
              {token ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen((prev) => !prev)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-stone/10 text-stone hover:bg-stone/20 active:scale-90 transition-all duration-300 shrink-0"
                    aria-label="User Account"
                  >
                    <User size={18} />
                  </button>

                  {/* Dropdown เมนูเมื่อ Login แล้ว */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-stone/10 rounded-2xl shadow-xl py-2 z-50 flex flex-col gap-1 animate-in fade-in zoom-in-95 duration-200">
                      <Link
                        href="/users"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="px-4 py-2 text-sm text-stone/80 hover:bg-stone/10 hover:text-stone flex items-center gap-2 transition-colors"
                      >
                        <LayoutDashboard size={16} /> Users
                      </Link>
                      <div className="h-px bg-stone/10 my-1" />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-stone/70 hover:text-stone hover:bg-stone/10 active:scale-90 transition-all duration-300 shrink-0"
                  aria-label="Login"
                >
                  <User size={18} />
                </Link>
              )}

              <Link
                href="/service"
                className="w-10 h-10 rounded-full flex items-center justify-center text-stone/70 hover:text-stone hover:bg-stone/10 active:scale-90 transition-all duration-300 relative shrink-0"
                aria-label="Cart"
              >
                <ShoppingCart size={18} />
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  3
                </span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-1 shrink-0 ml-auto">
              <Link
                href="/service"
                className="w-10 h-10 rounded-full flex items-center justify-center text-stone/70 hover:text-stone hover:bg-stone/10 active:scale-90 transition-all duration-300 relative"
                aria-label="Cart"
              >
                <ShoppingCart size={18} />
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-stone/80 hover:bg-stone/10 active:scale-90 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <span
                  className={cn(
                    "inline-flex transition-transform duration-300 ease-out",
                    isOpen ? "rotate-90" : "rotate-0"
                  )}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ลูกศร ชี้ลงขนาดเล็ก แสดงเมื่อ Navbar ซ่อนอยู่ด้านบน */}
        <div
          className={cn(
            "absolute bottom-0.5 left-1/2 -translate-x-1/2 text-stone/60 transition-all duration-300 pointer-events-none",
            isHidden ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          )}
        >
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {!isCollapsed && (
        <div
          className={cn(
            "lg:hidden absolute top-full mt-2 w-[calc(100%-2rem)] max-w-7xl p-4",
            "bg-background/95 backdrop-blur-md border border-stone/10 rounded-3xl shadow-xl",
            "transition-all duration-300 ease-out origin-top",
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          )}
        >
          <div className="relative mb-3 group">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-11 pl-10 pr-4 rounded-full bg-stone/10 border border-stone/10 text-sm text-stone placeholder:text-stone/50 focus:outline-none focus:border-stone/20 transition-all duration-300"
            />
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone/50 pointer-events-none transition-colors duration-300 group-focus-within:text-stone/70"
            />
          </div>
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "px-4 py-2.5 text-sm font-medium text-stone/80 hover:bg-stone/10 rounded-full",
                  "transition-all duration-300 ease-out",
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-stone/10 my-1" />

            {/* Mobile Auth Actions */}
            {token ? (
              <>
                <Link
                  href="/users"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-stone/80 hover:bg-stone/10 rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  <LayoutDashboard size={16} /> Users
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-500/10 rounded-full transition-all duration-300 flex items-center gap-2 text-left w-full cursor-pointer"
                >
                  <LogOut size={16} /> Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-stone/80 hover:bg-stone/10 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <User size={16} /> Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}