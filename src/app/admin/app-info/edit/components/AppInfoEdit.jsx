"use client";
import { _appInfoStoreApiAction } from '@/actions/AppInfoActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { toast } from 'react-toastify';



export default function AppInfoEdit({ dbData }) {
  const router = useRouter();
  const [data, setData] = useState(dbData?.data);
  const [isSubmit, setIsSubmit] = useState(false)
  const [errMsg, setErrMsg] = useState({})
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  async function postData () {
    if(!data?.name){
      const message = 'Name is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({name: message})
      setIsSubmit(false)
      return
    }
    if(!data?.phone){
      const message = 'Phone is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({phone: message})
      setIsSubmit(false)
      return
    }
    if(!data?.address){
      const message = 'Address is required.'
      toast.warn(message, reactToastifyDark)
      setErrMsg({address: message})
      setIsSubmit(false)
      return
    }

    const formData = new FormData()
    formData.append('name', data?.name)
    formData.append('phone', data?.phone)
    formData.append('email', data?.email)
    formData.append('address', data?.address)
    formData.append('description', data?.description)

    try{
      const res = await _appInfoStoreApiAction(formData)
      console.log('res', res)
      if(res.status == 1) {
          toast.success(res?.message, reactToastifyDark);
          setIsSubmit(false);
          setErrMsg({});
          router.push('/admin/app-info')
          return
      }
      toast.warn("Something went wrong, try again.", reactToastifyDark);
      setIsSubmit(false);
      return;
  } catch (error) {
      console.error(`Error: ${error}`);
      setIsSubmit(false); 
  }

}
  
  
  return (
    <>
    {/* LINK */}
    <section className='mx-auto w-[96%] flex items-center justify-end'>
        <Link href='/admin/app-info' 
        className='px-4 py-1 my-4 link__second'>
        View
      </Link>
    </section>

    <section className='mb-[4rem] mx-auto w-[96%] bg-white drop-shadow-md px-6 py-6'>
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
        </div>
        {/*  */}
        <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
          <div className='w-[100%]'>
            <label className='font-lg font-light block pb-1'>Phone:</label>
            <input 
              type='text' 
              name='phone'
              value={data?.phone} 
              onChange={handleInput}
              placeholder='Enter Name here...' 
              className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
          </div>
          <div className='w-[100%]'>
            <label className='font-lg font-light block pb-1'>Email:</label>
            <input 
              type='text' 
              name='email' 
              value={data?.email}
              onChange={handleInput}
              placeholder='Enter Name here...' 
              className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
          </div>
        </div>
        {/*  */}
        <div className='w-[100%] mb-4'>
          <label className='font-lg font-light block pb-1'>Address:</label>
          <input 
          type='text' 
          name='address'
          value={data?.address} 
          onChange={handleInput}
          placeholder='Enter Address here...' 
          className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
        </div>
        {/*  */}
        <div className='w-[100%] mb-6'>
          <label className='font-lg font-light block pb-1'>Description:</label>
          <textarea 
            name='description'
            value={data?.description} 
            onChange={handleInput}
            placeholder='Enter Description here...' 
            className='h-[10rem] transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'></textarea>
        </div>
        {/*  */}
        <div className='w-[100%] flex items-center justify-center mb-4'>
          <button type='submit' className='group flex items-center justify-center gap-1 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
            {isSubmit ? 
            'Processing'
            :
            <>
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
