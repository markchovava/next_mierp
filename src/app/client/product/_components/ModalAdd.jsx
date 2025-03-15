"use client";
import { _productStoreApiAction } from '@/actions/ProductActions';
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

export default function ModalAdd({ isModal, setIsModal, getData }) {
    const [data, setData] = useState({
            name: '',
            price: null, 
            quantity: null, 
            description: '', 
    });
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
        if(!data.price) {
            const message = 'Price is required.'
            setErrMsg({price: message});
            toast.warn(message, reactToastifyDark);
            setIsSubmit(false)
            return;
        }

        const formData = {
            name: data?.name,
            price: data?.price, 
            quantity: data?.quantity, 
            description: data?.description, 
        }

        try{
            const res = await _productStoreApiAction(formData);
            //console.log('res', res)
            if(res.status == 1) {
                await getData();
                setIsModal(false);
                setData({});
                toast.success(res?.message, reactToastifyDark);
                setIsSubmit(false)
                setErrMsg({});
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
        className='w-[100vw] h-[100vh] fixed top-0 left-0 z-50 overflow-hidden'>
        <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
        <div className='w-[100%] h-[100%]  absolute z-10 overflow-auto scroll__width py-[6rem]'>
         {/*  */}   
        <section className='mx-auto w-[70%] h-auto bg-white text-black p-6 rounded-2xl'>
            <div className='flex items-center justify-end'>
                <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
            </div>
            <h3 className='text-[2.2rem] font-light text-center mb-3'>Add Product</h3>
            
            <form action={postData} onSubmit={() => setIsSubmit(true)} >        
                {/*  */}
                <div className='w-[100%] mb-4'>
                    <p className='mb-2 font-light'>Name:</p>
                    <input 
                    type='text' 
                    name='name'
                    onChange={handleInput}
                    value={data?.name}
                    placeholder='Enter the Name here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>        
                {/*  */}
                <div className='w-[100%] font-light mb-4'>
                    <p className='mb-2'>Price:</p>
                    <input 
                    type='number' 
                    name='price'
                    value={data?.price}
                    onChange={handleInput}
                    placeholder='Enter the Phone here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                {/*  */}
                <div className='w-[100%] font-light mb-4'>
                    <p className='mb-2'>Quantity:</p>
                    <input 
                    type='number' 
                    name='quantity'
                    value={data?.quantity}
                    onChange={handleInput}
                    placeholder='Enter the Quantity here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                {/*  */}
                <div className='w-[100%] font-light mb-4'>
                    <p className='mb-2'>Description:</p>
                    <textarea 
                    name='description'
                    value={data?.description}
                    onChange={handleInput}
                    placeholder='Enter the Address here...'
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
        </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
