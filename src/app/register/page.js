"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // 1. นำเข้า useRouter
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ScrollReveal, TextReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import AnimatedBackground from "@/components/AnimatedBackground";
import Swal from "sweetalert2";

export const dynamic = "force-dynamic";

export default function Register() {
  const router = useRouter(); // 2. ประกาศเรียกใช้งาน useRouter
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      await Swal.fire({
        icon: 'warning',
        title: 'ข้อมูลไม่ครบ',
        text: 'กรุณากรอกข้อมูลให้ครบทุกช่อง',
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#dcdc26'
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://6a7e6fde3183f5fd884a1536.mockapi.io/api/Fullname', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          username: formData.email,
          password: formData.password
        })
      });

      let result = {};
      try {
        result = await response.json();
      } catch (e) {
        result = { message: "เซิร์ฟเวอร์ตอบกลับไม่ใช่ JSON" };
      }

      if (response.ok) {
        await Swal.fire({
          icon: 'success',
          title: 'บันทึกข้อมูลสำเร็จ',
          text: 'คุณได้ลงทะเบียนแล้ว สามารถเข้าสู่ระบบได้ทันที',
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#2563eb"
        });

        router.push("/login"); // 3. Redirect ไปยังหน้า login ทันทีเมื่อผู้ใช้กดปุ่มตกลง
      } else if (response.status === 400) {
        await Swal.fire({
          icon: 'warning',
          title: 'ข้อมูลไม่ถูกต้อง',
          text: result.message || "ผู้ใช้กรอกข้อมูลไม่ครบหรือรูปแบบผิด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#dcdc26"
        });
      } else if (response.status >= 500) {
        await Swal.fire({
          icon: 'error',
          title: `เกิดข้อผิดพลาดทางเซิร์ฟเวอร์`,
          text: result.message || "เซิร์ฟเวอร์หรือฐานข้อมูลขัดข้อง กรุณาลองใหม่อีกครั้ง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#dc2626"
        });
      } else {
        await Swal.fire({
          icon: 'error',
          title: `เกิดข้อผิดพลาดทางเครือข่าย`,
          text: result.message || "ไม่ทราบสาเหตุ กรุณาลองใหม่อีกครั้ง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#dc2626"
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
        text: 'กรุณาตรวจสอบอินเทอร์เน็ตและลองใหม่อีกครั้ง',
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#dc2626"
      });
    } finally {
      setLoading(false);
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
              <p className="font-mono text-xs uppercase tracking-widest text-cream/60 mb-4">Join Us</p>
              <TextReveal as="h1" className="font-serif text-3xl md:text-5xl text-cream mb-6">
                Create your account
              </TextReveal>
              <p className="text-cream/80 mb-8">
                Start your journey with Lumina. Save favorites, track orders, and get early access to new collections.
              </p>
              <form className="space-y-6" onSubmit={handleRegisterSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream/60 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border-b border-cream/20 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/40 transition-colors"
                    placeholder="At least 8 characters"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm text-cream/80">
                    <input type="checkbox" className="accent-white" />
                    I agree to the Terms and Privacy Policy
                  </label>
                </div>
                <button type="submit" className="btn-white pill-btn w-full justify-center" disabled={loading}>
                  <span>{loading ? "Submitting..." : "Create Account"}</span>
                </button>
              </form>

              {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

              <p className="text-sm text-cream/60 mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-cream font-medium hover:underline">
                  Log in
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