"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


/* AUTHENTICATED */
export async function _subsidiaryListAllApiAction() {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/subsidiary-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _subsidiaryListApiAction() {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/subsidiary`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _subsidiaryPaginationApiAction(url) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(url, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}


export async function _subsidiarySearchApiAction(search) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/subsidiary-search/${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _subsidiaryViewApiAction(id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/subsidiary/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _subsidiaryStoreApiAction(data) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/subsidiary`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/subsidiary');
    return await res.json();
}

export async function _subsidiaryUpdateApiAction(data, id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/subsidiary/${id}`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/subsidiary');
    revalidatePath(`/admin/subsidiary/${id}`);
    return await res.json();
}

export async function _subsidiaryDeleteApiAction(id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/subsidiary/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/subsidiary');
    return await res.json();
}