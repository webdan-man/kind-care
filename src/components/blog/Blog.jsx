import Image from "next/image";
import Link from 'next/link'

const items = [
    {
        id: 0,
        img: {
            url: '/blog/blog1.jpg',
        },
        createdAt: '7 Jun 2025',
        title: 'Տնային խնամք՝ երբ ամենակարևորը հոգատարությունն է',
        text: 'Ժամանակակից աշխարհում ամեն ինչ արագ է փոխվում։ Բայց կան արժեքներ, որոնք մնում են անփոփոխ՝ խնամք, հոգատ...'
    },
    {
        id: 1,
        img: {
            url: '/blog/blog2.jpg',
        },
        createdAt: '6 Jun 2025',
        title: 'Ինչու հենց մեր խնամողները',
        text: 'Բարի Խնամք կազմակերպության ամենաուժեղ կողմերից մեկը մեր թիմն է։ Իսկ թիմի սիրտը՝ մեր խնամողները։ Նրանք են ...'
    },
    {
        id: 2,
        img: {
            url: '/blog/blog3.jpg',
        },
        createdAt: '12 Jun 2025',
        title: 'Բարի Խնամքը մասնակցում է գերիատրիայի ոլորտի կարևորագույն կոնֆերանսին',
        text: 'Մեծ սիրով ու պատասխանատվությամբ հայտնում ենք, որ Բարի Խնամքը մասնակցելու է «Գերիատրիա. համակողմանի մոտե...'
    },
    {
        id: 3,
        img: {
            url: '/blog/blog4.jpg',
        },
        createdAt: '12 Jun 2025',
        title: 'Բարի Խնամքը՝ Առողջապահություն և դեղագործություն EXPO 2022-ի մասնակից',
        text: '2022 թվականին Բարի Խնամք կազմակերպությունը մեծ ուրախությամբ մասնակցեց «Առողջապահություն և դեղագործություն EXPO 2022» ցուցահա...'
    }
];

export default function Blog() {
    return (
        <div className="w-full max-w-[1920px] px-[16px] mx-auto flex flex-col items-center mb-[100px]">
            <div className="flex flex-row w-full max-w-[1161px] flex-wrap gap-[30px]">
                {items.map((item, index) => (
                    <Link href={`blog/${item.id}`} key={item.id} className="w-full max-w-[367px] flex flex-col p-[16px] rounded-[38px] bg-[rgba(252,243,230,1)] border border-[rgba(233,202,162,1)]">
                        <div className="relative w-[335px] h-[200px]">
                            <Image
                                src={item.img.url}
                                alt={item.title}
                                fill
                                objectFit="cover"
                                className="rounded-[30px]"
                            />
                        </div>
                        <div className="px-[15px] flex flex-col w-full">
                            <p className="p1 mt-[16px]">{item.createdAt}</p>
                            <h3 className="p7-medium mt-[8px]">{item.title}</h3>
                            <p className="p1 mt-[13px]">{item.text}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
