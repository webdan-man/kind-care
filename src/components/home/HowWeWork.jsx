import Image from "next/image";
import React from "react";

const items = [
    {
        title: 'Խորհրդատվություն և ընտրություն',
        text: 'Զանգահարեք մեզ, պատասխանեք մի քանի պարզ հարցի, և մենք կառաջարկենք համապատասխան խնամողներ՝ ձեր ընտրությամբ։',
        img: {
            url: '/howWeWork/consulting.png',
            alt: 'consulting'
        }
    },
    {
        title: 'Պայմանագիր կնքում և վճարում',
        text: 'Ընտրված մասնագետը հաստատելուց հետո կնքվում է պայմանագիր, և կատարվում է վճարումը՝ ամբողջությամբ կամ մասնակի։',
        img: {
            url: '/howWeWork/signing.png',
            alt: 'signing'
        }
    },
    {
        title: 'Խնամքի մեկնարկ',
        text: 'Մեր խնամողը սկսում է աշխատանքը՝ ըստ պայմանավորված գրաֆիկի և պարտավորությունների։',
        img: {
            url: '/howWeWork/start.png',
            alt: 'start'
        }
    }
]

export default function HowWeWork() {
    return (
        <div className="w-full max-w-[1440px] px-[16px] max-md:px-[40px] mx-auto pt-[195px] max-md:pt-[40px] relative">
            <div className="max-md:hidden absolute z-0 border-t border-r border-b border-t-[rgba(9,135,237,1)] border-b-[rgba(9,135,237,1)] border-r-[rgba(9,135,237,1)] rounded-r-[80px] h-[358px] w-[750px] right-[64px] top-[340px] after:absolute after:rounded-full after:w-[17px] after:h-[17px] after:bg-[rgba(9,135,237,1)] after:-bottom-[8px] after:-left-[8px] before:absolute before:-top-[1px] before:-left-[200%] before:h-[1px] before:w-[200%] before:bg-[rgba(9,135,237,1)]" />
            <h2 className="h2 w-full text-center relative">Մեր աշխատելաձևը</h2>
            <div className="relative mt-[12px] w-full flex gap-[102px] justify-center max-md:flex-col max-md:gap-[60px]">
                {items.map((item) => (
                    <div key={item.title} className="flex flex-col">
                        <Image
                            src={item.img.url}
                            alt={item.img.alt}
                            width={170}
                            height={172}
                        />
                        <p className="p8-semibold -tracking-[0.6px]">{item.title}</p>
                        <p className="p6 -tracking-[0.48px] max-w-[320px] mt-[24px]">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="mt-[85px] flex gap-[66px] max-md:gap-[41px] justify-center relative max-md:flex-col">
                <div
                    className={"max-md:after:hidden relative after:absolute after:z-0 after:w-[305px] after:h-[357px] after:bg-[rgba(252,243,230,1)] after:rounded-[40px] after:top-[75px] after:-left-[112px]"}>
                    <Image
                        src="/home/folowUp.jpg"
                        alt=""
                        width={412}
                        height={362}
                        className={"rounded-[40px] z-10 relative"}
                    />
                </div>
                <div>
                    <p className="p8-semibold -tracking-[0.6px] mt-[80px] max-md:mt-0">Հետագա աջակցություն և հսկողություն</p>
                    <p className="p6 -tracking-[0.48px] mt-[18px]">Մեր ուշադրությունը չի ավարտվում դրանով՝</p>
                    <div className="flex flex-col gap-[26px] mt-[24px]">
                        {[
                            'Կապ ենք պահպանում ձեզ հետ ամենօրյա խորհրդատվությամբ',
                            'Հետևում ենք ծառայության ժամկետներին ու վճարված օրերին',
                            'Մեր կառավարիչները միշտ հասանելի են ձեր հարցերին արձագանքելու համար'
                        ].map((item) => (
                            <div key={item} className="flex gap-[14px] items-start">
                                <div className="w-[12px] h-[12px] rounded-full bg-[rgba(234,184,118,1)] max-md:shrink-0"/>
                                <p className="p6 -tracking-[0.48px]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
