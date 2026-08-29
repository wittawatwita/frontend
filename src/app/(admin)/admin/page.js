import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminHero from './admin_components/adminhero';

async function getUsers(token) {
  try {
    const res = await fetch('https://api.itdev.cmtc.ac.th/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-store'
    });
  
    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }
    
    const data = await res.json();
    return data;

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error("เกิดข้อผิดพลาดทางเครือข่าย (Network Error): ไม่สามารถเชื่อมต่อกับ Server ได้");
    } else {
      console.error("เกิดข้อผิดพลาด:", error.message);
    }
    return []; 
  }
}

export default async function UsersPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const role = cookieStore.get('user_role')?.value;

  if (!token || role !== 'admin') {
    redirect('/login');
  }

  const users = await getUsers(token);
  
  return (
    <AdminHero users={users} />
  );
}
