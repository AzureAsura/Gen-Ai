
// hooks/useWalletInfo.ts
import { useAccount, useBalance, useEnsName, useEnsAvatar } from 'wagmi';
import { formatEther } from 'viem';

export function useWalletData() {
  const { address, isConnected, chain } = useAccount();
  
  const { data: balance, isLoading: balanceLoading } = useBalance({
    address: address,
  });

  const { data: ensName } = useEnsName({
    address: address,
  });

  const { data: ensAvatar } = useEnsAvatar({
    name: ensName ?? undefined,
  });

  // Format balance untuk display
  const formattedBalance = balance 
    ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}`
    : '0';

  return {
    address,
    isConnected,
    chain,
    balance: formattedBalance,
    balanceRaw: balance,
    balanceLoading,
    ensName,
    ensAvatar, // Ini adalah URL image yang sama dengan yang di CustomAvatar
    displayName: ensName || address, // ENS atau address
  };
}