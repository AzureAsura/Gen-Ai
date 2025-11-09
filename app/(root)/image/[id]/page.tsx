
import React from 'react';
import { Download, Trash2, Copy } from 'lucide-react';
import { items } from '@/constants';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params

    const item = items.find(
        (prop) => prop.id.toString() === id
    )

    return (
        <div className="min-h-screen text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Side - Image */}
                    <div className="lg:col-span-2">
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-900 to-teal-950">
                            <img
                                src={item?.image}
                                alt="Fantasy Dragon"
                                className="w-full h-auto object-cover"
                                style={{ aspectRatio: '16/10' }}
                            />
                        </div>

                        {/* Tags */}
                        <div className="flex gap-3 mt-6">
                            {['#animal', '#fantasy', '#portrait'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-zinc-900 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="lg:col-span-1">
                        {/* Profile Info */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-zinc-400 text-sm">0x92...A6B4</p>
                                <p className="text-zinc-500 text-xs">Created: 30 Oct 2025</p>
                            </div>
                        </div>

                        {/* Description Input */}
                        <div className="mb-6">
                            <p>flat logo design for a luxury car showroom named 'Luxury Vault'. The logo should feature minimalist and elegant design elements inspired by the</p>
                        </div>

                        {/* Mint Button */}
                        <button className="w-full bg-primary-500 hover:bg-primary-500/75 text-white font-medium py-2 rounded-3xl transition-colors mb-3">
                            Mint to NFT
                        </button>

                        <button className="w-full bg-primary-500 hover:bg-primary-500/75 text-white font-medium py-2 rounded-3xl transition-colors mb-6">
                            Upload Image
                        </button>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center gap-2 p-4 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-colors group">
                                <div className="w-12 h-12 bg-zinc-800 group-hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors">
                                    <Download className="w-5 h-5 text-zinc-400" />
                                </div>
                                <span className="text-xs text-zinc-400">Download</span>
                            </button>

                            <button className="flex flex-col items-center gap-2 p-4 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-colors group">
                                <div className="w-12 h-12 bg-zinc-800 group-hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors">
                                    <Trash2 className="w-5 h-5 text-zinc-400" />
                                </div>
                                <span className="text-xs text-zinc-400">Delete</span>
                            </button>

                            <button className="flex flex-col items-center gap-2 p-4 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-colors group">
                                <div className="w-12 h-12 bg-zinc-800 group-hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors">
                                    <Copy className="w-5 h-5 text-zinc-400" />
                                </div>
                                <span className="text-xs text-zinc-400">Copy</span>
                            </button>
                        </div>

                        {/* NFT Details Card */}
                        <div className="mt-8 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                            <h3 className="text-sm font-medium mb-4 text-zinc-400">NFT Details</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500">Token Standard</span>
                                    <span className="text-zinc-300">ERC-721</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500">Blockchain</span>
                                    <span className="text-zinc-300">Ethereum</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500">Contract Address</span>
                                    <span className="text-zinc-300">0x92...A6B4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;