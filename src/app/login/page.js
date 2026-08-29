"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const LOGIN_URL = "https://api.itdev.cmtc.ac.th/auth/login";

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
        if (result.token) {
          localStorage.setItem("token", result.token);
        }

        if (result.user) {
          localStorage.setItem("user", JSON.stringify(result.user));
        }

        await Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          timer: 1200,
          showConfirmButton: false,
          confirmButtonColor: "#8C837A",
        });

        router.push("/users");
        return;
      }

      if (response.status === 401) {
        await Swal.fire({
          icon: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text: result.message || "Username หรือรหัสผ่านไม่ถูกต้อง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8C837A",
        });
      } else if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "กรุณาตรวจสอบข้อมูลที่กรอก",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8C837A",
        });
      } else if (response.status >= 500) {
        await Swal.fire({
          icon: "error",
          title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || "กรุณาลองใหม่ภายหลัง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8C837A",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: `เข้าสู่ระบบไม่สำเร็จ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8C837A",
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8C837A",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#C8C2BC" }}
    >
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 text-center">
          <div
            className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center shadow-inner"
            style={{ backgroundColor: "#EBE8E5", color: "#5C5650" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#4A4540]">เข้าสู่ระบบ</h1>
          <p className="text-sm text-[#8C837A] mt-1">
            กรุณากรอก Username และรหัสผ่านของคุณ
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-8 pt-4 space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#5C5650] mb-1.5">
              Username
            </label>
            <input
              type="text"
              name="txt_username"
              value={form.txt_username}
              onChange={handleChange}
              autoComplete="username"
              required
              className="w-full bg-[#F7F6F5] text-[#3B3733] border border-[#DDD9D5] rounded-xl px-4 py-2.5 transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#A8A097] focus:bg-white placeholder-[#B5B0AA]"
              placeholder="กรอก username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5C5650] mb-1.5">
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
                className="w-full bg-[#F7F6F5] text-[#3B3733] border border-[#DDD9D5] rounded-xl px-4 py-2.5 pr-12 transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#A8A097] focus:bg-white placeholder-[#B5B0AA]"
                placeholder="กรอก password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#8C837A] hover:text-[#5C5650] transition"
              >
                {showPassword ? "ซ่อน" : "แสดง"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 active:scale-[0.99]"
            style={{ backgroundColor: "#736D66" }}
          >
            {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
          </button>

          <p className="text-center text-sm text-[#736D66] pt-2">
            ยังไม่มีบัญชี?{" "}
            <button
              type="button"
              onClick={() => router.push("/register")}
              className="font-semibold text-[#4A4540] hover:underline"
            >
              สมัครสมาชิก
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}