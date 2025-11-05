// components/WalletSync.tsx
'use client'

import { useAccount } from "wagmi";
import { useEffect } from 'react'

export function WalletSync() {
  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      document.cookie = `wallet-connected=true; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
      document.cookie = `wallet-address=${address}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
    } else {
      document.cookie = 'wallet-connected=; path=/; max-age=0';
      document.cookie = 'wallet-address=; path=/; max-age=0';
    }
  }, [isConnected, address]);

  return null;
}