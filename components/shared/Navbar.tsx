import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WalletAddress from '../WalletAddress'


const Navbar = () => {


    return (
        <nav className='topbar'>
            <Link href="/" className='flex items-center gap-4'>
                <Image src="/next.svg" alt='logo' width={28} height={28} />
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>VN AI</p>
            </Link>

            <div className='flex items-center gap-1'>
                <WalletAddress />

                <div className='block md:hidden'>
                    <div>
                        <div>
                            <div className='flex cursor-pointer'>
                                <Image src="/logout.svg" alt='logout' width={24} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar