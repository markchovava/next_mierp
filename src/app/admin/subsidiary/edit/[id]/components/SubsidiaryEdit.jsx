"use client";
import { _subsidiaryUpdateApiAction } from '@/actions/SubsidiaryActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { toast } from 'react-toastify';



export default function SubsidiaryEdit({ dbData, id}) {
    const [data, setData] = useState(dbData?.data);
    const router = useRouter();
    const [isSubmit, setIsSubmit] = useState(false)
    const [errMsg, setErrMsg] = useState({});
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
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
        const formData = new FormData()
        formData.append('name', data?.name)
        formData.append('phone', data?.phone)
        formData.append('email', data?.email)
        formData.append('address', data?.address)
        formData.append('description', data?.description)

        try{
            const res = await _subsidiaryUpdateApiAction(formData, id);
            console.log('res', res)
            if(res?.status == 1) {
                setErrMsg({});
                toast.success(res?.message, reactToastifyDark);
                setIsSubmit(false)
                router.push(`/admin/subsidiary/${id}`)
                return;
            }
            } catch (error) {
                console.error(`Error: ${error}`);
                setIsSubmit(false)
        }
    }


  return (
    <>
    {/* LINK */}
    <section className='my-4 mx-auto w-[96%] flex items-center justify-end '>
        <Link href={`/admin/subsidiary/${id}`} 
            className='px-4 py-1 link__second'>
            View
        </Link>
    </section>

    <section className='mx-auto w-[96%] bg-white drop-shadow-md px-6 py-6 mb-[4rem]'>
    
        <form action={postData} onSubmit={() => setIsSubmit(true)} > 
            <h3 className='font-light text-[2.2rem] mb-4 border-b border-slate-300'>
                Edit
            </h3>       
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
                    {errMsg?.name && 
                        <p className='text-red-600 text-sm'>{errMsg?.name}</p>}
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
                    {errMsg?.email && 
                        <p className='text-red-600 text-sm'>{errMsg?.email}</p>}
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
                {errMsg?.phone && 
                    <p className='text-red-600 text-sm'>{errMsg?.phone}</p>}
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
                <p className='mb-2'>Description:</p>
                <textarea 
                name='description'
                value={data?.description}
                onChange={handleInput}
                placeholder='Enter the Description here...'
                className='h-[10rem] transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'></textarea>
            </div>
    
            {/* BUTTON */}
            <div className='w-[100%] flex items-center justify-center mt-4 mb-8'>
                <button type='submit' className='group flex items-center justify-center gap-2 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
                    {isSubmit ? 'Processing' : 
                    <>
                    Submit <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                    </>}
                </button>
            </div>
        </form>


    </section>
    </>
  )
}
