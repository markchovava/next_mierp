import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import ExpenseList from './_components/ExpenseList'
import { _expenseBySubsidiaryApiAction, _expenseListApiAction } from '@/actions/ExpenseActions'




export default async function page() {
  const [expensesData, ] = await Promise.all([_expenseBySubsidiaryApiAction(), ])
  


  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>Expense List</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/client/expense' className='font-semibold'>Expense List</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <ExpenseList dbData={expensesData} />


    </div>
    </>
  )
}
