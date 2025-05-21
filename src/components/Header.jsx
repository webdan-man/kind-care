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

const Links = ({className}) => {
    return (
        <nav className={`${className} max-md:px-[20px]`}>
            <ul className="flex gap-[20px] justify-center max-md:flex-col max-md:items-center">
                {menuItems.map((item) => (
                    <li key={item.title}>
                        <Link href={item.href}
                              className="p1-medium hover:underline transition-all duration-300 max-md:text-[rgba(255,255,255,1)] menu-font">{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default function Header() {

    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto';
    }, [open])

    return (
        <header
            className={`px-[60px] py-[17px] max-md:flex max-md:items-center max-md:justify-between grid grid-cols-[1fr_2fr_1fr] items-center top-0 z-100 ${scrolled ? 'border-b border-[#F0F0F0]' : ''} ${open ? 'bg-[rgba(9,135,237,1)] fixed top-0 left-0 h-full w-full max-md:p-0' : 'max-md:px-[20px] max-md:py-[26px] bg-[rgba(251,251,249,1)] sticky'}`}>
            <div className={`${open ? 'w-full h-full' : ''} flex flex-col justify-between`}>
                <div className={`${open ? 'pt-[24px] px-[20px]' : ''} flex justify-between`}>
                    <Link href='/' className="relative w-[166px] max-md:w-[125px] max-md:h-[28px] h-[37px]">
                        <Image
                            fill
                            src={open ? "/logo_small_white.svg" : "/logo.svg"}
                            alt="KindCare logo"
                            priority
                        />
                    </Link>
                    <button
                        onClick={() => {
                            setOpen(prevState => !prevState)
                        }}
                        className="hidden max-sm:flex"
                    >
                        <Image
                            src={'/close.svg'}
                            alt={"Menu"}
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
                {open && <Links />}
                <div className={`${open ? 'flex flex-col' : 'hidden'} flex-col text-[rgba(255,255,255,1)] items-center bg-[rgba(0,107,193,1)] h-[215px] p-[20xp] justify-center`}>
                    <p className="p1">Մեզ հետ կարող եք կապնվել՝</p>
                    <Link className="p4-medium mt-[16px] hover:underline leading-[41px]" href="tel:+374 43 018 018">+374 43 018 018</Link>
                </div>
                <div className={`${open ? 'flex' : 'hidden' } absolute w-full h-[333px] bottom-[215px]`}>
                    <Image src={'/elefant_big.svg'} alt={'Logo'} fill />
                </div>
            </div>
            <Links className="max-md:hidden"/>
            {!open && (
                <div className="flex">
                    <div className="flex flex-col gap-[4px] items-end">
                    <Link href='tel:+374 43 018 018' className="p3 text-right hover:underline">+374 43 018 018</Link>
                        <p className="p2 text-right text-[rgba(107,107,107,1)] max-md:hidden">Աշխ. ժամեր 10:00 մինչև
                            21:00</p>
                    </div>
                    <button
                        onClick={() => {
                            setOpen(prevState => !prevState)
                        }}
                        className="hidden max-sm:flex ml-[23px]"
                    >
                        <Image
                            src={'/menu.svg'}
                            alt={"Menu"}
                            width={20}
                            height={14}
                        />
                    </button>
                </div>
            )}
        </header>
    );
}
