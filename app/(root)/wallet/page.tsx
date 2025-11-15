import { ArrowUp } from 'lucide-react';

export default function WalletPage() {
  const walletAddress = "0x1a2b3c4d5e6f7890abcdef1234567890";
  
  const balances = [
    {
      token: "USDC",
      balance: 0,
      symbol: "USDC"
    },
    {
      token: "IDRX",
      balance: 0,
      symbol: "IDRX"
    }
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Hero Banner */}
      <div className="relative h-32 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-emerald-500/20 to-teal-600/20">
          <svg className="w-full h-full" viewBox="0 0 1200 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#5eead4', stopOpacity: 0.3}} />
                <stop offset="50%" style={{stopColor: '#2dd4bf', stopOpacity: 0.2}} />
                <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 0.3}} />
              </linearGradient>
            </defs>
            <path d="M0,80 L200,30 L400,60 L600,15 L800,45 L1000,30 L1200,60 L1200,150 L0,150 Z" 
                  fill="url(#grad1)" opacity="0.3"/>
            <path d="M0,90 L150,50 L350,75 L550,35 L750,65 L950,45 L1200,75 L1200,150 L0,150 Z" 
                  fill="url(#grad1)" opacity="0.4"/>
            <path d="M0,100 L100,70 L300,95 L500,60 L700,90 L900,65 L1200,95 L1200,150 L0,150 Z" 
                  fill="url(#grad1)" opacity="0.5"/>
            {/* Trees silhouettes */}
            <g opacity="0.6" fill="#0d5850">
              <polygon points="50,80 55,95 45,95" />
              <polygon points="65,75 70,90 60,90" />
              <polygon points="80,85 85,100 75,100" />
              <polygon points="950,70 960,90 940,90" />
              <polygon points="980,75 990,95 970,95" />
            </g>
            {/* Birds */}
            <g opacity="0.4" fill="#5eead4">
              <path d="M550,35 Q545,33 540,35 Q545,37 550,35 M555,33 Q550,31 545,33 Q550,35 555,33" />
              <path d="M620,45 Q615,43 610,45 Q615,47 620,45 M625,43 Q620,41 615,43 Q620,45 625,43" />
              <path d="M700,30 Q695,28 690,30 Q695,32 700,30" />
            </g>
          </svg>
        </div>
        {/* Tree silhouette left */}
        <div className="absolute bottom-0 left-8 w-20 h-20 bg-gradient-to-t from-black/90 to-transparent" 
             style={{clipPath: 'polygon(40% 0%, 60% 0%, 70% 30%, 80% 30%, 50% 100%, 20% 30%, 30% 30%)'}}></div>
        {/* Tree silhouette right */}
        <div className="absolute bottom-0 right-12 w-16 h-16 bg-gradient-to-t from-black/90 to-transparent" 
             style={{clipPath: 'polygon(40% 0%, 60% 0%, 70% 25%, 80% 25%, 50% 100%, 20% 25%, 30% 25%)'}}></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl py-8">
        <h1 className="text-4xl font-bold mb-2">My Wallet</h1>
        <p className="text-gray-400 text-sm mb-8">
          Connected Wallet: {walletAddress}
        </p>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {balances.map((item) => (
            <div
              key={item.token}
              className="border border-primary-500 rounded-lg p-6"
            >
              <h2 className="text-lg font-semibold mb-1 uppercase">
                {item.token} Balance
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                Balance: {item.balance} {item.symbol}
              </p>
              <button className="flex items-center gap-2 bg-[#2a3548] hover:bg-[#3a4558] text-white px-4 py-2 rounded transition-colors text-sm">
                Send
                <ArrowUp size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}