"use client";
import { _expenseListApiAction, _expenseStoreApiAction } from '@/actions/ExpenseActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';


const contentVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function ModalAdd({isModal, setIsModal, getData }) {
    const [data, setData] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const [errMsg, setErrMsg] = useState({});
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData() {
        if(!data.detail) {
            const message = 'Detials is required.'
            setErrMsg({detail: message});
            toast.warn(message, reactToastifyDark);
            return;
        }
        if(!data.total) {
            const message = 'Total is required.'
            setErrMsg({total: message});
            toast.warn(message, reactToastifyDark);
            return;
        }
        const formData = {
            detail: data?.detail,
            total: data?.total,
        }
        try{
            const res = await _expenseStoreApiAction(formData);
            if(res?.status == 1) {
                toast.success(res?.message, reactToastifyDark);
                await getData();
                setIsModal(false);
                setErrMsg({});
                setData({})
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
    {/* MODAL */}
    <AnimatePresence>
        {isModal && 
        <motion.section
        variants={contentVariant}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className='w-[100vw] h-[100vh] fixed top-0 left-0 z-50 overflow-y-auto'>
        <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
        <div className='w-[100%] h-[100%] absolute z-10 py-[6rem]'>
        <section className='mx-auto w-[50%] bg-white text-black p-6 rounded-2xl'>
            <div className='flex items-center justify-end'>
            <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                <IoClose className='text-2xl' />
            </button>
            </div>
            <h3 className='text-[2rem] font-light text-center mb-3'>Add Expense</h3>
            <form 
                onSubmit={() => setIsSubmit(true)} 
                action={postData}>
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
        </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
