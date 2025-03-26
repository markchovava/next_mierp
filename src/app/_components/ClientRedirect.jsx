import Link from 'next/link'
import React from 'react'

export default function ClientRedirect() {
  return (
    <>
    <section className='w-[100%]'>
    <div className='w-[100%] text-red-500 text-center px-6 py-[20%]'>
      <p className='text-4xl font-light leading-tight'> You are not authorized to access this page.</p>
      <p className='text-2xl font-light leading-tight'> Click here to go to 
        <Link 
        className='mx-1 text-blue-500 underline hover:no-underline' 
        href='/client'>
        Client Dashboard
        </Link>
        </p>
    </div>
    </section>
    </>
  )
}
