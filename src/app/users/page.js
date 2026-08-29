"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);  //กำหนด state เช็ค login

useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    setIsAuth(true);
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setIsError(true);
      await Swal.fire({ icon: "warning", title: "ไม่สามารถโหลดข้อมูลได้" });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f0eb]">
        <p className="text-lg text-slate-600 font-medium animate-pulse">
          กำลังโหลดข้อมูล...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f0eb]">
        <p className="text-lg text-red-500 font-medium">
          เกิดข้อผิดพลาดในการโหลดข้อมูล
        </p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f0eb]">
        <p className="text-lg text-slate-500 font-medium">
          ยังไม่มีข้อมูลสมาชิกในระบบ
        </p>
      </div>
    );
  }

  const handleDelete = async (id) => {
    const user = users.find((u) => u.id === id);
    const result = await Swal.fire({
      icon: "warning",
      title: "ยืนยันการลบข้อมูล",
      html: user
        ? `ต้องการลบ <b>${user.firstname} ${user.lastname}</b> ใช่หรือไม่?<br>เมื่อลบแล้วจะไม่สามารถกู้คืนได้`
        : "เมื่อลบแล้วจะไม่สามารถกู้คืนได้",
      showCancelButton: true,
      confirmButtonText: "ลบเลย",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      setDeletingId(id);

      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || `Status ${response.status}`);
      }

      setUsers((prev) => prev.filter((u) => u.id !== id));

      await Swal.fire({
        icon: "success",
        title: "ลบข้อมูลเรียบร้อยแล้ว",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "ลบข้อมูลไม่สำเร็จ",
        text: error.message,
      });
    } finally {
      setDeletingId(null);
    }
  };

  if (!isAuth) return null;  //เช้คค่า login

  return (
    <div className="min-h-screen bg-[#f5f0eb] p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              รายชื่อสมาชิก
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              จำนวนสมาชิกทั้งหมด {users.length} รายการ
            </p>
          </div>
        </div>

        {/* User Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user, index) => (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-5">
                {/* Header การ์ด: Badge แสดง ลำดับ/ID */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full border border-indigo-100">
                    ลำดับที่ #{index + 1}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    ID: {user.id}
                  </span>
                </div>

                {/* ข้อมูลสมาชิก */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                      ชื่อ - นามสกุล
                    </p>
                    <p className="text-base font-semibold text-slate-800 truncate">
                      {user.firstname} {user.lastname}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                      Username
                    </p>
                    <p className="text-sm font-medium text-slate-600 truncate bg-slate-50 p-2 rounded border border-slate-100">
                      @{user.username}
                    </p>
                  </div>
                </div>
              </div>

              {/* ปุ่มจัดการด้านล่างการ์ด */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => router.push(`/users/edit/${user.id}`)}
                  className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors duration-150 shadow-sm flex items-center justify-center gap-1"
                >
                  แก้ไข
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="w-full py-2 px-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-sm font-medium transition-colors duration-150 shadow-sm flex items-center justify-center gap-1"
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}