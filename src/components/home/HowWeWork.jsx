import Image from "next/image";

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
        <div className="w-full max-w-[1440px] px-[16px] mx-auto pt-[195px] how-we-work">
            <h2 className="h2 w-full text-center">Մեր աշխատելաձևը</h2>
            <div className="mt-[12px] w-full flex gap-[102px] justify-center">
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
            <div className="mt-[85px] flex gap-[66px] justify-center">
                <Image
                    src="/folowUp.jpg"
                    alt=""
                    width={412}
                    height={362}
                    className={"rounded-[40px]"}
                />
                <div>
                    <p className="p8-semibold -tracking-[0.6px] mt-[80px]">Հետագա աջակցություն և հսկողություն</p>
                    <p className="p6 -tracking-[0.48px] mt-[18px]">Մեր ուշադրությունը չի ավարտվում դրանով՝</p>
                    <div className="flex flex-col gap-[26px] mt-[24px]">
                        {[
                            'Կապ ենք պահպանում ձեզ հետ ամենօրյա խորհրդատվությամբ',
                            'Հետևում ենք ծառայության ժամկետներին ու վճարված օրերին',
                            'Մեր կառավարիչները միշտ հասանելի են ձեր հարցերին արձագանքելու համար'
                        ].map((item) => (
                            <div key={item} className="flex gap-[14px] items-start">
                                <div className="w-[12px] h-[12px] rounded-full bg-[rgba(234,184,118,1)]"/>
                                <p className="p6 -tracking-[0.48px]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
