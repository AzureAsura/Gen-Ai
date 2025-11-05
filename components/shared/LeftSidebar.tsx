"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDisconnect, useAccount } from "wagmi";
import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    const handleLogout = () => {
        disconnect(); // ⛔ langsung disconnect wallet
    };


    return (
        <section className='custom-scrollbar leftsidebar'>
            <div className='flex w-full flex-1 flex-col gap-6 px-6'>
                {sidebarLinks.map((link) => {
                    const isActive =
                        (pathname.includes(link.route) && link.route.length > 1) ||
                        pathname === link.route;

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
                        >
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
                        </Link>
                    );
                })}

            </div>

            <div className="mt-10 px-6">
                {isConnected ? (
                    <div onClick={handleLogout}>
                        <div className="flex cursor-pointer gap-4 p-4 hover:bg-dark-3 rounded-lg">
                            <Image src="/logout.svg" alt="logout" width={24} height={24} />
                            <p className="text-light-2 max-lg:hidden">Logout</p>
                        </div>
                    </div>
                ) : (
                    <Link href={'/sign-in'}>
                        <div className="flex cursor-pointer gap-4 p-4 hover:bg-dark-3 rounded-lg">
                            <Image src="/logout.svg" alt="logout" width={24} height={24} />
                            <p className="text-light-2 max-lg:hidden">Connect Wallet</p>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    );
};

export default LeftSidebar;