'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link'
import Image from "next/image";
import {menuItems} from "@/components/Header";

export default function Breadcrumbs({title}) {
    const pathname = usePathname();

    const activeRoute = menuItems.find(item => item.href === pathname);

    if (!title) {
        return (
            <div className="w-full max-w-[1920px] px-[16px] mx-auto flex flex-col items-center">
                <div className="w-full flex flex-col items-center bg-[rgba(252,243,230,1)] rounded-[30px]">
                    <div className="flex w-full max-w-[1094px] p-[16px] h-[100px] flex-col justify-center">
                        <div className="flex w-full gap-[5px]">
                            <Link className="p2 hover:underline" href="/">Գլխավոր</Link>
                            <span className="p2">/</span>
                            <Link className="p2 hover:underline" href="/blog">Բլոգ</Link>
                            <span className="p2">/</span>
                            {activeRoute && <Link className="p2 hover:underline"
                                   href={activeRoute.href}>{activeRoute.title}</Link>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-[1920px] px-[16px] mx-auto mb-[39px]">
            <div
                className="relative w-full bg-[rgba(9,135,237,1)] h-[200px] py-[40px] px-[16px] rounded-[60px] flex flex-col items-center">
                <div className="flex flex-col w-full max-w-[1094px]">
                    <div className="flex gap-[5px]">
                        <Link className="p2 text-[rgba(251,251,249,1)] hover:underline" href="/">Գլխավոր</Link>
                        <span className="p2 text-[rgba(251,251,249,1)]">/</span>
                        {activeRoute && <Link className="p2 text-[rgba(251,251,249,1)] hover:underline"
                               href={activeRoute.href}>{activeRoute.title}</Link>}
                    </div>
                    <h1 className="h1 mt-[17px] text-[rgba(251,251,249,1)]">{title}</h1>
                </div>
                <Image
                    src="/elefant.svg"
                    alt="elefant"
                    width={315}
                    height={200}
                    className="absolute right-0 top-0"
                />
            </div>
        </div>
    );
}
