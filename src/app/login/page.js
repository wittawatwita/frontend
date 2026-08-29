"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { TextReveal } from "@/components/ScrollReveal";
import ImageWithFallback from "@/components/ImageWithFallback";
import AnimatedBackground from "@/components/AnimatedBackground";

const LOGIN_URL = "https://6a7e6fde3183f5fd884a1536.mockapi.io/api/Fullname";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    txt_username: "",
    txt_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.txt_username,
          password: form.txt_password,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        // 1. ดึง Token จาก API Response (หรือสร้างขึ้นมาหาก MockAPI ไม่ได้ส่งกลับมา)
        const token = result.token || `mock-jwt-token-${Date.now()}`;
        const userData = result.user || {
          username: form.txt_username,
          id: result.id || "1",
        };

        // 2. บันทึก Token และ User Data ลง localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));

        // 3. แสดงแจ้งเตือนสำเร็จ
        await Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          timer: 1200,
          showConfirmButton: false,
          confirmButtonColor: "#2563eb",
        });

        // 4. เปลี่ยนหน้าไปยัง /users
        router.push("/users");
        return;
      }

      // จัดการ Error ตาม HTTP Status Code
      if (response.status === 401) {
        await Swal.fire({
          icon: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text: result.message || "Username หรือรหัสผ่านไม่ถูกต้อง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#dc2626",
        });
      } else if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "กรุณาตรวจสอบข้อมูลที่กรอก",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#dcdc26",
        });
      } else if (response.status >= 500) {
        await Swal.fire({
          icon: "error",
          title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || "กรุณาลองใหม่ภายหลัง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#dc2626",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: `เข้าสู่ระบบไม่สำเร็จ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#dc2626",
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />

      <section className="py-24 lg:py-32 px-6 lg:px-24 relative">
        <div className="absolute inset-0 bg-stone/70 backdrop-blur-sm" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="font-mono text-xs uppercase tracking-widest text-cream/60 mb-4">
                Welcome Back
              </p>
              <TextReveal as="h1" className="font-serif text-3xl md:text-5xl text-cream mb-6">
                Log in to account
              </TextReveal>
              <p className="text-cream/80 mb-8">
                Welcome back! Please enter your credentials to access your account.
              </p>

              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    name="txt_username"
                    value={form.txt_username}
                    onChange={handleChange}
                    autoComplete="username"
                    required
                    className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors"
                    placeholder="Username หรือ Email"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="txt_password"
                      value={form.txt_password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                      className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors pr-16"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-mono uppercase text-cream/60 hover:text-cream transition-colors"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-white pill-btn w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isLoading ? "กำลังเข้าสู่ระบบ..." : "Log In"}</span>
                </button>
              </form>

              <p className="text-sm text-cream/60 mt-6">
                ยังไม่มีบัญชี?{" "}
                <Link href="/register" className="text-cream font-medium hover:underline">
                  สมัครสมาชิก
                </Link>
              </p>
            </AnimatedSection>

            <AnimatedSection variant="slideRight" delay={0.2} className="hidden lg:block">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Interior"
                  className="h-full w-full object-cover"
                  fallbackClassName="h-full w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}