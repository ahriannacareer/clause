
import Link from "next/link";
import Image from "next/image";
import { CiBoxes } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";

const companyLogos = [
    "/images/companies/a-logo.png",
    "/images/companies/app-logo.png",
    "/images/companies/asterisk-logo.png",
    "/images/companies/box-logo.png",
    "/images/companies/chimp-logo.png",
    "/images/companies/gramm-logo.png",
    "/images/companies/notion-logo.png",
    "/images/companies/paypal-logo.png",
    "/images/companies/shopify-logo.png",
    "/images/companies/t-logo.png",
    "/images/companies/zed-logo.png",
]

export default function Intergrations() {
    return (
         <div className="
            w-full 
            relative 
            h-full 
            gap-40
             px-10
            bg-white
        ">
            <div className="
                bg-[#174240]
                w-full
                rounded-xl
                flex flex-col 
                gap-20 
                py-20
                justify-center items-center
                ">
                    <div className="flex flex-col gap-2 justify-center items-center w-full">
                        <p className="
                            bg-[#F0FAF9]/10
                            w-auto mx-auto
                            rounded-full 
                            self-start
                            flex 
                            pl-2
                            pr-4
                            py-2 
                            uppercase 
                            text-[12px]
                            mt-2
                            
                            ">
                                <span className="mt-[3px] mx-1">
                                    <CiBoxes />
                                </span>
                                Intergrations
                        </p>
                        <h1 className="
                            text-[#fff] 
                            py-2 px-2 
                            text-[clamp(1rem,5vw,2.3rem)] 
                            inter-medium 
                            text-center 
                            leading-10 
                            md:lg:leading-13 
                            lg:leading-15 
                            w-full
                            md:w-3/5">Don't replace. Integrate.</h1>
                        
                        <p className="
                            text-[#fff]/80 
                            leading-5  md:leading-7 
                            py-2 px-10 md:px-2 
                            text-[clamp(12px,2vw,16px)] 
                            w-full
                            md:w-3/5 
                            inter-light
                            text-center"
                            >
                                We understand the hussle of replacing the long used tools in your process. That's why we integrate tools in your day-today work.
                        </p>
                        
                        <Link
                            href=""
                            className="
                                px-7 py-4 
                                font-normal
                                rounded-xl
                                inter-light
                                text-center
                                mx-auto
                                flex flex-row
                                underline underline-offset-7
                                self-start
                                ">
                                All Integrations &#8594; 
                        </Link>
                    </div>
                    <div className="flex flex-col gap-7 justify-center items-center w-full">
                        <div className=" flex flex-col gap-3 justify-center items-center w-full "> 

                            <div className="relative w-full overflow-hidden">
                                {/* LEFT FADE */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#174240] to-transparent" />

                                {/* RIGHT FADE */}
                                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#174240] to-transparent" />

                                {/* SCROLLING CONTENT */}
                                <div className="flex w-max animate-scrollY gap-7 ">
                                    {[...companyLogos, ...companyLogos].map((logo, index) => (
                                    <div key={`${logo}-${index}`} className="shrink-0 p-2">
                                        <Image
                                        className="rounded-lg"
                                        src={logo}
                                        alt="Brand logo"
                                        width={70}
                                        height={20}
                                        priority
                                        />
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-3 justify-center items-center w-full "> 

                            <div className="relative w-full overflow-hidden">
                                {/* LEFT FADE */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#174240] to-transparent" />

                                {/* RIGHT FADE */}
                                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#174240] to-transparent" />

                                {/* SCROLLING CONTENT */}
                                <div className="flex w-max animate-scroll gap-7 ">
                                    {[...companyLogos, ...companyLogos].map((logo, index) => (
                                    <div key={`${logo}-${index}`} className="shrink-0 p-2">
                                        <Image
                                        className="rounded-lg"
                                        src={logo}
                                        alt="Brand logo"
                                        width={70}
                                        height={20}
                                        priority
                                        />
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}