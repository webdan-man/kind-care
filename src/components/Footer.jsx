import Image from "next/image";
import Link from 'next/link'

const menuItems = ['Մեր մասին', 'Ծառայությունները', 'Խնամողները', 'Բլոգ', 'Կապ մեզ հետ']

export default function Footer() {
    return (
        <footer className="border-t-1 border-[rgba(217,217,217,1)] pt-[58px] mt-[80px]">
            <div className="px-[155px] w-full flex justify-between pb-[52px] max-md:flex-col max-md:px-[30px]">
                <div className="flex flex-col items-start">
                    <Link href='/'>
                        <Image
                            src="/logo.svg"
                            alt="KindCare logo"
                            width={166}
                            height={37}
                        />
                    </Link>
                    <p className="p2 text-[rgba(107,107,107,1)] max-w-[333px] mt-[17px]">Զանգահարեք մեզ, պատասխանեք մի քանի պարզ հարցի, և մենք կառաջարկենք համապատասխան խնամողներ՝ ձեր ընտրությամբ։</p>
                    <p className="p1 text-[rgba(40,40,40,1)] mt-[30px]">Մեզ հետ կարող եք կապնվել՝</p>
                    <Link className="p4-medium mt-[16px] hover:underline" href="tel:+374 43 018 018">+374 43 018 018</Link>
                    <p className="p2 mt-[8px] text-[rgba(107,107,107,1)]">Աշխ. ժամեր 10:00 մինչև 21:00</p>
                    <Link className="p5 mt-[15px] hover:underline" href="mailto:info@xnamq.am">info@xnamq.am</Link>
                </div>
                <div className="flex flex-col justify-between items-end max-md:items-start">
                    <div className="flex flex-col items-end">
                        <nav>
                            <ul className="flex gap-[20px] justify-center max-md:flex-col">
                                {menuItems.map((item) => (
                                    <li key={item}>
                                        <Link href='/' className="p1-medium hover:underline">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="flex gap-[30px] items-center mt-[28px] max-md:flex-col">
                            <p className="p1">Հետևեք մեզ սոց. կայքերում՝</p>
                            <div className="flex gap-[8px]">
                                {[
                                    {src: '/social/fb.svg', alt: 'Facebook'},
                                    {src: '/social/instagram.svg', alt: 'Instagram'},
                                    {src: '/social/in.svg', alt: 'LinkedIn'}
                                ].map((item) => (
                                    <Link key={item.src} href='/'>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={42}
                                            height={42}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Link href='/'>
                        <Image
                            src="/massiv.svg"
                            alt="Instagram"
                            width={136}
                            height={44}
                        />
                    </Link>
                </div>
            </div>
            <div className="bg-[rgba(40,40,40,1)] py-[32px] w-full px-[155px] max-md:px-[30px]">
                <p className="p2 text-[rgba(255,255,255,1)]">© 2025 “Բարի Խնամք” / “Սերգեյ Ասատուրյան” ԱՁ: Բոլոր
                    իրավունքները պաշտպանված են</p>
            </div>
        </footer>
    );
}
