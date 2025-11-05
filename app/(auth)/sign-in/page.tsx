"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function SignInPage() {
  const { isConnected } = useAccount();

  if (isConnected) redirect("/");

  return (
    <div className="min-h-screen flex bg-[#0a0a1a] text-white">
      <div className="w-full md:w-[30%] flex flex-col justify-center items-center px-8 py-16">
        <div className="max-w-sm text-center space-y-6">
          <h1 className="text-3xl font-semibold">Connect your Wallet</h1>

          <div className="flex justify-center">
            <ConnectButton />
          </div>

          <div className="pt-4 text-gray-400 text-sm">
            <p>Need help?</p>
            <p className="text-gray-500 text-xs">Available on iOS and Android</p>
          </div>
        </div>
      </div>

      {/* Right section (70%) */}
      <div className="hidden md:flex w-[70%] justify-center items-center bg-[#0e0e25]">
        <div className="relative w-[80%] max-w-[750px] aspect-square rounded-2xl overflow-hidden shadow-[0_0_60px_10px_rgba(0,183,255,0.2)]">
          <Image
            src="/placeholder.jpg"
            alt="AI Robot"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
