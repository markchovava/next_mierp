import React from 'react'
import AppInfoEdit from './components/AppInfoEdit'
import { FaAngleRight } from 'react-icons/fa6'
import Link from 'next/link'
import { _appInfoViewApiAction } from '@/actions/AppInfoActions'



export default async function page() {
   const [appInfoData] = await Promise.all([ _appInfoViewApiAction(), ])


  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>
        Edit AppInfo </h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='#' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='#'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/app-info' className='font-semibold'>AppInfo</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/app-info/edit' className='font-semibold'>Edit AppInfo</Link></li>
       </ul>
     </section>

     {/* EDIT */}
     <AppInfoEdit dbData={appInfoData} />


    </div>
    </>
  )
}
