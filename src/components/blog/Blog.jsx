import Image from "next/image";
import Link from 'next/link'

const items = Array.from([0, 1, 2, 3], (index) => ({
    id: index,
    img: {
        url: '/blog/blog_preview.jpg',
        alt: 'blog preview'
    },
    createdAt: '28 Jun 2025',
    title: 'Այստեղ պետք է լինի բլոգի վերնագիրը, այո',
    text: 'Ունե՞ք հարցեր, ցանկանում եք խորհրդատվություն կամ պատրաստ եք պատվիրել խնամք՝ մենք միշտ պատրաստ ենք օգնե...'
}));

export default function Blog() {
    return (
        <div className="w-full max-w-[1920px] px-[16px] mx-auto flex flex-col items-center mb-[100px]">
            <div className="flex flex-row w-full max-w-[1161px] flex-wrap items-start gap-[30px]">
                {items.map((item, index) => (
                    <Link href={`blog/${item.id}`} key={item.id} className="w-full max-w-[367px] flex flex-col p-[16px] rounded-[38px] bg-[rgba(252,243,230,1)] border border-[rgba(233,202,162,1)]">
                        <Image
                            src={item.img.url}
                            alt={item.img.alt}
                            width={335}
                            height={200}
                            className="rounded-[30px]"
                        />
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
