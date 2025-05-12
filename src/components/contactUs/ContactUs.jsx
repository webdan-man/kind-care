import Link from 'next/link'
import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function ContactUs() {
    return (
        <div className="w-full max-w-[1176px] px-[16px] mx-auto flex flex-col items-center mt-40px">
            <div className="flex flex-row gap-[61px] w-full">
                <div className="flex flex-col w-full max-w-[584px] ml-[27px] items-start">
                    <p className="p7">
                        Ունե՞ք հարցեր, ցանկանում եք խորհրդատվություն կամ պատրաստ եք պատվիրել խնամք՝ մենք միշտ պատրաստ
                        ենք օգնել։
                        <br/><br/>
                        Մեր թիմը կապի մեջ է 24/7՝ տրամադրելու անհրաժեշտ տեղեկատվություն, օգնելու խնամքի ձևաչափի
                        ընտրության հարցում կամ ընդունելու ձեր դիմումը։
                    </p>
                    <p className="p1 mt-[30px]">Մեզ հետ կարող եք կապնվել՝</p>
                    <Link className="text-[rgba(9,135,237,1)] hover:underline p4-medium mt-[16px]"
                          href="tel:+374 43 018 018">+374 43 018 018</Link>
                    <p className="p2 text-[rgba(107,107,107,1)] mt-[8px]">Աշխ. ժամեր 10:00 մինչև 21:00</p>
                    <p className="p1 mt-[29px]">Էլ. հասցե՝</p>
                    <Link className="hover:underline p5 mt-[16px]" href="mailto:info@xnamq.am">info@xnamq.am</Link>
                    <p className="p1 mt-[30px]">Հետևեք մեզ սոց. կայքերում՝</p>
                    <div className="flex gap-[8px] mt-[24px]">
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
                <div className="bg-[rgba(9,135,237,1)] rounded-[60px] w-full max-w-[472px] px-[61px] py-[51px]">
                    <h3 className="h7 text-[rgba(255,255,255,1)]">Կարող եք նաև ուղարկել հայտ, և մենք կկապնվենք ձեզ հետ!</h3>
                    <div className="flex flex-col gap-[15px] mt-[30px]">
                        <Input full label="Ձեր անունը"/>
                        <Input full label="Հեռախոսահամարը*"/>
                        <Input full label="Էլ. Հասցեն*"/>
                        <Button className="mt-[35px]">Ուղարկել</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
