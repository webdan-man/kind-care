import Button from "@/components/Button";

export default function Hero() {
    return (
        <div className="w-full max-w-[1440px] px-[16px] mx-auto flex flex-col items-center">
            <div className="w-full hero h-[520px] px-[16px] pt-[112px] flex flex-col items-center">
                <div className="flex flex-col w-full max-w-[1144px] items-start">
                    <h1 className="h1 text-[rgba(255,255,255,1)]">Տնային Խնամքի<br/>Ծառայությում</h1>
                    <p className="p6 mt-[24px] max-w-[557px] text-[rgba(255,255,255,1)]">Բարի Խնամքը ապահովում է անվտանգ
                        և հետևողական խնամք ձեր սիրելիի համար, քանի որ նրանք ծերանում են, որը մատուցվում է տանը՝
                        հարմարավետ և թափանցիկ:</p>
                    <Button className="mt-[43px]">Մեր Ծառայությունները</Button>
                </div>
            </div>
        </div>
    );
}
