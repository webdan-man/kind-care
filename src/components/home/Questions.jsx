"use client"

import React from "react";

import Image from "next/image";
import GallerySlider from "@/components/GallerySlider";

const items = [
    {
        id: 0,
        title: 'Աշխատու՞մ եք Երևանից դուրս այլ մարզերում։',
        text: 'Այո, Բարի Խնամքը մատուցում է խնամքի ծառայություններ Երևանին մոտակա մարզերում՝ Կոտայքի, Արագածոտնի,Արարատի մարզերում:'
    },
    {
        id: 1,
        title: 'Արդյո՞ք ունեք բժշկական կրթությամբ խնամողներ։',
        text: 'Այո, ունենք։ Մեր խնամողներից շատերն ունեն բժշկական կրթություն և երկարատև աշխատանքային փորձ։ Ձեր կարիքներից կախված՝ առաջարկում ենք թե՛ բուժակ-խնամողներ, թե՛ փորձառու խնամողներ և մայրապետեր:'
    },
    {
        id: 2,
        title: 'Խնամքը միայն տանը՞ է իրականացվում։',
        text: 'Ծառայությունները մատուցվում են հիվանդի բնակության վայրում՝ տանը կամ հիվանդանոցում։ Մենք կազմակերպում ենք տնային խնամք և բուժօգնություն տարեցների, անկողնային հիվանդների ու վերականգնվողների համար՝ ապահովելով նրանց հարմարավետություն իրենց իսկ միջավայրում։'
    },
    {
        id: 3,
        title: 'Ձեր խնամողները ունե՞ն համապատասխան փորձ։',
        text: 'Մեր խնամողները ունեն առնվազն 3 տարվա փորձ խնամքի ոլորտում։ Նրանք պատրաստված են աշխատելու տարեցների, անկողնային հիվանդների և վերականգնվողների հետ՝ ցուցաբերելով պրոֆեսիոնալ, հոգատար և անվտանգ մոտեցում, որը ապահովում է հիվանդի հարմարավետությունն ու վստահությունը։'
    },
    {
        id: 4,
        title: 'Ի՞նչ արժեն ձեր ծառայությունները։',
        text: 'Բարի խնամքում գինը ձևավորվում է անհատապես՝ կախված յուրաքանչյուր հաճախորդի կարիքներից և պայմաններից։ Մեր փորձով սա ամենաարդար մոտեցումն է նման ծառայության համար։ Վճարը կախված է հիվանդի վիճակից, գտնվելու վայրից և անհրաժեշտ խնամքի ժամերից (օրական կամ շաբաթական)։'
    },
    {
        id: 5,
        title: 'Արդյո՞ք դուք վերադարձնում եք վճարված գումարը։',
        text: 'Ֆինանսական թափանցիկություն՝ Մենք հավատում ենք արդար և պարզ փոխհարաբերություններին։ Պայմանագիրը դադարեցնելուց հետո 3 օրվա ընթացքում կատարվում է վերահաշվարկ, և ավել վճարված գումարը ամբողջությամբ վերադարձվում է պատվիրատուի կողմից նշված հաշվեհամարին։'
    },
]

export default function Questions() {
    const [activeItemId, setActiveItemId] = React.useState(null);

    return (
        <div className="w-full max-w-[1440px] px-[60px] pt-[100px] mx-auto flex gap-[41px] max-md:flex-col max-md:px-[16px] max-md:pt-[60px]">
            <div className="flex flex-col w-[625px] max-md:w-full">
                <h2 className="h2 ml-[88px] max-md:ml-0">Հաճախ <br/>տրվող հարցեր</h2>
                <div
                    className={"max-md:hidden relative mt-[60px] mr-[71px] after:absolute after:z-0 after:w-[305px] after:h-[357px] after:bg-[rgba(252,243,230,1)] after:rounded-[40px] after:top-[230px] after:-left-[46px]"}>
                    <GallerySlider
                        progressBarClassName={"bottom-[52px] left-[50%] -ml-[40%] w-[80%]"}
                        imageClassName={`rounded-[40px] z-10 relative`}
                        className={`relative w-[336px] h-[479px]`}
                        images={['/home/faq/1.png', '/home/faq/2.png', '/home/faq/3.png', '/home/faq/4.png']}/>
                </div>
            </div>
            <div className="flex flex-col gap-[12px] w-full">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col">
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
                        <div
                            className={`ml-[31px] max-md:ml-[14px] max-w-[753px] w-full overflow-hidden transition-all duration-500 ease-in-out ${
                                activeItemId === item.id
                                    ? 'max-h-[500px] opacity-100'
                                    : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="p7 -tracking-[0.54px] mt-[20px] mb-[17px] max-md:w-[calc(100%-28px)]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
