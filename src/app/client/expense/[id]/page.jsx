import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import ExpenseView from './_components/ExpenseView'
import { _expenseViewApiAction } from '@/actions/ExpenseActions'




export default async function page({ params: {id} }) {
  const [expenseData, ] = await Promise.all([_expenseViewApiAction(id), ])


  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>View Expense</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client/expense'>Expense List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href={`/client/expense/${id}`} className='font-semibold'>View Expense</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <ExpenseView id={id} dbData={expenseData} />


    </div>
    </>
  )
}
