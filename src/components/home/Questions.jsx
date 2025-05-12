"use client"

import React from "react";

import Image from "next/image";

const items = [
    {
        id: 0,
        title: 'Աշխատու՞մ եք Երևանից դուրս այլ մարզերում։',
        text: ''
    },
    {
        id: 1,
        title: 'Արդյո՞ք ունեք բժշկական կրթությամբ խնամողներ։',
        text: 'Այո, ունենք։ Մեր խնամողներից շատերն ունեն բժշկական կրթություն և աշխատանքային փորձ։ Ձեր կարիքներից կախված՝ առաջարկում ենք թե՛ բուժակ-խնամողներ, թե՛ փորձառու խնամողներ՝ առանց բժշկական դիպլոմի։'
    },
    {
        id: 2,
        title: 'Խնամքը միայն տանը՞ է իրականացվում։',
        text: ''
    },
    {
        id: 3,
        title: 'Ձեր խնամողները ունե՞ն համապատասխան փորձ։',
        text: ''
    },
    {
        id: 4,
        title: 'Ի՞նչ արժեն ձեր ծառայությունները։',
        text: ''
    },
    {
        id: 5,
        title: 'Արդյո՞ք դուք վերադարձնում եք վճարված գումարը։',
        text: ''
    },
]

export default function Questions() {
    const [activeItemId, setActiveItemId] = React.useState(null);

    return (
        <div className="w-full max-w-[1440px] px-[60px] pt-[100px] mx-auto flex gap-[41px]">
            <div className="flex flex-col w-[625px]">
                <h2 className="h2 ml-[88px]">Հաճախ <br/>տրվող հարցեր</h2>
                <Image
                    src="/frequently.jpg"
                    alt="frequently"
                    width={336}
                    height={479}
                    className={"rounded-[40px] mt-[60px] mr-[71px]"}
                />
            </div>
            <div className="flex flex-col gap-[12px] w-full">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col gap-[20px]">
                        <div
                            onClick={() => setActiveItemId(activeItemId === item.id ? null : item.id)}
                            className="px-[29px] py-[22px] bg-[rgba(9,135,237,0.1)] w-full max-w-[868px] flex gap-[20px] rounded-[24px] justify-between cursor-pointer">
                            <p className="p7-medium">{item.title}</p>
                            <Image
                                src="/arrow.svg"
                                alt="arrow"
                                width={30}
                                height={30}
                                className={`transition-transform duration-300 ease-in-out ${activeItemId === item.id ? "-rotate-90" : ""}`}
                            />
                        </div>
                        {activeItemId === item.id && <p className="p7 -tracking-[0.54px] ml-[31px] max-w-[753px] mb-[17px]">{item.text}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}
