'use client'

import React, { useState } from 'react';
import { items } from '@/constants';
import Link from 'next/link';

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'images' | 'nfts'>('images');

  const images = [
    { id: 1, type: 'oval', bg: 'bg-amber-50' },
    { id: 2, type: 'wheat', bg: 'bg-orange-50' },
    { id: 3, type: 'arch', bg: 'bg-gray-50' },
    { id: 4, type: 'frame', bg: 'bg-gray-100' },
    { id: 5, type: 'oval', bg: 'bg-amber-50' },
    { id: 6, type: 'wheat', bg: 'bg-amber-50' },
    { id: 7, type: 'oval', bg: 'bg-amber-50' },
    { id: 8, type: 'frame', bg: 'bg-gray-50' },
    { id: 9, type: 'oval', bg: 'bg-amber-50' },
    { id: 10, type: 'arch', bg: 'bg-gray-50' },
    { id: 11, type: 'wheat', bg: 'bg-amber-50' },
    { id: 12, type: 'oval', bg: 'bg-amber-50' },
    { id: 13, type: 'frame', bg: 'bg-gray-50' },
    { id: 14, type: 'oval', bg: 'bg-amber-50' },
    { id: 15, type: 'arch', bg: 'bg-gray-50' },
  ];


  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-32 h-32 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
            <div className="w-20 h-24 bg-amber-100 rounded-lg flex items-center justify-center">
              <div className="w-10 h-16 rounded-full bg-amber-700"></div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-1">0x92...A6B4</h1>
            <p className="text-zinc-400 text-sm">Joined 2021</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-zinc-800">
          <button
            onClick={() => setActiveTab('images')}
            className={`pb-3 px-1 transition-colors relative ${
              activeTab === 'images' ? 'text-white' : 'text-zinc-500'
            }`}
          >
            Images
            {activeTab === 'images' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('nfts')}
            className={`pb-3 px-1 transition-colors relative ${
              activeTab === 'nfts' ? 'text-white' : 'text-zinc-500'
            }`}
          >
            NFTs
            {activeTab === 'nfts' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
            )}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-slate-800/30 border border-slate-700/30 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20"
                  >
                    <Link href={`/image/${item.id}`}>
                      <img
                        src={item.image}
                        alt={`Item ${item.id}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                ))}
              </div>
      </div>
    </div>
  );
};

export default Profile;