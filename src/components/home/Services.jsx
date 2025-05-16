"use client";
import React from "react";

import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const items = [
    {
        id: 0,
        title: 'Խնամք՝ բնակությամբ',
        content: {
            img: {
                url: '/home/services/1.jpg',
                alt: 'services'
            },
            text: '«Բարի Խնամք»-ը տրամադրում է բնակությամբ խնամողներ՝ ձեր հարազատի կողքին 24 / 7։ Հարմար է միայնակ, պառկած կամ հիշողության խնդիրներ ունեցող տարեցների համար։ Խնամողը ապրում է տանը, հոգատար է, ուշադիր և միշտ պատրաստ աջակցելու։ Մենք մշտապես կապի մեջ ենք՝ ապահովելով վստահություն և վերահսկում։'
        }
    },
    {
        id: 1,
        title: 'Խնամող՝ այցելությամբ',
        content: {
            img: {
                url: '/home/services/2.jpg',
                alt: 'services'
            },
            text: 'Յուրաքանչյուր ընտանիք մի օր կանգնում է խնդրի առաջ՝ ինչպես խնամել տարեց կամ հիվանդ հարազատին։ Երբ դուք չեք կարող մշտապես լինել կողքին, «Բարի Խնամք»-ը առաջարկում է ժամավճարով խնամք։ Մեր վստահելի մասնագետը գալիս է սահմանված ժամերին՝ հոգ տանելու ձեր հարազատի մասին։ Չկա բնակության կարիք, նվազում է անհարմարությունը և կարող եք վերահսկել ծախսերը։'
        }
    },
    {
        id: 2,
        title: 'Տարեցների Խնամող',
        content: {
            img: {
                url: '/home/services/3.jpg',
                alt: 'services'
            },
            text: 'Իհարկե, տարեց կամ տարեց թոշակառու ունեցող ընտանիքի բոլոր անդամները հնարավորություն չունեն հրաժարվել գումար վաստակելուց և մնալ տանը՝ նրան խնամելու համար։ «Սիդելկա-կենտրոն» բուժքույրական ծառայությունը այսօր կլուծի հարազատների ժամանակի պակասի խնդիրը։ Մեր տվյալների բազայում ունենք 5 հազար ստուգված թեկնածուներ, որոնք պատրաստ են օգնել ձեզ։'
        }
    },
    {
        id: 3,
        title: 'Խնամող Հիվանդանոցում',
        content: {
            img: {
                url: '/home/services/4.jpg',
                alt: 'services'
            },
            text: 'Շատերն այսօր չեն կարող մշտապես լինել հիվանդ հարազատի կողքին՝ զբաղվածության, առողջական վիճակի կամ ընտանեկան պարտավորությունների պատճառով։ «Բարի Խնամք»-ի խնամողները մնում են հենց հիվանդանոցում կամ բժշկական կենտրոնում՝ կազմակերպելով խնամք տեղում, անմիջապես պալատում։'
        }
    },
    {
        id: 4,
        title: 'Հիվանդների Խնամք',
        content: {
            img: {
                url: '/home/services/5.jpg',
                alt: 'services'
            },
            text: 'Հիվանդի խնամքը բժշկական ոլորտում կարևոր ու պատասխանատու գործընթաց է, որը պահանջում է մասնագիտական գիտելիք, փորձ և հոգատար վերաբերմունք։ Պառկած, վիրահատված կամ ինսուլտից հետո վերականգնվող հարազատի խնամքը հաճախ դուրս է հարազատների հնարավորություններից։ Մենք տրամադրում է պրոֆեսիոնալ խնամք՝ ժամային, հերթափոխային կամ շուրջօրյա։'
        }
    },
    {
        id: 5,
        title: 'Ընկերակից',
        content: {
            img: {
                url: '/home/services/6.jpg',
                alt: 'services'
            },
            text: 'Ընկերակից խնամողը կողքին է միայնակ տարեցներին՝ զրուցում, օգնում կենցաղում և հոգեբանորեն աջակցում, երբ դուք չեք կարող։'
        }
    },
    {
        id: 6,
        title: 'Լոգանք',
        content: {
            img: {
                url: '/home/services/7.jpg',
                alt: 'services'
            },
            text: 'Ընկերակից խնամողը կողքին է միայնակ տարեցներին՝ զրուցում, օգնում կենցաղում և հոգեբանորեն աջակցում, երբ դուք չեք կարող։'
        }
    },
    {
        id: 7,
        title: 'Տեղափոխում',
        content: {
            img: {
                url: '/home/services/8.jpg',
                alt: 'services'
            },
            text: 'Տրամադրում ենք անվասայլակով հիվանդների տեղափոխություն Երևանի տարածքում՝ պլանային և շտապ կարգով։ Մեքենան հարմարեցված է, աշխատակիցը աջակցում է տեղաշարժին՝ բնակարանից մինչև մեքենա և հակառակը։'
        }
    }
]

