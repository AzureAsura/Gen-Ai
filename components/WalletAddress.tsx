'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Link from 'next/link';

const WalletAddress = () => {
    const { isConnected, address } = useAccount();

    return (

        isConnected ? (
            <div className="text-white px-4 py-2 flex items-center gap-2">
                <ConnectButton chainStatus="none" showBalance={false} />
            </div>
        ) : (
            <div className="text-white px-4 py-2 flex items-center gap-2">
                {/* Button hanya muncul di max-md */}
                <Link href="/sign-in" className="md:hidden">
                    <button className="bg-primary-500 px-4 py-2 rounded-xl text-white w-full text-center">
                        Login
                    </button>
                </Link>
            </div>
        )

    );
};

export default WalletAddress;
