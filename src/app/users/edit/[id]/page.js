"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const API_URL = "https://6a7e6fde3183f5fd884a1536.mockapi.io/api/Fullname";

export default function RegisterPage() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // ใช้ State เดียวสำหรับจัดการข้อมูลฟอร์ม
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  useEffect(() => {
    if (id) fetchUser();
  }, [id]);

  const fetchUser = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();

      setForm({
        txt_firstname: data.firstname ?? "",
        txt_lastname: data.lastname ?? "",
        txt_username: data.username ?? "",
        txt_password: "", // ไม่ดึงรหัสผ่านเดิมกลับมาแสดง
      });
    } catch (error) {
      setIsError(true);
      await Swal.fire({ icon: "warning", title: "ไม่สามารถโหลดข้อมูลได้" });
    } finally {
      setIsLoading(false);
    }
  };

  // แก้ไข: เปลี่ยนมาอัปเดต setForm ให้ถูกต้อง
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!form.txt_firstname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุชื่อ",
        text: "กรุณากรอกชื่อ",
        confirmButtonText: "ตกลง",
      });
      return false;
    }

    if (!form.txt_lastname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุนามสกุล",
        text: "กรุณากรอกนามสกุล",
        confirmButtonText: "ตกลง",
      });
      return false;
    }

    if (!form.txt_username.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุ Username",
        text: "กรุณากรอก Username",
        confirmButtonText: "ตกลง",
      });
      return false;
    }

    return true;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSaving(true);

      const payload = {
        firstname: form.txt_firstname,
        lastname: form.txt_lastname,
        username: form.txt_username,
      };
      
      // ส่ง password เฉพาะเมื่อมีการพิมพ์ใหม่
      if (form.txt_password) {
        payload.password = form.txt_password;
      }

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "บันทึกสำเร็จ!",
          text: "ปรับปรุงข้อมูลผู้ใช้เรียบร้อยแล้ว",
          confirmButtonColor: "#2E75B6",
        });

        router.push("/users");
        return;
      }

      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#fecc00",
        });
      } else if (response.status >= 500) {
        await Swal.fire({
          icon: "error",
          title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#fe0505",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: `บันทึกไม่สำเร็จ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#fc006dcc",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <p className="p-6">กำลังโหลดข้อมูล...</p>;
  if (isError) return <p className="p-6">เกิดข้อผิดพลาดในการโหลดข้อมูล</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <form onSubmit={handleUpdate} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>ชื่อ</label>
            <input
              type="text"
              name="txt_firstname"
              value={form.txt_firstname}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>นามสกุล</label>
            <input
              type="text"
              name="txt_lastname"
              value={form.txt_lastname}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="txt_username"
              value={form.txt_username}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>รหัสผ่าน (เว้นว่างไว้หากไม่ต้องการเปลี่ยน)</label>
            <input
              type="password"
              name="txt_password"
              value={form.txt_password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <button type="submit" disabled={isSaving} style={styles.button}>
            {isSaving ? "กำลังบันทึก..." : "อัปเดตข้อมูล"}
          </button>
          <button type="button" onClick={() => router.push("/users")} style={{ ...styles.button, backgroundColor: '#8b8175' }}>
            ยกเลิก
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eae4d9',
    padding: '32px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  card: {
    backgroundColor: '#f4efe6',
    padding: '48px 40px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
    width: '100%',
    maxWidth: '520px',
    border: '1px solid #e8e2d5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#4a443c',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #dcd5c7',
    backgroundColor: '#ffffff',
    color: '#2d2822',
    fontSize: '15px',
    outline: 'none',
  },
  button: {
    marginTop: '8px',
    padding: '14px',
    backgroundColor: '#5a5043',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};