export default function Services() {
    const [activeItemId, setActiveItemId] = React.useState(items[0].id);

    const activeItem = React.useMemo(() => items.find(item => item.id === activeItemId), [activeItemId]);

    const [isAutoChanging, setIsAutoChanging] = React.useState(true);

    React.useEffect(() => {
        if (isAutoChanging) {
            const intervalId = setInterval(() => {
                const activeIndex = items.findIndex(item => item.id === activeItemId);
                setActiveItemId(items[(activeIndex + 1) > (items.length -1) ? 0 : (activeIndex + 1)].id);
            }, 5000);

            return () => clearInterval(intervalId);
        }
    }, [activeItemId, isAutoChanging]);

    return (
        <div className="w-full max-w-[1440px] px-[16px] mx-auto pt-[60px] flex flex-col items-center">
            <div className="flex flex-col w-full max-w-[1064px] items-start">
                <h2 className="h2">Մեր ծառայությունները</h2>
                <p className="p6 text-[rgba(107,107,107,1)] mt-[7px]">Այս կարճ հատվածում մենք խնամել ենք
                    ավելի քան 1000 մարդկանց և տարեցների օգնել ապաքինվել։</p>
            </div>
            <div
                className="mt-[39px] bg-[rgba(252,243,230,1)] rounded-[60px] border border-[rgba(233,202,162,1)] px-[16px] py-[60px] flex flex-col w-full items-center min-h-[704px]">
                <div className="flex w-full max-w-[1096px] items-start gap-[112px]">
                    <div className="flex flex-col w-full max-w-[336px]">
                        {items.map(item => (
                            <p onClick={() => {
                                setActiveItemId(item.id)
                                setIsAutoChanging(false)
                            }} key={item.id}
                                  className={`cursor-pointer transition-all duration-350 w-full rounded-[16px] px-[24px] py-[16px] -tracking-[0.54px] p7-medium flex items-center justify-between gap-[20px] hover:bg-[rgba(251,217,172,0.4)] ${activeItemId === item.id && 'bg-[rgba(251,217,172,1)]' }`}
                            >
                                {item.title}
                                {activeItemId === item.id && isAutoChanging && (
                                    <Image
                                        src={'/loading.svg'}
                                        alt={'Loading...'}
                                        width={19}
                                        height={19}
                                        className={"rounded-[40px] animate-spin"}
                                    />
                                )}
                            </p>
                        ))}
                    </div>
                    <div key={activeItem.id} className="animate-opacity">
                        <Image
                            src={activeItem.content.img.url}
                            alt={activeItem.content.img.alt}
                            width={648}
                            height={220}
                            className={"rounded-[40px]"}
                        />
                        <div className="w-full pl-[24px]">
                            <h3 className="h3 mt-[30px]">{activeItem.title}</h3>
                            <p className="p7 mt-[13px] max-w-[600px]">{activeItem.content.text}</p>
                            <Link href={activeItem.id ? `services/${activeItem.id}` : 'services'} className="mt-[30px] flex"><Button light>Իմանալ Ավելին</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
