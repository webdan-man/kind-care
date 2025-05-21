import Image from "next/image";

export default function Quality() {
    return (
        <div className="w-full max-w-[1920px] px-[60px] pt-[103px] mx-auto flex justify-center max-md:px-[16px] max-md:pt-[60px]">
            <div className="bg-[rgba(9,135,237,0.05)] w-full max-w-[1316px] p-[42px] max-md:p-[16px] max-md:pb-[72px] flex gap-[85px] max-md:gap-[30px] border border-[rgba(9,135,237,1)] rounded-[60px] max-md:flex-col">
                <div className="relative w-[433] h-[336] max-md:w-[329px] max-md:h-[255px]">
                    <Image
                        src="/home/quality.jpg"
                        alt="quality"
                        fill
                        objectFit="contain"
                        className="rounded-[40px]"
                    />
                </div>
                <div className="max-md:px-[14px]">
                    <h2 className="h4 mt-[21px] max-md:mt-0">Որակի վերահսկման ընթացքը</h2>
                    <p className="p6 -tracking-[0.48px] mt-[20px] leading-[24px] max-w-[648px]">Մեր գլխավոր նպատակն է ապահովել ձեր հարազատների խնամքը և անվտանգությունը։ Այդ պատճառով մենք ներդրել ենք որակի վերահսկման համակարգ, որը ներառում է՝</p>
                    <p className="p6 -tracking-[0.48px] leading-[30px] mt-[16px]">
                        • Արագ արձագանք բոլոր խնդիրներին <br/>
                        • Բաց կապ պատվիրատուների հետ <br/>
                        • Բժշկական և էթիկ նորմերի պահպանման հսկողություն <br/>
                        • Խնամողի երաշխավորված փոխարինում անհրաժեշտության դեպքում
                    </p>
                </div>
            </div>
        </div>
    );
}
