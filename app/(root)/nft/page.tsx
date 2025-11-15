'use client'

import React, { useState } from 'react';
import { Search, Wallet } from 'lucide-react';
import Image from 'next/image';
import { items } from '@/constants';
import Link from 'next/link';

export default function page() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Meme', 'Logo', 'USDT', 'Lisk', 'Ethereum', 'Airdrop'];


  return (
    <>
      <div className="flex items-center justify-between mb-8 ">
        <div className="flex-1 max-w-7xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl py-3 px-12 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>
        <div className="ml-4 flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl px-4 py-3">
          <Wallet size={20} className="text-gray-300" />
          <span className="text-gray-300 font-medium">10</span>
          <span className="text-gray-400">USDT</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${activeFilter === filter
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
              : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 border border-slate-700/50'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid Items */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {items.map((item) => (
          <Link href={`/image/${item.id}`} key={item.id}>
            <div className="mb-4 break-inside-avoid">
              <img
                src={item.image}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </Link>
        ))}
      </div>

    </>




  );
}