import Image from "next/image";
import Link from 'next/link'

import Breadcrumbs from "@/components/Breadcrumbs";

export default function BlogItemPage() {
    return (
        <main className="flex flex-col w-full justify-center">
            <Breadcrumbs />
            <div className="flex flex-col w-full mx-auto max-w-[904px] pt-[35px] px-[16px] items-start">
                <Link href="/blog" className="flex items-center group">
                    <Image
                        src="/arrow_back.svg"
                        alt="back"
                        width={30}
                        height={30}
                    />
                    <p className="leading-[22px] p6 group-hover:underline">Հետ գնալ</p>
                </Link>
                <h1 className="h5 mt-[40px]">Այստեղ պետք է լինի բլոգի վերնագիրը, այո</h1>
                <p className="p1 mt-[16px]">28 Jun 2025</p>
                <Image
                    src="/blog/blog.jpg"
                    alt="blog"
                    width={866}
                    height={290}
                    className="rounded-[30px] mt-[30px]"
                />
                <p className="leading-[22px] p6 mt-[42px]">
                    «Բարի Խնամք»-ը կազմակերպում է անվասայլակով հիվանդների տեղափոխություն Երևանի տարածքում։ Ծառայությունն
                    իրականացվում է մեկ հարմարեցված մեքենայով, որը նախատեսված է հատուկ այսպիսի տեղափոխությունների համար։
                    <br/><br/>
                    Տեղափոխությունը կարող է լինել պլանային կամ անհրաժեշտության դեպքում՝ անհետաձգելի։ Մեր աշխատակիցը
                    օգնում է հիվանդին նստեցնել կամ դուրս բերել մեքենայից, ինչպես նաև իրականացնում է տեղափոխություն
                    բնակարանից մինչև մեքենա և հակառակը։
                    <br/><br/>
                    Տեղափոխությունն իրականացվում է հարմարավետ և անվտանգ պայմաններում՝ հաշվի առնելով հիվանդի վիճակն ու
                    կարիքները։
                    <br/><br/>
                    Եթե ձեր հարազատը չի կարողանում ինքնուրույն տեղաշարժվել և նրան անհրաժեշտ է տեղափոխել բժշկական
                    կենտրոն, տուն կամ այլ վայր՝ մենք պատրաստ ենք աջակցել։
                </p>
            </div>
        </main>
    );
}
