import React from 'react'
import ExpenseEdit from './components/ExpenseEdit'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import { _expenseViewApiAction } from '@/actions/ExpenseActions'





export default async function page({params: {id} }) {
  const [expenseData, ] = await Promise.all([_expenseViewApiAction(id), ])


  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>Edit Expense</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='#' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='#'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/expense'>Expense List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href={`/admin/expense/edit/${id}`} className='font-semibold'>Edit Expense</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <ExpenseEdit id={id} dbData={expenseData} />


    </div>
    </>
  )
}
