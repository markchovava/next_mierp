import { checkAuthAction } from "@/actions/AuthActions";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

 
export const cookieAuth = () => {
    
    const getAuthCookie = async () => {
        const authCookie = getCookie('MIERP_AUTH_COOKIE', { cookies });
        return authCookie;
    }
    
    const checkAuthCookie = async () => {
        const authCookie = getCookie('MIERP_AUTH_COOKIE', { cookies });
        await checkAuthAction(authCookie)
    }
   
    return {
        getAuthCookie,
        checkAuthCookie,
    }
  }
