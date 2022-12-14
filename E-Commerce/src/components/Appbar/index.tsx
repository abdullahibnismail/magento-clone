import React from 'react'
import Link from 'next/link'

const Appbar = () => {
    const style = 'ml-3 text-white '
  return (
   
    <>
    <div className='flex justify-end p-3 bg-[#6e716e]'>
        <Link href='/customer/account/login'><a className={style}>sign In</a></Link>
        <h1 className={style}>or</h1>
        <a className={style}><Link href='/customer/account/register' > create an Account</Link></a>
        <h1 className={`${style} mr-16`}>Default store view</h1>
    </div>
    </>
  )
}

export default Appbar