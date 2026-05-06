"use client"

import Image from "next/image";
import React from "react";
import GallerySlider from "@/components/GallerySlider";

const items = [
    {
        id: 0,
        title: "Անհատական մոտեցում",
        text: "Մենք գործում ենք բաց, պարզ և պատասխանատու՝ մեր աշխատանքն ամբողջությամբ ստուգելի և թափանցիկ է։  Բաց ենք ցանկացած հարցի քննարկման համար։ Վստահեք մեզ՝ վստահելի ու հաշվետու գործընկեր։"
    },
    {
        id: 1,
        title: "Թափանցիկ աշխատելաձև",
        text: "Թափանցիկությունը մեզ համար պարզապես արժեք չէ, այլ աշխատանքի ձև։ Մենք գործում ենք բաց ու հասանելի ձևով, ապահովելով վստահություն յուրաքանչյուր քայլում։ Բաց ենք հարցերի և քննարկումների համար՝ առանց թաքցնելու։"
    },
    {
        id: 2,
        title: "Վստահելի որակավորված անձնակազմ",
        text: "Մեր բոլոր խնամողները պարտադիր նախապատրաստություն են անցնում բոլոր այն դեպքերի համար, որոնք կարող են անհրաժեշտ լինել իրենց աշխատանքում։"
    },
    {
        id: 3,
        title: "Խնամողի արագ ընտրություն",
        text: "Արագ և արդյունավետ խնամք, երբ ամեն վայրկյանը կարևոր է։ Մենք օգնում ենք ձեզ արագ գտնել վստահելի խնամող՝ առանց բարդ գործընթացների։ Մեր փորձառու թիմը կաջակցի ընտրության բոլոր փուլերում՝ ապահովելով որակ, վստահություն և հարմարություն։"
    },
    {
        id: 4,
        title: "Ձեր կողմից համաձայնեցված ժամանակահատվածում",
        text: "Ձեր ժամանակը կարևոր է մեզ համար։  Մենք առաջարկում ենք խնամք, որն ամբողջությամբ հարմարեցված է ձեր գրաֆիկին և կարիքներին։ Սթրեսից ազատ, ճշգրիտ կազմակերպված սպասարկում՝ առանց ուշացումների ու անհարմարությունների։ Վստահեք մեզ՝ խնամք ճիշտ ժամանակին, ինչպես դուք եք նախընտրում։"
    },
    {
        id: 5,
        title: "Աշխատում ենք առանց միջնորդների",
        text: "Ոչ մի ավելորդություն՝ միայն անմիջական խնամք։ Մենք գործում ենք առանց միջնորդների՝ ապահովելով արագ, մատչելի և վստահելի սպասարկում։ 💡 Պարզ գործընթաց, անմիջական կապ և արագ արձագանք՝ հենց այն պահին, երբ ձեզ անհրաժեշտ է խնամք։"
    },
    {
        id: 6,
        title: "Խնամքի՝ պատասխանատվության պայմանագրով",
        text: "Խնամքի ծառայություն՝ պատասխանատվության պայմանագրով  Մենք ոչ միայն բարեխիղճ ենք, այլ նաև փաստերով ապահովում ենք ձեր վստահությունը։ Մեր ծառայությունները ամրագրվում են պայմանագրով, որպեսզի դուք վստահ լինեք՝ խնամքը որակյալ է, իսկ պատասխանատվությունը՝ լիարժեք։  Ձեր հանգստությունն ու վստահությունը մեզ համար առաջնահերթ են։ Մենք ձեր կողքին ենք՝ խոսքերով և գործով։"
    },
    {
        id: 7,
        title: "5+ տարի շուկայում",
        text: "Արդեն 5+ տարի մենք տրամադրում ենք հուսալի և որակյալ խնամք՝ ձեր սիրելիների ապահովության համար։ Մեր փորձառու թիմը գործում է հոգատարությամբ և մասնագիտական մոտեցմամբ՝ արժանանալով ձեր վստահությանը։  Ձեր հանգստությունը մեր աշխատանքային ամենօրյա նպատակն է։"
    }
]

export default function WhyWe() {
    const [activeItemId, setActiveItemId] = React.useState(null);


    return (
        <div className="max-md:pt-[85px] w-full max-w-[1920px] px-[60px] max-md:px-[35px] mx-auto pt-[100px] flex flex-row gap-[112px] max-md:gap-[40px] justify-center items-start max-md:flex-col">
            <div className={"max-md:order-1 max-md:after:hidden relative after:absolute after:z-0 after:w-[407px] after:h-[580px] after:bg-[rgba(252,243,230,1)] after:rounded-[40px] after:top-[75px] after:-left-[112px]"}>
                <GallerySlider
                    progressBarClassName={"bottom-[69px] left-[50%] -ml-[40%] w-[80%]"}
                    imageClassName={`rounded-[40px] z-10 relative`}
                    className={`relative min-w-[calc(100vw-70px)] w-full max-w-[424px] h-[580px]`}
                    images={['/home/whyChooseUs/1.png', '/home/whyChooseUs/2.png', '/home/whyChooseUs/3.png', '/home/whyChooseUs/4.png']}/>
            </div>
            <div className="flex flex-col gap-[35px]">
                <h2 className="h2">Ինչու են մեզ ընտրում՝</h2>
                <div className="flex flex-col gap-[20px]">
                    {items.map((item) => (
                        <div key={item.id} className="w-full max-w-[590px]">
                            <div onClick={() => setActiveItemId(item.id === activeItemId ? null : item.id)} className="flex gap-[8px] items-start cursor-pointer">
                                {activeItemId === item.id ?
                                    <div
                                        className="max-md:shrink-0 mr-[8px] mb-[8px] bg-[rgba(251,251,249,1)] rounded-full border border-[5px] border-[rgba(251,208,147,1)] w-[32px] h-[32px] mt-[4px] ml-[8px]"/>
                                    :
                                    <Image
                                        src={'/plus.svg'}
                                        alt={'plus'}
                                        width={48}
                                        height={48}
                                    />
                                }
                                <p className="p7-medium mt-[6px]">{item.title}</p>
                            </div>
                            <div
                                className={`max-w-[536px] w-full overflow-hidden transition-all duration-500 ease-in-out ${
                                    activeItemId === item.id
                                        ? 'max-h-[500px] opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="p6 -tracking-[0.48px] text-[rgba(107,107,107,1)] pl-[54px]">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
