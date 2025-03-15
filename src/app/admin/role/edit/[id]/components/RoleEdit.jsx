"use client";
import { _roleUpdateApiAction } from '@/actions/RoleActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { toast } from 'react-toastify';



export default function RoleEdit({ id, dbData }) {
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
    if(!data.level) {
        const message = 'Role Level is required.'
        setErrMsg({level: message});
        toast.warn(message, reactToastifyDark);
        setIsSubmit(false)
        return;
    }
  
    const formData = new FormData()
    formData.append('name', data?.name)
    formData.append('level', data?.level)
    try{
        const res = await _roleUpdateApiAction(formData, id);
        console.log('res', res)
        if(res?.status == 1) {
            setErrMsg({});
            toast.success(res?.message, reactToastifyDark);
            router.push(`/admin/role/${id}`)
            setIsSubmit(false)
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
      <section className='mx-auto w-[96%] flex items-center justify-end py-6'>
        <Link href={`/admin/role/${id}`} 
        className='px-4 py-2 link__second'>
          View
        </Link>
      </section>
    <section className='mx-auto w-[96%] bg-white drop-shadow-md px-6 pt-8 pb-6'>
      <form action={postData} onSubmit={() => setIsSubmit(true)}>
        {/*  */}
        <div className='w-[100%] mb-4'>
          <label className='font-lg font-light block pb-1'>Name:</label>
          <input 
            type='text' 
            name='name' 
            onChange={handleInput}
            value={data?.name}
            placeholder='Enter Name here...' 
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
          {errMsg?.name &&
          <div className='text-red-500 text-sm'>{errMsg?.name}</div>
          }
        </div>

        {/*  */}
        <div className='w-[100%] mb-6'>
          <label className='font-lg font-light block pb-1'>Level:</label>
          <select 
            name='level'
            onChange={handleInput} 
            value={data?.level}
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'>
            <option value=''>Select an option.</option>
            {[...Array(4)].map((i, key) => (
            <option value={key+1} selected={data?.level == (key+1) && 'selected'}>{key+1}</option>
            ))}
          </select>
          {errMsg?.level &&
          <div className='text-red-500 text-sm'>{errMsg?.level}</div>
          }
        </div>
        {/*  */}
        <div className='w-[100%] flex items-center justify-center mb-4'>
          <button type='submit' className='group flex items-center justify-center gap-2 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
            {isSubmit 
            ? 'Processing'
            : <>
            Submit <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
            </>
            }
          </button>
        </div>
      </form>
    </section>
    </>
  )
}
