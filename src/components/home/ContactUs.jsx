"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

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

        console.log('Form submitted:', formData)
        setShowThankYou(true)

        setTimeout(() => {
            setShowThankYou(false)
        }, 5000)
    }

    return (
        <div className="relative w-full max-w-[1920px] px-[64px] max-md:px-[16px] mt-[73px] mx-auto flex items-center flex-col justify-center">
            <p className="p5">Ունե՞ք դեռ հարցեր</p>
            <h2 className="h5 mt-[18px]">Թողեք հայտ, և մենք կկապնվենք ձեզ հետ!</h2>
            <div
                className="mt-[40px] relative bg-[rgba(9,135,237,1)] rounded-[60px] w-full py-[65px] flex flex-col items-center">
                <div className="absolute w-[453px] h-[437px] max-md:w-full absolute right-0 bottom-0 z-0">
                    <Image
                        src="/elefant_big.svg"
                        alt="elefant"
                        fill
                    />
                </div>
                <div className="flex flex-col items-center relative w-full max-w-[1142px] p-[16px]">
                    <form
                        onSubmit={handleSubmit} className="flex gap-[12px] items-end max-md:flex-col max-md:items-center">
                        <Input label="Ձեր անունը"
                               name="name"
                               value={formData.name}
                               onChange={handleChange}/>
                        <Input label="Հեռախոսահամարը*"
                               name="phone"
                               value={formData.phone}
                               onChange={handleChange}
                               required/>
                        <Input label="Էլ. Հասցեն*"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}
                               type="email"
                               required/>
                        <Button type="submit" className="min-w-[189px]">Ուղարկել</Button>
                    </form>
                    <div className="bg-[rgba(255,255,255,0.4)] w-full h-[1px] mb-[27px] mt-[60px]"/>
                    <p className="p7-medium text-[rgba(255,255,255,1)]">կամ պարզապես զանգահարեք</p>
                    <Link className="p9 text-[rgba(255,255,255,1)] mt-[21px] hover:underline" href="tel:+374 43 018 018">+374 43 018 018</Link>
                    <p className="mt-[12px] text-[rgba(251,251,249,1)] p2">Աշխ. ժամեր 10:00 մինչև 21:00</p>
                </div>
            </div>
            {showThankYou && (
                <div
                    className="absolute top-[50%] left-[50%] -mt-[65px] -ml-[261px] border border-[rgba(9,135,237,1)] rounded-[50px] animate-opacity w-[521px] h-[129px] px-[103px] py-[48px] bg-[rgba(240,248,255,1)] shadow-[0px_4px_34px_0px_rgba(0,0,0,0.1)]">
                    <p className="h3">Հայտը Ընդունված է</p>
                </div>
            )}
        </div>
    );
}
