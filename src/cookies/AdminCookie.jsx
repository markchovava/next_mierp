"use server"
import ClientRedirect from "@/app/_components/ClientRedirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export async function _checkAdmin() {
    const cookieStore = await cookies();
    const adminCookie = await cookieStore.get('MIERP_ADMIN_COOKIE');
    if(!adminCookie?.value){ redirect('/login') }
    if(adminCookie?.value != 'Yes'){ return <ClientRedirect /> }
}