"use client"
import { GrUserSettings, GrMailOption } from 'react-icons/gr'
import { BiChevronDown, BiChevronUp, BiSolidExit } from 'react-icons/bi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
import { BsPencilFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { useState } from 'react'
import Link from 'next/link'
import { getCookie } from 'cookies-next'
import { _logoutAction } from '@/actions/AuthActions'
import { toast } from 'react-toastify'
import { reactToastifyDark } from '@/utils/reactToastify'
import { cookieAuthClient } from '@/cookies/cookieAuthClient'
import { cookieRoleClient } from '@/cookies/cookieRoleClient'
import { useRouter } from 'next/navigation'
import { cookieAdminClient } from '@/cookies/cookieAdminClient'
import { cookieSubsidiaryClient } from '@/cookies/cookieSubsidiaryClient'



export default function Header() {
  const router = useRouter();
  const authToken = getCookie('MIERP_AUTH_COOKIE')
  const { removeAuthCookie } = cookieAuthClient()
  const { removeRoleCookie } = cookieRoleClient()
  const { removeAdminCookie } = cookieAdminClient()
  const { removeSubsidiaryCookie } = cookieSubsidiaryClient()
  const [isActive, setIsActive] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });


  async function postLogout() {
      try{
      const res = await _logoutAction()
      if(res?.status == 1) {
          removeAuthCookie()
          removeRoleCookie()
          removeAdminCookie()
          removeSubsidiaryCookie()
          toast.success(res?.message, reactToastifyDark)
          router.push('/login')
          return
      } }
      catch (error) {
          console.error(`Error: ${error}`)
          console.error(`Error Message: ${error.message}`);
          console.error(`Error Response: ${error.response}`);
      } 

  }
  
 
  return (
    <div className='w-[100%] lg:h-[3.5rem] bg-white drop-shadow-lg '>
      <div className='mx-auto w-[96%] flex lg:flex-row flex-col gap-4 items-center justify-between py-4 '>
        <section className="flex items-center justify-center">
            <h4 className='font-medium'>MiERP Page</h4> 
        </section>
        <section className="">
            <ul className="flex justify-end gap-2 items-center">
              {/* MESSAGE */} 
             {/*  <li className='ml-4 relative'>
                <button
                  onClick={() => setIsActive({one: !isActive.one})}
                  className='flex justify-end gap-2 items-center cursor-pointer text-slate-800 hover:text-black'>
                  <GrMailOption className='text-lg'/>
                  {isActive.one
                    ? <BiChevronDown className='text-lg' /> 
                    : <BiChevronUp className='text-lg' /> }   
                </button>
                {isActive.one &&
                <ul className='bg-white w-[11rem] top-11 rounded-md right-0 absolute py-2 z-[200]'>
                    <li className='text-slate-800 hover:text-black px-3 transition-all ease-in-out hover:bg-slate-50'>
                        <Link href="#" className='flex justify-start gap-2 p-2 items-center text-sm'>
                        <span className='flex justify-center items-center bg-slate-800 px-1 rounded-full text-white'>0</span> 
                        Read Messages</Link></li>
                    <li className='text-slate-800 hover:text-black px-3 hover:bg-slate-50'>
                        <Link href="#" className='flex justify-start gap-2 p-2 items-center text-sm'>
                        <BsPencilFill /> Write Message</Link></li>
                </ul>
                }
              </li> */}
              {/* SETTINGS */}
              <li className='ml-4 relative '>
                <button 
                  onClick={() => setIsActive({two: !isActive.two})}
                  className='flex justify-end gap-2 items-center cursor-pointer text-slate-800 hover:text-black'>
                  <FiSettings className='text-lg'/>
                  { isActive.two 
                  ? <BiChevronDown className='text-lg' /> 
                  : <BiChevronUp className='text-lg' /> }
                </button>
                { isActive.two &&
                <ul className='bg-white w-[11rem] top-11 rounded-md right-0 absolute py-1 z-[200]'>
                    <li className='text-slate-800 hover:text-black px-3 transition-all ease-in-out hover:bg-slate-50'>
                        <Link href="/client/app-info" className='flex justify-start gap-2 p-1 items-center text-sm'>
                            <span className='flex justify-center items-center bg-slate-800 px-1 rounded-full text-white'>0</span> 
                            App Info</Link></li>
                    <li className='text-slate-800 hover:text-black px-3 transition-all ease-in-out hover:bg-slate-50'>
                        <Link href="/client/role" className='flex justify-start gap-2 p-1 items-center text-sm'>
                            <BsPencilFill /> Roles</Link></li>
                </ul>
                }
              </li>
              {/* USER */}
              <li className='ml-4 relative z-20'>
                <button 
                  onClick={() => setIsActive({three: !isActive.three})}
                  className='flex justify-end gap-2 items-center cursor-pointer text-slate-800 hover:text-black'>
                  <GrUserSettings className='text-lg'/>
                  { isActive.three 
                  ? <BiChevronDown className='text-lg' /> 
                  : <BiChevronUp className='text-lg' /> }
                </button>
                {isActive.three &&
                  <ul className='bg-white w-[15rem] top-11 rounded-md right-0 absolute py-2 z-[200]'>
                      <li className='text-slate-800 hover:text-black px-3 hover:bg-slate-50'>
                          <Link href="/client/profile" className='flex justify-start gap-2 p-1 items-center text-sm'>
                              <FaUser /> My Profile</Link></li>
                      {/* <li className='text-slate-800 hover:text-black px-3 hover:bg-slate-50'>
                          <Link href="/client/password" className='flex justify-start gap-2 p-1 items-center text-sm'>
                              <RiLockPasswordFill /> Reset Password</Link></li> */}
                      
                      <li className='text-slate-800 hover:text-black px-3 hover:bg-slate-50'>
                          {authToken ?
                          <button onClick={postLogout} className='flex justify-start gap-2 p-1 items-center text-sm'>
                              <BiSolidExit /> Sign Out
                            </button>
                            :
                          <Link href="/login" className='flex justify-start gap-2 p-1 items-center text-sm'>
                              <BiSolidExit /> Login</Link>

                          }
                        </li>
                  </ul>
                }
              </li>
            </ul>
        </section>
      </div>  
    </div>
  )
}

