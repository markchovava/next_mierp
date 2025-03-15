"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function _purchaseItemByPurchaseApiAction(id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/purchase-items-by-purchase/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function _purchaseItemDeleteApiAction(id) {
    const cookieStore = await cookies()
    const authToken = await cookieStore.get('MIERP_AUTH_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${baseURL}api/purchase-item/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}