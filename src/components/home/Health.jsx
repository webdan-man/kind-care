import Image from "next/image";

const items = [
    {
        title: "24 / 7 ձեր կողքին",
        text: "Մեր թիմը պատրաստ է շուրջօրյա լինել Ձեր տարեցի կողքին",
        img: {
            src: '/health/time.svg',
            alt: 'time'
        }
    },
    {
        title: "5+ տարի շուկայում",
        text: "Այս կարճ հատվածում մենք խնամել ենք ավելի քան հազարավոր մարդկանց և տարեցների օգնել ապաքինվել։",
        img: {
            src: '/health/doctor.svg',
            alt: 'doctor'
        }
    },
    {
        title: "Վստահություն",
        text: "Խնամքը սկսելուց առաջ մենք կնքում ենք  պայմանագիր, որով վստահ նշված են համագործակցության պայմանները։",
        img: {
            src: '/health/document.svg',
            alt: 'document'
        }
    },
    {
        title: "Ճկուն գներ",
        text: "Այս կարճ հատվածում մենք խնամել ենք ավելի քան 1000 տարեցի և օգնել ապաքինվել։",
        img: {
            src: '/health/percent.svg',
            alt: 'percent'
        }
    }
]

export default function Health() {
    return (
        <div className="w-full max-w-[1920px] px-[16px] mx-auto pt-[80px]">
            <h3 className="h3 w-full text-center">Մենք կարևորում ենք Ձեր առողջությունը</h3>
            <div className="flex mt-[70px] gap-[25px] justify-center w-full flex-wrap">
                {items.map((item, i) => (
                    <div key={item.img.src} className="flex gap-[18px] flex-1 items-start min-w-[280px] max-w-[333px]">
                        <Image
                            src={item.img.src}
                            alt={item.img.alt}
                            width={70}
                            height={70}
                        />
                        <div className="flex flex-col gap-[8px]">
                            <p className="p7-semibold">{item.title}</p>
                            <p className="p1 text-[rgba(107,107,107,1)]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
