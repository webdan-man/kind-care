'use client';

import Image from "next/image";
import Link from 'next/link';

import React from 'react';

export const menuItems = [
    {
        title: 'Մեր մասին',
        href: '/aboutUs',
        id: 'aboutUs'
    },
    {
        title: 'Ծառայությունները',
        href: '/services',
        id: 'services'
    },
    {
        title: 'Խնամողները',
        href: '/caregivers',
        id: 'caregivers'
    },
    {
        title: 'Բլոգ',
        href: '/blog',
        id: 'blog'
    },
    {
        title: 'Կապ մեզ հետ',
        href: '/contactUs',
        id: 'contactUs'
    }
]

export default function Header() {

    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`px-[60px] py-[17px] max-md:px-[20px] max-md:py-[26px] max-md:flex max-md:items-center max-md:justify-between grid grid-cols-[1fr_2fr_1fr] items-center sticky top-0 z-100 bg-[rgba(251,251,249,1)] ${scrolled ? 'border-b border-[#F0F0F0]' : ''}`}>
            <div className="flex">
                <Link href='/' className="relative w-[166px] max-md:w-[125px] max-md:h-[28px] h-[37px]">
                    <Image
                        fill
                        src="/logo.svg"
                        alt="KindCare logo"
                        priority
                    />
                </Link>
            </div>
            <nav className="max-md:hidden">
                <ul className="flex gap-[20px] justify-center">
                    {menuItems.map((item) => (
                        <li key={item.title}>
                            <Link href={item.href} className="p1-medium hover:underline transition-all duration-300">{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex flex-col gap-[4px] items-end">
                <Link href='tel:+374 43 018 018' className="p3 text-right hover:underline">+374 43 018 018</Link>
                <p className="p2 text-right text-[rgba(107,107,107,1)] max-md:hidden">Աշխ. ժամեր 10:00 մինչև 21:00</p>
            </div>
        </header>
    );
}
