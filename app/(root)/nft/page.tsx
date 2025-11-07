'use client'

import React, { useState } from 'react';
import { Search, Wallet } from 'lucide-react';
import Image from 'next/image';
import { items } from '@/constants';

export default function page() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Meme', 'Logo', 'USDT', 'Lisk', 'Ethereum', 'Airdrop'];


  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 w-full relative">
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
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-slate-800/30 border border-slate-700/30 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20"
          >
            <img
              src={item.image}
              alt={`Item ${item.id}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </>




  );
}