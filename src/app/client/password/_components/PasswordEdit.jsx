"use client";
import { _passwordApiAction } from '@/actions/ProfileActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { toast } from 'react-toastify';



export default function PasswordEdit() {
    const router = useRouter();
    const [errMsg, setErrMsg] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const [data, setData] = useState({});
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    async function postData() {
        if(!data.password) {
            const message = 'Password is required.'
            setErrMsg({password: message});
            toast.warn(message, reactToastifyDark);
            setIsSubmit(false)
            return;
        }
        if(!data.password_confirm) {
            const message = 'Pssword Confirmation is required.'
            setErrMsg({password_confirm: message});
            toast.warn(message, reactToastifyDark);
            setIsSubmit(false)
            return;
        }
        if(data.password != data.password_confirm) {
            const message = 'Password does not match'
            setErrMsg({password_confirm: message});
            toast.warn(message, reactToastifyDark);
            setIsSubmit(false)
            return;
        }
        const formData = {
            password: data?.password,
        }
        
        try{
            const res = await _passwordApiAction(formData);
            console.log('res', res)
            if(res?.status == 1) {
                setErrMsg({});
                toast.success(res?.message, reactToastifyDark);
                router.push(`/client/profile`);
                setIsSubmit(false);
                return;
            }
            } catch (error) {
                console.error(`Error: ${error}`);
                setIsSubmit(false);
        }
    }




  return (
    <>
    {/* LINK */}
    <section className='mx-auto w-[96%] flex items-center justify-end'>
        <Link href='/client/profile' 
        className='px-4 my-4 py-2 link__second'>
          View
        </Link>
    </section>

    <section className=' mx-auto w-[96%] bg-white drop-shadow-md px-6 py-4 mb-[4rem]'>
        <form action={postData} onSubmit={() => setIsSubmit(true)} >

            {/* TITLE */}
            <div className='w-[100%] mb-6'>
                <h3 className='font-light text-[2rem]'>Update Password</h3>
            </div>
           
            {/*  */}
            <div className='w-[100%] mb-6 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Password:</p>
                    <input 
                    type='password' 
                    name='password'
                    onChange={handleInput}
                    value={data?.password}
                    placeholder='Enter the Password here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    { errMsg?.password && 
                        <p className='text-sm text-red-600'>{errMsg?.password}</p> }
                </div>
                <div className='w-[100%] font-light'>
                    <p className='mb-2'>Confirm Password:</p>
                    <input 
                    type='password' 
                    name='password_confirm'
                    value={data?.password_confirm}
                    onChange={handleInput}
                    placeholder='Enter the Password Confirmation here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    { errMsg?.password_confirm && 
                        <p className='text-sm text-red-600'>{errMsg?.password_confirm}</p> }
                </div>
            </div>   
    
            {/* BUTTON */}
            <div className='w-[100%] flex items-center justify-center mt-6 mb-8'>
                <button type='submit' className='group flex items-center justify-center gap-2 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
                    { isSubmit 
                    ? 'Processing' 
                    : <>
                    Submit <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                    </> }
                </button>
            </div>
        </form>

    </section>
    </>
  )
}
