"use client";
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import generateUniqueId from '@/utils/generateUniqueId';
import { reactToastifyDark } from '@/utils/reactToastify';
import { toast } from 'react-toastify';
import { _purchaseStoreApiAction } from '@/actions/PurchaseActions';

const contentVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function ModalAdd({isModal, setIsModal, getData, products}) {
    const [list, setList] = useState([]);
    const [data, setData] = useState({
        supplier_name: '',
        supplier_phone: '',
        supplier_address: '',
        supplier_email: '',
        quantity: null,
        total: null,
        purchase_items: [],
    });
    const [errMsg, setErrMsg] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    
    /* Handle Details */
    const handleAddList = (a) => {
        if(data?.product) {
            const obj = {...a,
                uid: generateUniqueId(),
            }
            setList([ obj, ...list])           
        }
    }
    const handleDeletelist = (itemId) => {
        setList((prevItems) => prevItems.filter((i) => i.uid !== itemId));
    }
    const handleUpdateQuantity = (itemId, x) => {
        setList(prevItems => prevItems.map(i => (
            i?.uid === itemId 
            ? {...i, item_quantity: x, total: (x ?? 1) * i?.price} 
            : i )
        ))
    }
    const calculateGrandTotal = () => {
        const res = list.reduce((sum, i) => sum + (i.total ?? i?.price), 0)
        return res
    }
    const calculateQuantityTotal = () => {
        const res = list.reduce((sum, i) => sum + (i.item_quantity ?? 1), 0)
        return res
    }

    async function postData(){
        console.log('list', list)
        if(!data?.supplier_name) {
            const message = 'Supplier Name is required.'
            setErrMsg({supplier_name: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false)
            return
        }
        if(!data?.supplier_email) {
            const message = 'Supplier Email is required.'
            setErrMsg({supplier_email: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false)
            return
        }
        if(!data?.supplier_phone) {
            const message = 'Supplier Phone Number is required.'
            setErrMsg({supplier_phone: message})
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false)
            return
        }
        if(list.length <= 0) {
            const message = 'You are required to add products before you submit.'
            toast.warn(message, reactToastifyDark)
            setIsSubmit(false)
            return
        }

        let items = []; 
        list.map(i => (
            items = [{
                item_quantity: i?.item_quantity,
                price: i?.price,
                total: i?.total,
                id: i?.id, // product id
                }, ...items
            ] 
        ))


        const formData = {
            quantity: calculateQuantityTotal(),
            total: calculateGrandTotal(),
            supplier_name: data?.supplier_name,
            supplier_phone: data?.supplier_phone,
            supplier_address: data?.supplier_address,
            supplier_email: data?.supplier_email,
            purchase_items: items,
        }
        console.log('formData', formData)
        setIsSubmit(false)
        try{
            const res = await _purchaseStoreApiAction(formData);
            console.log('res', res)
            if(res.status == 1) {
                await getData();
                setData({});
                setList([]);
                setIsModal(false);
                toast.success(res?.message, reactToastifyDark);
                setIsSubmit(false)
                return;
            }
            } catch (error) {
                console.error(`Error: ${error}`);
                setIsSubmit(false);
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
        <section className='mx-auto w-[70%] h-auto bg-white text-black px-6 pt-6 pb-[2rem] rounded-2xl'>
            <div className='flex items-center justify-end'>
                <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
            </div>
            <h3 className='text-[2.2rem] font-light text-center mb-3'>Add Purchase</h3>
            
            <section className='mb-6'>  
                {/* NAME */}
                <div className='w-[100%] mb-4'>
                    <p className='mb-2 font-light'>Supplier Name:</p>
                    <input 
                    type='text' 
                    name='supplier_name'
                    onChange={handleInput}
                    value={data?.supplier_name}
                    placeholder='Enter the Supplier Name here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    { errMsg?.supplier_name && 
                        <p className='text-red-600 text-sm'>
                        {errMsg?.supplier_name}</p> }
                </div>       
                {/* EMAIL */}
                <div className='w-[100%] mb-4'>
                    <p className='mb-2 font-light'>Email:</p>
                    <input 
                    type='text' 
                    name='supplier_email'
                    onChange={handleInput}
                    value={data?.email}
                    placeholder='Enter Email here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    { errMsg?.supplier_email && 
                        <p className='text-red-600 text-sm'>
                        {errMsg?.supplier_email}</p> }
                </div>       
                {/* PHONE */}
                <div className='w-[100%] mb-4'>
                    <p className='mb-2 font-light'>Phone Number:</p>
                    <input 
                    type='text' 
                    name='supplier_phone'
                    onChange={handleInput}
                    value={data?.supplier_phone}
                    placeholder='Enter Phone Number here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    { errMsg?.supplier_phone && 
                        <p className='text-red-600 text-sm'>
                        {errMsg?.supplier_phone}</p> }
                </div>       
                {/* ADDRESS */}
                <div className='w-[100%] mb-4'>
                    <p className='mb-2 font-light'>Address:</p>
                    <input 
                    type='text' 
                    name='supplier_address'
                    onChange={handleInput}
                    value={data?.address}
                    placeholder='Enter the Address here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>   
            </section>


            {/* PRODUCTS FORM */}
            <div className='mb-6'>        
                {/*  */}
                <div className='grid grid-cols-6 gap-2'>
                    <div className='col-span-5 group flex items-center justify-start'>
                        <select 
                        type='text' 
                        name='product_id'
                        onChange={(e) => {
                            setData({...data, product: e.target.value, })
                        }}
                        value={data?.product_id}
                        className='w-[100%] ease-linear transition-all duration-150 border border-slate-300 px-3 py-3 group-hover:border-slate-600 outline-none rounded-xl'>
                        <option value=''>Select an option.</option>
                        {products ?
                        products.map((i, key) => (
                            <option key={key} value={
                                JSON.stringify({...i, item_quantity: 1, total: i?.price})
                            }>
                                {i?.name}</option>
                        ))
                        :
                        <option value=''>No Products Added.</option>
                        }
                        
                        </select>
                        {/*  <button className='w-[15%] h-[100%] flex cursor-pointer items-center justify-center border-slate-300 group-hover:border-slate-600 border rounded-r-xl ease-linear transition-all duration-150'>
                            <FaSearch />
                        </button> */}
                    </div>

                    <div className='col-span-1 flex items-center justify-center'>
                        <button
                            onClick={ () => data?.product && handleAddList(JSON.parse(data?.product)) }
                            className='group cursor-pointer w-[100%] h-[100%] ease-linear transition-all duration-150 flex items-center justify-center text-slate-600 hover:border-slate-600 border border-gray-300 rounded-xl'>
                            <FaPlus className='group-hover:scale-125 ease-linear transition-all duration-150' />
                        </button>
                    </div>

                </div>
            </div>


            {/* TOTAL */}
            <div className='flex items-center justify-end mb-6 gap-4'>
                <div className='flex items-center justify-center gap-2'>
                    <span className=''>QUANTITY</span>
                    <span className='text-2xl font-bold text-blue-600 leading-none'>
                        {calculateQuantityTotal() ? calculateQuantityTotal() : '0' }
                    </span>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <span className=''>TOTAL</span>
                    <span className='text-2xl font-bold text-red-600 leading-none'>
                        {calculateGrandTotal() ? '$' + calculateGrandTotal().toFixed(2) : '$0.00' }
                    </span>
                </div>
            </div>
            

            {/* ITEM */}
            { list.length > 0 && 
            <div className='mb-6'>
                { list.map(i => (
                    <div key={i?.uid} className='flex items-center justify-start border border-slate-300'>
                        <div className='w-[35%] py-3 px-3 border-r border-slate-300'>
                            <p className='leading-tight text-lg'>{i?.name}</p>
                            <p className='text-sm italic text-blue-950'>Price: {'$' + i?.price}</p>
                            </div>
                        <div className='w-[30%] py-2 px-3 border-r border-slate-300'>
                            <input type='number' 
                                min={1} 
                                value={i?.item_quantity}
                                onChange={(e) => {
                                    handleUpdateQuantity(i?.uid, Number(e.target.value));

                                }}
                                className='w-[100%] outline-none border border-slate-300 px-3 py-3' />
                        </div>
                        <div className='w-[25%] py-2 px-3 border-r border-slate-300'>
                            {  i?.total ? '$' + i?.total : '$' + i?.price }
                        </div>
                        <div className='w-[10%] py-2 px-3 font-bold flex items-center justify-end'>
                            <button 
                                onClick={() => handleDeletelist(i?.uid)} 
                                className='cursor-pointer group'>
                                <FaDeleteLeft className='text-2xl transition-all ease-linear duration-150 group-hover:scale-110 group-hover:text-red-700' />
                            </button>
                        </div>
                    </div>
                ))
                }
            </div>
            }

            {/* BUTTON */}
            <form 
                action={postData} 
                onSubmit={() => setIsSubmit(true)} 
                className='w-[100%] flex items-center justify-center mt-4 mb-8'>
                <button  
                    type='submit' 
                    className='w-[100%] group flex items-center justify-center gap-2 transition-all ease-in-out text-white px-10 py-5 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
                    {isSubmit ? 
                    'Processing' : 
                    <>
                    Submit <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                    </>}
                </button>
            </form>


            
        </section>
        </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
