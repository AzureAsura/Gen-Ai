'use client'

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function page() {
  const [copied, setCopied] = useState(false);
  
  const walletAddress = "0x1a2b3c4d5e6f7890abcdef1234567890";
  const referralLink = "https://4eamd-wiaaa-aaaal-artgq-cai.icp0.io/creator/phantomaru?referral=33200343";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Banner */}
      <div className="relative h-32 overflow-hidden rounded-2xl ">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-emerald-500/20 to-teal-600/20">
          <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#5eead4', stopOpacity: 0.3}} />
                <stop offset="50%" style={{stopColor: '#2dd4bf', stopOpacity: 0.2}} />
                <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 0.3}} />
              </linearGradient>
            </defs>
            {/* Mountain shapes */}
            <path d="M0,100 L200,40 L400,80 L600,20 L800,60 L1000,40 L1200,80 L1200,200 L0,200 Z" 
                  fill="url(#grad1)" opacity="0.3"/>
            <path d="M0,120 L150,70 L350,100 L550,50 L750,90 L950,60 L1200,100 L1200,200 L0,200 Z" 
                  fill="url(#grad1)" opacity="0.4"/>
            <path d="M0,140 L100,100 L300,130 L500,80 L700,120 L900,90 L1200,130 L1200,200 L0,200 Z" 
                  fill="url(#grad1)" opacity="0.5"/>
            {/* Birds */}
            <g opacity="0.4" fill="#5eead4">
              <path d="M750,50 Q745,48 740,50 Q745,52 750,50 M755,48 Q750,46 745,48 Q750,50 755,48" />
              <path d="M820,60 Q815,58 810,60 Q815,62 820,60 M825,58 Q820,56 815,58 Q820,60 825,58" />
              <path d="M900,45 Q895,43 890,45 Q895,47 900,45" />
            </g>
          </svg>
        </div>
        <div className="absolute bottom-0 left-12 w-16 h-24 bg-gradient-to-t from-black/80 to-transparent" 
             style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'}}></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl py-8">
        <h1 className="text-4xl font-bold mb-2">My Referrals</h1>
        <p className="text-gray-400 text-sm mb-8">
          Connected Wallet: {walletAddress}
        </p>

        {/* Referral Link Card */}
        <div className="border border-primary-500 rounded-lg p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30">
          <h2 className="text-xl font-semibold mb-2">Your Referrals Link</h2>
          <p className="text-gray-400 text-sm mb-6">
            Invite your creator friends and earn an extra 50% of the platform fee from every support they receive for 30 days!
          </p>

          <div className="space-y-3">
            <div className="bg-[#1a1f2e] rounded px-4 py-3 text-sm text-gray-300 break-all">
              {referralLink}
            </div>
            
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 bg-[#2a3548] hover:bg-[#3a4558] text-white px-4 py-2 rounded transition-colors"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy Link
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}