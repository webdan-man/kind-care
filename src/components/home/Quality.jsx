import Image from "next/image";

export default function Quality() {
    return (
        <div className="w-full max-w-[1440px] px-[60px] pt-[103px] mx-auto flex justify-center">
            <div className="bg-[rgba(9,135,237,0.05)] w-full max-w-[1316px] p-[42px] flex gap-[85px] border border-[rgba(9,135,237,1)] rounded-[60px]">
                <Image
                    src="/home/quality.jpg"
                    alt="quality"
                    width={433}
                    height={336}
                    className="rounded-[40px]"
                />
                <div>
                    <h2 className="h4 mt-[21px]">Որակի վերահսկման ընթացքը</h2>
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
