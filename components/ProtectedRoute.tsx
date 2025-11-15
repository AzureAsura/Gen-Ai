// 'use client'

// import { useAccount } from "wagmi";
// import { useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'

// export function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { isConnected, isConnecting } = useAccount();
//   const router = useRouter();
//   const [isChecking, setIsChecking] = useState(true);

//   useEffect(() => {
//     if (!isConnecting) {
//       setIsChecking(false);
      
//       if (!isConnected) {
//         console.log('❌ Not connected, redirecting to sign-in');
//         router.push('/sign-in');
//       } else {
//         console.log('✅ Connected, access granted');
//         document.cookie = `wallet-connected=true; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
//       }
//     }
//   }, [isConnected, isConnecting, router]);

//   if (isChecking || isConnecting) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-white text-xl">Checking wallet connection...</div>
//       </div>
//     );
//   }

//   if (!isConnected) {
//     return null;
//   }

//   return <>{children}</>;
// }