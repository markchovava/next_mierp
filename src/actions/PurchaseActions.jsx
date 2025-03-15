"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


/* AUTHENTICATED */
export async function _purchaseBySubsidiaryApiAction() {
  const cookieStore = await cookies()
  const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/purchase-by-subsidiary`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  }); 
  return await res.json();
}

export async function _purchaseSearchBySubsidiaryApiAction(search) {
  const cookieStore = await cookies()
  const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/purchase-search-by-subsidiary/${search}`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  }); 
  return await res.json();
}

export async function _purchaseListApiAction() {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/purchase`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _purchasePaginationApiAction(url) {
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

export async function _purchaseSearchApiAction(search) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/purchase-search/${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _purchaseViewApiAction(id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/purchase/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _purchaseStoreApiAction(data) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/purchase`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/purchase');
    revalidatePath('/client');
    revalidatePath('/admin');
    return await res.json();
}

export async function _purchaseUpdateApiAction(data, id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/purchase/${id}`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath(`/admin/purchase/${id}`);
    revalidatePath('/admin/purchase');
    revalidatePath('/client');
    revalidatePath('/admin');
    return await res.json();
}

export async function _purchaseDeleteApiAction(id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/purchase/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/purchase');
    revalidatePath('/client');
    revalidatePath('/admin');
    return await res.json();
}