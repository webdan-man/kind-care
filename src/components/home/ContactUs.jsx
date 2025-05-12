import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

export default function ContactUs() {
    return (
        <div className="w-full max-w-[1440px] px-[16px] mt-[73px] mx-auto flex items-center flex-col justify-center">
            <p className="p5">Ունե՞ք դեռ հարցեր</p>
            <h2 className="h5 mt-[18px]">Թողեք հայտ, և մենք կկապնվենք ձեզ հետ!</h2>
            <div
                className="mt-[40px] relative bg-[rgba(9,135,237,1)] rounded-[60px] w-full max-w-[1316px] py-[65px] flex flex-col items-center">
                <Image
                    src="/elefant_big.svg"
                    alt="elefant"
                    width={453}
                    height={437}
                    className="absolute right-0 bottom-0 z-0"
                />
                <div className="flex flex-col items-center relative w-full max-w-[1142px] p-[16px]">
                    <div className="flex gap-[12px] items-end">
                        <Input label="Ձեր անունը"/>
                        <Input label="Հեռախոսահամարը*"/>
                        <Input label="Էլ. Հասցեն*"/>
                        <Button>Ուղարկել</Button>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.4)] w-full h-[1px] mb-[27px] mt-[60px]"/>
                    <p className="p7-medium text-[rgba(255,255,255,1)]">կամ պարզապես զանգահարեք</p>
                    <Link className="p9 text-[rgba(255,255,255,1)] mt-[21px] hover:underline" href="tel:+374 43 018 018">+374 43 018
                        018</Link>
                    <p className="mt-[12px] text-[rgba(251,251,249,1)] p2">Աշխ. ժամեր 10:00 մինչև 21:00</p>
                </div>
            </div>
        </div>
    );
}
