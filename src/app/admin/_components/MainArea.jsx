"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'
import { FaUser } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlinePointOfSale } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { GiExpense } from "react-icons/gi";
import { TbCashRegister } from "react-icons/tb";
import { MdBusinessCenter } from "react-icons/md";
import { getCookie } from 'cookies-next';
import { _checkAdmin } from '@/cookies/AdminCookie';





export default async function MainArea({ dbData }) {
  await _checkAdmin();
  const [data, setData] = useState(dbData)


  return (
    <>
    
    <section className='px-8 pt-8 pb-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
        
        {/* USER COL */}
        <Link href='/admin/user'>
        <div className='text-blue-950 border rounded-2xl cursor-pointer border-blue-100 transition-all ease-in-out duration-100 hover:drop-shadow-md bg-white py-6 px-4 flex flex-col items-start justify-center gap-3'>
          <div className='w-[100%] flex items-center justify-between '>
            <h3 className='leading-tight text-2xl font-light'>Total Users</h3>
            <FaUser className='text-[1.8rem]' />
          </div>
          <div className=''>
            <span className='text-[2.3rem] tracking-wide font-extrabold leading-tight'>{data?.users_total ?? '0'}</span>
            <span className='ml-1 text-[1.4rem] font-light'>people</span>
          </div>
        </div>
        </Link>

        {/* SUBSIDIARY COL */}
        <Link href='/admin/subsidiary'>
        <div className='text-blue-950 border rounded-2xl cursor-pointer border-blue-100 transition-all ease-in-out duration-100 hover:drop-shadow-md bg-white py-6 px-4 flex flex-col items-start justify-center gap-3'>
          <div className='w-[100%] flex items-center justify-between '>
            <h3 className='leading-tight text-2xl font-light'>Total Subsidiaries</h3>
            <MdBusinessCenter className='text-[1.8rem]' />
          </div>
          <div className=''>
            <span className='text-[2.3rem] tracking-wide font-extrabold leading-tight'>
              {data?.subsidiary_total ?? '0'}</span>
            <span className='ml-1 text-[1.4rem] font-light'>subsidiaries</span>
          </div>
        </div>
        </Link>

        {/* PRODUCT COL */}
        <Link href='/admin/product'>
        <div className='text-blue-950 border rounded-2xl cursor-pointer border-blue-100 transition-all ease-in-out duration-100 hover:drop-shadow-md bg-white py-6 px-4 flex flex-col items-start justify-center gap-3'>
          <div className='w-[100%] flex items-center justify-between '>
            <h3 className='leading-tight text-2xl font-light'>Total Products</h3>
            <BsCartCheckFill className='text-[1.8rem]' />
          </div>
          <div className=''>
            <span className='text-[2.3rem] tracking-wide font-extrabold leading-tight'>{data?.products_total ?? '0'}</span>
            <span className='ml-1 text-[1.4rem] font-light'>products</span>
          </div>
        </div>
        </Link>

        {/* SALES COL */}
        <Link href='/admin/sales'>
        <div className='text-blue-950 border rounded-2xl cursor-pointer border-blue-100 transition-all ease-in-out duration-100 hover:drop-shadow-md bg-white py-6 px-4 flex flex-col items-start justify-center gap-3'>
          <div className='w-[100%] flex items-center justify-between '>
            <h3 className='leading-tight text-2xl font-light'>Sales</h3>
            <MdOutlinePointOfSale className='text-[1.8rem]' />
          </div>
          <div className=''>
            <span className='text-[2.3rem] tracking-wide font-extrabold leading-tight'>${data?.sales_total ?? '0.00'}</span>
            <span className='ml-1 text-[1.4rem] font-light'></span>
          </div>
        </div>
        </Link>


        {/* PURCHASES COL */}
        <Link href='/admin/purchase'>
        <div className='text-blue-950 border rounded-2xl cursor-pointer border-blue-100 transition-all ease-in-out duration-100 hover:drop-shadow-md bg-white py-6 px-4 flex flex-col items-start justify-center gap-3'>
          <div className='w-[100%] flex items-center justify-between '>
            <h3 className='leading-tight text-2xl font-light'>Purchases</h3>
            <BiSolidPurchaseTag className='text-[1.8rem]' />
          </div>
          <div className=''>
            <span className='text-[2.3rem] tracking-wide font-extrabold leading-tight'>${data?.purchase_total ?? '0.00'}</span>
            <span className='ml-1 text-[1.4rem] font-light'></span>
          </div>
        </div>
        </Link>

        {/* EXPENSE COL */}
        <Link href='/admin/expense'>
        <div className='text-blue-950 border rounded-2xl cursor-pointer border-blue-100 transition-all ease-in-out duration-100 hover:drop-shadow-md bg-white py-6 px-4 flex flex-col items-start justify-center gap-3'>
          <div className='w-[100%] flex items-center justify-between '>
            <h3 className='leading-tight text-2xl font-light'>Expenses</h3>
            <GiExpense className='text-[1.8rem]' />
          </div>
          <div className=''>
            <span className='text-[2.3rem] tracking-wide font-extrabold leading-tight'>${data?.expense_total ?? '0.00'}</span>
            <span className='ml-1 text-[1.4rem] font-light'></span>
          </div>
        </div>
        </Link>

        {/* REVENUES COL */}
       {/*  <div className='text-blue-950 border rounded-2xl cursor-pointer border-blue-100 transition-all ease-in-out duration-100 hover:drop-shadow-md bg-white py-6 px-4 flex flex-col items-start justify-center gap-3'>
          <div className='w-[100%] flex items-center justify-between '>
            <h3 className='leading-tight text-2xl font-light'>Revenues</h3>
            <TbCashRegister className='text-[1.8rem]' />
          </div>
          <div className=''>
            <span className='text-[2.3rem] tracking-wide font-extrabold leading-tight'>$12k</span>
            <span className='ml-1 text-[1.4rem] font-light'></span>
          </div>
        </div> */}
  
    </section>

    </>
  )
}
