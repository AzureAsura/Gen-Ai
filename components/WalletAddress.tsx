'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const WalletAddress = () => {
    const { isConnected, address } = useAccount();

    return (
        isConnected ? (
            <div className="text-white px-4 py-2 flex items-center gap-2">
                <ConnectButton chainStatus="none" showBalance={false}/>
            </div>
        ) : (
            null
        )
    );
};

export default WalletAddress;
