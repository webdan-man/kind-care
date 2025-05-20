import Image from "next/image";
import React from "react";

export default function AboutUs() {
    return (
        <div className="w-full max-w-[1126px] px-[16px] mx-auto flex flex-row mb-[68px]">
            <div className="flex flex-col gap-[34px]">
                <div className="flex flex-row gap-[64px] items-start max-md:flex-col">
                    <div className="w-full max-w-[584px] flex flex-col">
                        <div className="flex flex-col w-full">
                            <h3 className="h5 mt-[26px]">Մեր պատությունը</h3>
                            <p className="p7 mt-[24px]">Իհարկե, տարեց կամ տարեց թոշակառու ունեցող ընտանիքի բոլոր
                                անդամները
                                հնարավորություն չունեն հրաժարվել գումար վաստակելուց և մնալ տանը՝ նրան խնամելու համար։
                                «Սիդելկա-կենտրոն» բուժքույրական ծառայությունը այսօր կլուծի հարազատների ժամանակի պակասի
                                խնդիրը։
                                Մեր տվյալների բազայում ունենք 5 հազար ստուգված թեկնածուներ, որոնք պատրաստ են օգնել
                                ձեզ։</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <h3 className="h5 mt-[26px]">Մեր առաքելությունը</h3>
                            <p className="p7 mt-[24px]">Իհարկե, տարեց կամ տարեց թոշակառու ունեցող ընտանիքի բոլոր
                                անդամները
                                հնարավորություն չունեն հրաժարվել գումար վաստակելուց և մնալ տանը՝ նրան խնամելու համար։
                                «Սիդելկա-կենտրոն» բուժքույրական ծառայությունը այսօր կլուծի հարազատների ժամանակի պակասի
                                խնդիրը։
                                Մեր տվյալների բազայում ունենք 5 հազար ստուգված թեկնածուներ, որոնք պատրաստ են օգնել
                                ձեզ։</p>
                        </div>
                    </div>
                    <div
                        className={"relative max-md:after:hidden after:absolute after:z-0 after:w-[407px] after:h-[580px] after:bg-[rgba(252,243,230,1)] after:rounded-[40px] after:top-[75px] after:left-[65px]"}>
                        <Image
                            src="/aboutUs/top.jpg"
                            alt="about us"
                            width={424}
                            height={580}
                            className="rounded-[40px] z-10 relative"
                        />
                    </div>

                </div>
                <div className="flex flex-row gap-[17px] items-start max-md:flex-col">
                    <div className="w-full max-w-[584px] flex flex-col">
                        <div className="flex flex-col w-full">
                            <h3 className="h5 mt-[26px]">Մեր նպատակը</h3>
                            <p className="p7 mt-[24px]">Իհարկե, տարեց կամ տարեց թոշակառու ունեցող ընտանիքի բոլոր
                                անդամները
                                հնարավորություն չունեն հրաժարվել գումար վաստակելուց և մնալ տանը՝ նրան խնամելու համար։
                                «Սիդելկա-կենտրոն» բուժքույրական ծառայությունը այսօր կլուծի հարազատների ժամանակի պակասի խնդիրը։
                                Մեր տվյալների բազայում ունենք 5 հազար ստուգված թեկնածուներ, որոնք պատրաստ են օգնել ձեզ։Իհարկե,
                                տարեց կամ տարեց թոշակառու ունեցող ընտանիքի բոլոր անդամները հնարավորություն չունեն հրաժարվել
                                գումար վաստակելուց և մնալ տանը՝ նրան խնամելու համար։ «Սիդելկա-կենտրոն» բուժքույրական
                                ծառայությունը այսօր կլուծի հարազատների ժամանակի պակասի խնդիրը։ Մեր տվյալների բազայում ունենք 5
                                հազար ստուգված թեկնածուներ, որոնք պատրաստ են օգնել ձեզ։</p>
                        </div>
                    </div>
                    <Image
                        src="/aboutUs/bottom.png"
                        alt="about us"
                        width={640}
                        height={444}
                        className="self-end top-[149px] relative"
                    />
                </div>
            </div>
        </div>
    );
}
