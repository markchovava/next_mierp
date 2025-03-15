"use client";
import { _expenseUpdateApiAction } from '@/actions/ExpenseActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { toast } from 'react-toastify';



export default function ExpenseEdit({ id, dbData }) {
    const router = useRouter();
    const [data, setData] = useState(dbData?.data);
    const [isSubmit, setIsSubmit] = useState(false)
    const [errMsg, setErrMsg] = useState({});
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

  async function postData() {
    if(!data.detail) {
        const message = 'Detail is required.'
        setErrMsg({detail: message});
        toast.warn(message, reactToastifyDark);
        setIsSubmit(false)
        return;
    }
    if(!data.total) {
        const message = 'Total Amount is required.'
        setErrMsg({total: message});
        toast.warn(message, reactToastifyDark);
        setIsSubmit(false)
        return;
    }
    const formData = {
        detail: data?.detail,
        total: data?.total,
    }
    try{
      const res = await _expenseUpdateApiAction(formData, id);
      console.log('res', res)
      if(res?.status == 1) {
          setErrMsg({});
          toast.success(res?.message, reactToastifyDark);
          setIsSubmit(false)
          router.push(`/client/expense/${id}`)
          return;
      }
      setIsSubmit(false)
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsSubmit(false)
    }
  }


  return (
    <>
      {/* LINK */}
      <section className='mx-auto w-[96%] flex items-center justify-end py-6'>
        <Link href={`/client/expense/${id}`} 
        className='px-4 py-1 link__second'>
          View
        </Link>
      </section>
    <section className='mx-auto w-[96%] bg-white drop-shadow-md px-6 pt-8 pb-6'>
       <form 
          onSubmit={() => setIsSubmit(true)} 
          action={postData}>

        <div className='w-[100%] mb-4'>
            <h3 className='font-light text-[2.2rem] border-b border-gray-300'>
              Edit
            </h3>
        </div>
          {/* NAME */}
          <div className='w-[100%] mb-4'>
              <p className='mb-2'>Details:</p>
              <input 
              type='text' 
              onChange={handleInput}
              name='detail'
              value={data?.detail}
              placeholder='Enter the Detail here...'
              className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
              {errMsg?.detail &&
              <div className='text-red-500 text-sm'>{errMsg?.detail}</div>
              }
          </div>
          {/* TOTAL */}
          <div className='w-[100%] mb-4'>
              <p className='mb-2'>Total:</p>
              <input 
              type='number' 
              onChange={handleInput}
              name='total'
              value={data?.total}
              placeholder='Enter the Total here...'
              className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
              {errMsg?.name &&
              <div className='text-red-500 text-sm'>{errMsg?.name}</div>
              }
          </div>
          {/* BUTTON */}
          <div className='w-[100%] flex items-center justify-center mt-4'>
          <button type='submit' className='group flex items-center justify-center gap-1 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
              {isSubmit ? 'Processing'
              : <> Submit 
              <FaArrowRightLong 
              className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
              </> 
              }
          </button>
          </div>
      </form>
    </section>
    </>
  )
}
