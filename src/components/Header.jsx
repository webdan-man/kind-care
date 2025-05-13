import Image from "next/image";
import Link from 'next/link'

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
    return (
        <header className="px-[60px] py-[17px] grid grid-cols-[1fr_2fr_1fr] items-center sticky top-0 z-100 bg-[rgba(251,251,249,1)]">
            <div className="flex">
                <Link href='/'>
                    <Image
                        src="/logo.svg"
                        alt="KindCare logo"
                        width={166}
                        height={37}
                        priority
                    />
                </Link>
            </div>
            <nav>
                <ul className="flex gap-[20px] justify-center">
                    {menuItems.map((item) => (
                        <li key={item.title}>
                            <Link href={item.href} className="p1-medium hover:underline">{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex flex-col gap-[4px] items-end">
                <Link href='tel:+374 43 018 018' className="p3 text-right hover:underline">+374 43 018 018</Link>
                <p className="p2 text-right">Աշխ. ժամեր 10:00 մինչև 21:00</p>
            </div>
        </header>
    );
}
