"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp, BiChevronRight } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";  


const ulVariant = {
    hidden: { opacity: 0, y: -20},
    visible: {
        opacity: 1, y: 0,
        transition: {type: 'spring', duration: 1} },
}
const liVariant = {
    start: { x: 0},
    animate: {
        x: 10,
        transition: {type: 'spring', duration: 0.4} },
}


export default function SidebarNav() {
    const [isActive, setIsActive] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
    })
  return (
    <>
    <section className='w-[100%]'>
        <ul className='px-6 py-4 flex flex-col gap-4'>
            {/* USERS */}
            <li>
                <motion.button 
                    onClick={() => setIsActive({...isActive, one: !isActive.one })} 
                    className={`w-[100%] flex items-center justify-between gap-2  ${isActive.one == true && 'font-semibold'}`}>
                    <span>Users</span>
                    {isActive.one == true 
                    ? <motion.span initial={{}}><BiChevronUp className='text-lg' /></motion.span>
                    : <BiChevronDown className='text-lg' /> }  
                </motion.button>
                <AnimatePresence>
                    {isActive.one == true &&
                    <motion.ul 
                    variants={ulVariant} 
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`text-sm py-2 pl-4`}>
                        <motion.li 
                        variants={liVariant}
                        initial='start'
                        whileHover='animate'
                        className={`py-1 `}>
                            <Link href='/client/user'className={` flex items-center justify-start gap-1`}>
                            <FaAngleRight /> User List </Link>
                        </motion.li>
                        
                    </motion.ul>
                    }
                </AnimatePresence>
            </li>
            {/* PRODUCTS */}
            <li>
                <motion.button 
                    onClick={() => setIsActive({...isActive, eight: !isActive.eight })} 
                    className={`w-[100%] flex items-center justify-between gap-2  ${isActive.eight && 'font-semibold'}`}>
                    <span>Products </span>
                    {isActive.eight 
                    ? <BiChevronUp className='text-lg' />
                    : <BiChevronDown className='text-lg' /> }  
                </motion.button>
                <AnimatePresence>
                    {isActive.eight &&
                    <motion.ul 
                    variants={ulVariant} 
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`text-sm py-2 pl-4`}>
                        <motion.li 
                        variants={liVariant}
                        initial='start'
                        whileHover='animate'
                        className={`py-1 `}>
                            <Link href='/client/product' className={` flex items-center justify-start gap-1`}>
                            <FaAngleRight /> Products List </Link>
                        </motion.li>
                    </motion.ul>
                    }
                </AnimatePresence>
            </li>
            {/* SALES */}
            <li>
                <motion.button 
                    onClick={() => setIsActive({...isActive, three: !isActive.three })} 
                    className={`w-[100%] flex items-center justify-between gap-2 transition-all ease-in-out duration-100 ${isActive.three == true && 'font-semibold'}`}>
                    <span>Sales</span>
                    {isActive.three == true 
                    ? <BiChevronUp className='text-lg' />
                    : <BiChevronDown className='text-lg' /> }  
                </motion.button>
                <AnimatePresence>
                    {isActive.three == true &&
                    <motion.ul 
                    variants={ulVariant} 
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`text-sm py-2 pl-4`}>
                        <motion.li 
                        variants={liVariant}
                        initial='start'
                        whileHover='animate'
                        className={`py-1 `}>
                            <Link href='/client/sales'className={` flex items-center justify-start gap-1`}>
                            <FaAngleRight /> Sales List </Link>
                        </motion.li>
                    </motion.ul>
                    }
                </AnimatePresence>
            </li>
            {/* PURCHASES */}
            <li>
                <motion.button 
                    onClick={() => setIsActive({...isActive, four: !isActive.four })} 
                    className={`w-[100%] flex items-center justify-between gap-2 transition-all ease-in-out duration-100 ${isActive.four && 'font-semibold'}`}>
                    <span>Purchases</span>
                    {isActive.four == true 
                    ? <BiChevronUp className='text-lg' />
                    : <BiChevronDown className='text-lg' /> }  
                </motion.button>
                <AnimatePresence>
                    {isActive.four == true &&
                    <motion.ul 
                    variants={ulVariant} 
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`text-sm py-2 pl-4`}>
                        <motion.li 
                        variants={liVariant}
                        initial='start'
                        whileHover='animate'
                        className={`py-1 `}>
                            <Link href='/client/purchase'className={` flex items-center justify-start gap-1`}>
                            <FaAngleRight /> Purchases List </Link>
                        </motion.li>
                    </motion.ul>
                    }
                </AnimatePresence>
            </li>
            {/* EXPENSE */}
            <li>
                <motion.button 
                    onClick={() => setIsActive({...isActive, five: !isActive.five })} 
                    className={`w-[100%] flex items-center justify-between gap-2 transition-all ease-in-out duration-100 ${isActive.five && 'font-semibold'}`}>
                    <span>Expenses</span>
                    {isActive.five
                    ? <BiChevronUp className='text-lg' />
                    : <BiChevronDown className='text-lg' /> }  
                </motion.button>
                <AnimatePresence>
                    {isActive.five &&
                    <motion.ul 
                    variants={ulVariant} 
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`text-sm py-2 pl-4`}>
                        <motion.li 
                        variants={liVariant}
                        initial='start'
                        whileHover='animate'
                        className={`py-1 `}>
                            <Link href='/client/expense'className={` flex items-center justify-start gap-1`}>
                            <FaAngleRight /> Expenses List </Link>
                        </motion.li>
                    </motion.ul>
                    }
                </AnimatePresence>
            </li>
            {/* REVENUE */}
           {/*  <li>
                <motion.button 
                    onClick={() => setIsActive({...isActive, six: !isActive.six })} 
                    className={`w-[100%] flex items-center justify-between gap-2 transition-all ease-in-out duration-100 ${isActive.five && 'font-semibold'}`}>
                    <span>Revenues</span>
                    {isActive.six 
                    ? <BiChevronUp className='text-lg' />
                    : <BiChevronDown className='text-lg' /> }  
                </motion.button>
                <AnimatePresence>
                    {isActive.six &&
                    <motion.ul 
                    variants={ulVariant} 
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`text-sm py-2 pl-4`}>
                        <motion.li 
                            variants={liVariant}
                            initial='start'
                            whileHover='animate'
                            className={`py-1 `}>
                            <Link href='/client/revenue'className={` flex items-center justify-start gap-1`}>
                            <FaAngleRight /> Revenue List </Link>
                        </motion.li>
                       
                    </motion.ul>
                    }
                </AnimatePresence>
            </li> */}
            {/* SETTINGS */}
            <li>
                <motion.button 
                    onClick={() => setIsActive({...isActive, seven: !isActive.seven })} 
                    className={`w-[100%] flex items-center justify-between gap-2 transition-all ease-in-out duration-100 ${isActive.five && 'font-semibold'}`}>
                    <span>Settings</span>
                    {isActive.seven
                    ? <BiChevronUp className='text-lg' />
                    : <BiChevronDown className='text-lg' /> }  
                </motion.button>
                <AnimatePresence>
                    {isActive.seven &&
                    <motion.ul 
                    variants={ulVariant} 
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`text-sm py-2 pl-4`}>
                        <motion.li 
                            variants={liVariant}
                            initial='start'
                            whileHover='animate'
                            className={`py-1 `}>
                            <Link 
                                href='/client/app-info' 
                                className={` flex items-center justify-start gap-1`}>
                                <FaAngleRight /> AppInfo </Link>
                        </motion.li>
                        
                       
                    </motion.ul>
                    }
                </AnimatePresence>
            </li>
        </ul>
    </section>
    </>
  )
}
