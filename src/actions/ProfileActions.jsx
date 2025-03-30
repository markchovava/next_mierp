"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


/* ------------ AUTHENTICATED --------------- */
export async function _passwordApiAction(data) {
  const cookieStore = await cookies()
  const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/password`, {
    'method': 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  });
  revalidatePath('/admin/profile');
  revalidatePath('/client/profile');
  return await res.json();
}

export async function _profileViewApiAction() {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/profile`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _profileUpdateApiAction(data) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/profile`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/client/profile');
    return await res.json();
}