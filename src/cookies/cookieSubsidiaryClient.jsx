"use client";
import {setCookie, deleteCookie } from 'cookies-next';


const cookieDuration = 60 * 60 * 24 * 30 * 30;
export const cookieSubsidiaryClient = () => {
    const setSubsidiaryCookie = (token) => {
        setCookie('MIERP_SUBSIDIARY_COOKIE', token, { maxAge: cookieDuration });
    }
   
    const removeSubsidiaryCookie = () => {
        deleteCookie('MIERP_SUBSIDIARY_COOKIE');
    }

    return {
        setSubsidiaryCookie, 
        removeSubsidiaryCookie,
    }
  }