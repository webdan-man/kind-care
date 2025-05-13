"use client"

import Image from "next/image";
import React from "react";

const items = [
    {
        id: 0,
        title: "Անհատական մոտեցում",
        text: "Մեր բոլոր խնամողները պարտադիր նախապատրաստություն են անցնում բոլոր այն դեպքերի համար, որոնք կարող են անհրաժեշտ լինել իրենց աշխատանքում։"
    },
    {
        id: 1,
        title: "Թափանցիկ աշխատելաձև",
        text: "Մեր բոլոր խնամողները պարտադիր նախապատրաստություն են անցնում բոլոր այն դեպքերի համար, որոնք կարող են անհրաժեշտ լինել իրենց աշխատանքում։"
    },
    {
        id: 2,
        title: "Վստահելի որակավորված անձնակազմ",
        text: "Մեր բոլոր խնամողները պարտադիր նախապատրաստություն են անցնում բոլոր այն դեպքերի համար, որոնք կարող են անհրաժեշտ լինել իրենց աշխատանքում։"
    },
    {
        id: 3,
        title: "Խնամողի արագ ընտրություն",
        text: "Մեր բոլոր խնամողները պարտադիր նախապատրաստություն են անցնում բոլոր այն դեպքերի համար, որոնք կարող են անհրաժեշտ լինել իրենց աշխատանքում։"
    },
    {
        id: 4,
        title: "Ձեր կողմից համաձայնեցված ժամանակահատվածում",
        text: "Մեր բոլոր խնամողները պարտադիր նախապատրաստություն են անցնում բոլոր այն դեպքերի համար, որոնք կարող են անհրաժեշտ լինել իրենց աշխատանքում։"
    },
    {
        id: 5,
        title: "Աշխատում ենք առանց միջնորդների",
        text: "Մեր բոլոր խնամողները պարտադիր նախապատրաստություն են անցնում բոլոր այն դեպքերի համար, որոնք կարող են անհրաժեշտ լինել իրենց աշխատանքում։"
    },
    {
        id: 6,
        title: "Կնքում ենք պատասխանատվության պայմանագիր",
        text: "Մեր բոլոր խնամողները պարտադիր նախապատրաստություն են անցնում բոլոր այն դեպքերի համար, որոնք կարող են անհրաժեշտ լինել իրենց աշխատանքում։"
    },
    {
        id: 7,
        title: "5+ տարի շուկայում",
        text: "Մեր բոլոր խնամողները պարտադիր նախապատրաստություն են անցնում բոլոր այն դեպքերի համար, որոնք կարող են անհրաժեշտ լինել իրենց աշխատանքում։"
    }
]

export default function WhyWe() {
    const [activeItemId, setActiveItemId] = React.useState(null);


    return (
        <div className="w-full max-w-[1440px] px-[60px] mx-auto pt-[100px] flex flex-row gap-[112px] justify-center items-start">
            <div className={"relative after:absolute after:z-0 after:w-[407px] after:h-[580px] after:bg-[rgba(252,243,230,1)] after:rounded-[40px] after:top-[75px] after:-left-[112px]"}>
                <Image
                    src={'/home/whyWe.jpg'}
                    alt={''}
                    width={424}
                    height={580}
                    className={"rounded-[40px] z-10 relative"}
                />
            </div>
            <div className="flex flex-col gap-[35px]">
                <h2 className="h2">Ինչու են մեզ ընտրում՝</h2>
                <div className="flex flex-col gap-[20px]">
                    {items.map((item) => (
                        <div key={item.id} className="w-full max-w-[590px]">
                            <div onClick={() => setActiveItemId(item.id === activeItemId ? null : item.id)} className="flex gap-[8px] items-start cursor-pointer">
                                {activeItemId === item.id ?
                                    <div
                                        className="mr-[8px] mb-[8px] bg-[rgba(251,251,249,1)] rounded-full border border-[5px] border-[rgba(251,208,147,1)] w-[32px] h-[32px] mt-[4px] ml-[8px]"/>
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
                            {activeItemId === item.id && <p className="w-full p6 -tracking-[0.48px] text-[rgba(107,107,107,1)] pl-[54px] max-w-[536px]">{item.text}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
