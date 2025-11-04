'use client'

import React from 'react'
import { Copy, Wallet } from "lucide-react"


const WalletAddress = () => {
    const walletAddress = "0xA4...2F9"

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress)
    }
    return (
        <div className="text-white px-4 py-2 flex items-center gap-2">
            <Wallet className="w-4 h-4" />
            <span className="text-sm text-white">{walletAddress}</span>
            <button onClick={handleCopy} className="hover:text-white transition-colors">
                <Copy className="w-4 h-4" />
            </button>
        </div>
    )
}

export default WalletAddress