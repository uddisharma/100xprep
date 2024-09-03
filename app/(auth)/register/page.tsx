import { Register } from '@/components/others/Register'
import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center ">
            <div className='lg:w-10/12 w-full m-auto grid grid-cols-1 lg:grid-cols-2 justify-between items-center'>
                <Image src="/remote.png" width={500} height={500} alt="Logo" className='hidden lg:block rounded-xl' />
                <Register />
            </div>
        </div>
    )
}

export default Page