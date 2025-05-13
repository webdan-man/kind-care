import Link from 'next/link'
import Image from "next/image";

const items = [
    {
        id: 0,
        title: 'Խնամք՝ բնակությամբ',
        url: '/services',
    },
    {
        id: 1,
        title: 'Խնամող՝ այցելությամբ',
        url: '/services/1',
    },
    {
        id: 2,
        title: 'Տարեցների Խնամք',
        url: '/services/2',
    },
    {
        id: 3,
        title: 'Խնամող Հիվանդանոցում',
        url: '/services/3',
    },
    {
        id: 4,
        title: 'Հիվանդների Խնամք',
        url: '/services/4',
    },
    {
        id: 5,
        title: 'Ընկերակից',
        url: '/services/5',
    },
    {
        id: 6,
        title: 'Լոգանք',
        url: '/services/6',
    },
    {
        id: 7,
        title: 'Տեղափոխում',
        url: '/services/7',
    }
]

export default function Services({children, active}) {
    return (
        <div className="w-full max-w-[1440px] px-[16px] mx-auto flex flex-col items-center mb-[120px]">
            <div className="flex flex-row w-full max-w-[1320px] gap-[64px] items-start">
                <div className="flex flex-col px-[24px] py-[30px] bg-[rgba(252,243,230,1)] rounded-[32px] border border-[rgba(233,202,162,1)] min-w-[384px] sticky top-[128px]">
                    {items.map((item, index) => (
                        <Link className={`-tracking-[0.54px] p7-medium w-full px-[24px] py-[16px] rounded-[16px] hover:bg-[rgba(251,217,172,0.4)] flex gap-[20px] justify-between items-center ${active === item.id ? 'bg-[rgba(251,217,172,0.6)]' : 'bg-none'}`} key={item.id} href={item.url}>
                            {item.title}
                            {active === item.id && (
                                <Image
                                    src="/arrow_brown.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                    className="rounded-[40px]"
                                />
                            )}
                        </Link>
                    ))}
                </div>
                {children}
            </div>
        </div>
    );
}
