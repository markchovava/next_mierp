"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


/* AUTHENTICATED */
export async function _productBySubsidiaryApiAction() {
  const cookieStore = await cookies()
  const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/product-by-subsidiary`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  }); 
  return await res.json();
}

export async function _productSearchBySubsidiaryApiAction() {
  const cookieStore = await cookies()
  const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
  if(!authToken?.value){ redirect('/login'); }
  const res = await fetch(`${baseURL}api/product-search-by-subsidiary/${search}`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  }); 
  return await res.json();
}

export async function _productListApiAction() {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/product`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _productPaginationApiAction(url) {
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

export async function _productByAuthSubsidiaryApiAction() {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/product-by-auth-subsidiary`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _productSearchApiAction(search) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/product-search/${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _productViewApiAction(id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/product/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _productStoreApiAction(data) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/product`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/product');
    revalidatePath('/client');
    revalidatePath('/admin');
    return await res.json();
}

export async function _productUpdateApiAction(data, id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/product/${id}`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/product');
    revalidatePath(`/admin/product/${id}`);
    revalidatePath('/client');
    revalidatePath('/admin');
    return await res.json();
}

export async function _productDeleteApiAction(id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/product/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/product');
    revalidatePath('/client');
    revalidatePath('/admin');
    return await res.json();
}