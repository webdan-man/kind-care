"use client";

import React from "react";

import Link from 'next/link';
import Image from "next/image";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function ContactUs() {
    const [showThankYou, setShowThankYou] = React.useState(false)
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData);
        setShowThankYou(true)

        setTimeout(() => {
            setShowThankYou(false)
        }, 5000)
    }

    return (
        <div className="relative w-full max-w-[1176px] px-[16px] mx-auto flex flex-col items-center mt-40px">
            <div className="flex flex-row gap-[61px] w-full max-md:flex-col">
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
                    <h3 className="h7 text-[rgba(255,255,255,1)]">Կարող եք նաև ուղարկել հայտ, և մենք կկապնվենք ձեզ
                        հետ!</h3>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-[15px] mt-[30px]"
                    >
                        <Input
                            full
                            label="Ձեր անունը"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Input
                            full
                            label="Հեռախոսահամարը*"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            full
                            label="Էլ. Հասցեն*"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            required
                        />
                        <Button className="mt-[35px]" type="submit">
                            Ուղարկել
                        </Button>
                    </form>
            </div>
        </div>
            {showThankYou && (
                <div
                    className="absolute top-[50%] left-[50%] -mt-[65px] -ml-[261px] border border-[rgba(9,135,237,1)] rounded-[50px] animate-opacity w-[521px] h-[129px] px-[103px] py-[48px] bg-[rgba(240,248,255,1)] shadow-[0px_4px_34px_0px_rgba(0,0,0,0.1)]">
                    <p className="h3">Հայտը Ընդունված է</p>
                </div>
            )}
</div>
)
    ;
}
