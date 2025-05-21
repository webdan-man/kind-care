
import Button from "@/components/Button";
import GallerySlider from "@/components/GallerySlider";

export default function Hero() {
    return (
        <div className="w-full max-w-[1920px] px-[16px] max-md:px-[8px] mx-auto flex flex-row items-center max-md:flex-col">
            <div
                className="bg-[rgba(9,135,237,1)] rounded-[70px] max-md:rounded-[40px] w-full max-md:min-w-auto min-w-[841px] max-md:max-w-none max-w-[59%] p-[16px] flex flex-col items-center justify-center h-[520px] max-md:h-auto z-10 max-md:px-[30px] max-md:pt-[82px] max-md:pb-[66px]">
                <div className="flex flex-col w-full items-start max-w-[557px] max-md:max-w-none max-md:items-center">
                    <h1 className="h1 text-[rgba(255,255,255,1)] leading-[50px] max-md:text-center max-md:leading-[37px]">Տնային Խնամքի<br/>Ծառայությում</h1>
                    <p className="p6 mt-[12px] text-[rgba(255,255,255,1)] max-md:mt-[15px] max-md:text-center">Բարի Խնամքը ապահովում է անվտանգ
                        և հետևողական խնամք ձեր սիրելիի համար, քանի որ նրանք ծերանում են, որը մատուցվում է տանը՝
                        հարմարավետ և թափանցիկ:</p>
                    <Button className="mt-[35px] max-md:mt-[45px]">Մեր Ծառայությունները</Button>
                </div>
            </div>
            <GallerySlider
                progressBarClassName={"bottom-[60px] right-[10%] w-[60%]"}
                imageClassName={`rounded-[70px]`}
                className={`z-0 relative w-full max-md:min-w-auto max-md:-mt-[100px] min-w-[704px] max-w-[51%] max-md:max-w-none -ml-[10%] h-[520px] max-md:h-[440px] max-md:ml-0`}
                images={['/home/hero/heroBanner1.png', '/home/hero/heroBanner2.png', '/home/hero/heroBanner3.png', '/home/hero/heroBanner4.png', '/home/hero/heroBanner5.png']}/>
        </div>
    );
}
