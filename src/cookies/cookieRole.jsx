import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

 
export const cookieRole = () => {
    const getAuthCookie = () => {
        const authCookie = getCookie('MIERP_ROLE_COOKIE', { cookies });
        return authCookie;
    }
   
    return {
        getAuthCookie,
    }
  }



