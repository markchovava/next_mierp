"use client";
import {setCookie, deleteCookie } from 'cookies-next';


const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const cookieAdminClient = () => {
    const setAdminCookie = (token) => {
        setCookie('MIERP_ADMIN_COOKIE', token, { maxAge: cookieDuration });
    }
   
    const removeAdminCookie = () => {
        deleteCookie('MIERP_ADMIN_COOKIE');
    }

    return {
        setAdminCookie, 
        removeAdminCookie,
    }
  }