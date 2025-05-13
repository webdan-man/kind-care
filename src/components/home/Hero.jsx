
import Button from "@/components/Button";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full max-w-[1440px] px-[16px] mx-auto flex flex-row items-center">
            <div
                className="bg-[rgba(9,135,237,1)] rounded-[70px] w-full max-w-[841px] p-[16px] flex flex-col items-center justify-center h-[520px] z-10">
                <div className="flex flex-col w-full items-start max-w-[557px]">
                    <h1 className="h1 text-[rgba(255,255,255,1)]">Տնային Խնամքի<br/>Ծառայությում</h1>
                    <p className="p6 mt-[24px] text-[rgba(255,255,255,1)]">Բարի Խնամքը ապահովում է անվտանգ
                        և հետևողական խնամք ձեր սիրելիի համար, քանի որ նրանք ծերանում են, որը մատուցվում է տանը՝
                        հարմարավետ և թափանցիկ:</p>
                    <Button className="mt-[43px]">Մեր Ծառայությունները</Button>
                </div>
            </div>
            <Image
                src="/galery/hero.jpg"
                alt="hero"
                width={704}
                height={520}
                className="-ml-[138px] h-[520px] rounded-[70px]"
            />
        </div>
    );
}
