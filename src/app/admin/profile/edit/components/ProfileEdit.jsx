"use client";
import { baseURL } from '@/api/baseURL';
import Link from 'next/link'
import React, { useState, useTransition } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'



export default function ProfileEdit({dbData}) {
    const [errMsg, setErrMsg] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const [data, setData] = useState(dbData?.data);
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }


    async function postData() {
        if(!data.name) {
            const message = 'Name is required.'
            setErrMsg({name: message});
            toast.warn(message, reactToastifyDark);
            setIsSubmit(false)
            return;
        }
        if(!data.email) {
            const message = 'Email is required.'
            setErrMsg({email: message});
            toast.warn(message, reactToastifyDark);
            setIsSubmit(false)
            return;
        }
        if(!data.phone) {
            const message = 'Phone Number is required.'
            setErrMsg({phone: message});
            toast.warn(message, reactToastifyDark);
            setIsSubmit(false)
            return;
        }
        const formData = {
            name: data?.name,
            address: data?.address,
            phone: data?.phone,
            email: data?.email,
            position: data?.position,
        }

        try{
            const res = await _profileUpdateApiAction(formData);
            console.log('res', res)
            if(res?.status == 1) {
                setErrMsg({});
                toast.success(res?.message, reactToastifyDark);
                router.push(`/client/profile`)
                return;
            }
            } catch (error) {
                console.error(`Error: ${error}`);
        }
    }




  return (
    <>
    {/* LINK */}
    <section className='mx-auto w-[96%] flex items-center justify-end'>
        <Link href='/admin/profile' 
        className='px-4 my-4 py-1 link__second'>
          View
        </Link>
    </section>

    <section className=' mx-auto w-[96%] bg-white drop-shadow-md px-6 py-4 mb-[4rem]'>
        <form action={postData} onSubmit={() => setIsSubmit(true)} >
           
            {/*  */}
            <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Name:</p>
                    <input 
                    type='text' 
                    name='name'
                    onChange={handleInput}
                    value={data?.name}
                    placeholder='Enter the Name here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    { errMsg?.name && 
                        <p className='text-sm text-red-600'>{errMsg?.name}</p> }
                </div>
                <div className='w-[100%] font-light'>
                    <p className='mb-2'>Email:</p>
                    <input 
                    type='text' 
                    name='email'
                    value={data?.email}
                    onChange={handleInput}
                    placeholder='Enter the Email here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    { errMsg?.email && 
                        <p className='text-sm text-red-600'>{errMsg?.email}</p> }
                </div>
            </div>
           
            {/*  */}
            <div className='w-[100%] font-light mb-4'>
                <p className='mb-2'>Phone:</p>
                <input 
                type='text' 
                name='phone'
                value={data?.phone}
                onChange={handleInput}
                placeholder='Enter the Phone here...'
                className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                { errMsg?.phone && 
                        <p className='text-sm text-red-600'>{errMsg?.phone}</p> }
            </div>
            {/*  */}
            <div className='w-[100%] font-light mb-4'>
                <p className='mb-2'>Address:</p>
                <input 
                type='text' 
                name='address'
                value={data?.address}
                onChange={handleInput}
                placeholder='Enter the Address here...'
                className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
            </div>
            {/*  */}
            <div className='w-[100%] font-light mb-4'>
                <p className='mb-2'>Position:</p>
                <input 
                type='text' 
                name='position'
                value={data?.position}
                onChange={handleInput}
                placeholder='Enter the Address here...'
                className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
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
