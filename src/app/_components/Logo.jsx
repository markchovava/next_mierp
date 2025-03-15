"use client"
import Link from 'next/link'
import React from 'react'
import { RiPlantFill } from 'react-icons/ri'

export default function Logo({ link }) {
  return (
   <>
    <section className='w-[100%] py-6 border-b border-slate-50'>
        <Link href={link}>
        <h3 className='flex justify-center items-center gap-2 font-bold text-center text-[3rem] leading-none'>
            <RiPlantFill className='text-[3.5rem]' /> 
            MiERP
        </h3>
        </Link>
    </section>
   </>
  )
}
