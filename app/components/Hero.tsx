
import Link from "next/link";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";

const companyLogos = [
    "/images/companies/hubspot-logo-resized.png",
    "/images/companies/dropbox-logo-resized.png",
    "/images/companies/square-logo-resized.png",
    "/images/companies/intercom-logo-resized.png",
    "/images/companies/grammarly-logo-resized.png",
]

export default function Hero() {
    return (
        <div className="
            bg-[url(/images/clause-hero-bg-expanded.png)]
            bg-contain md:bg-cover
            bg-no-repeat 
            bg-top md:bg-center


            relative 
            flex 
            flex-col 
            gap-40
            
            w-full 
            h-auto  
            lg:max-h-[700px]

            items-center
            justify-center
            
            mt-10
            md:mt-30
            "
            >
            <div className=" flex flex-col gap-3 justify-center items-center">
                <p className="
                    bg-white 
                    w-auto 
                    text-[#0A3937] 
                    rounded-full 
                    max-w-sm 
                    flex 
                    pl-2
                    pr-4
                    py-2 
                    uppercase 
                    text-[12px]
                    border-1
                    border-gray-200
                    mt-2
                    
                    ">
                        <span className="mt-[3px] mx-1">
                            <AiFillThunderbolt /> 
                        </span>
                        Create for fast
                </p>
                <h1 className="
                    text-[#0A3937] 
                    py-2 px-10 md:px-2 
                    text-[clamp(2rem,5vw,3.3rem)] 
                    inter-medium-bold 
                    text-center 
                    leading-10 
                    md:lg:leading-13 
                    lg:leading-15 
                    w-full
                    md:w-2/3">One tool to <span className="
                        relative inline-block z-10
                        after:content-['']
                        after:absolute
                        after:left-0
                        after:right-0
                        after:h-[5px]
                        after:bg-[#cef709]
                        after:bottom-[2px]
                        after:-z-10
                    "> manage</span> contracts and your team</h1>
                <p className="
                    text-[#282826]/80 
                    leading-7 
                    py-2 px-10 md:px-2 
                    text-[clamp(12px,16px,16px)] 
                    max-w-3xl 
                    inter-medium 
                    text-center"
                >
                    Clause helps legal teams work faster, smarter and more efficiently, delivering the visibility and data-driven insights to mitigate risk and esnure compliance</p>

                <div className="flex flex-wrap items-center gap-5 mt-10">
                    <Link
                        href=""
                        className="
                            px-7 py-4 
                            cta-green
                            font-normal
                            rounded-xl
                            shadow-md
                            inter-medium
                            w-full
                            md:w-auto
                            text-center
                            ">
                            Start for Free    
                    </Link>    
                    <Link
                        href=""
                        className="
                            px-7 py-4 
                            cta-white
                            font-normal
                            rounded-xl
                            shadow-md
                            inter-medium
                            text-center
                            w-full
                            md:w-auto

                            ">
                            Get a Demo    
                    </Link>
                </div>
            </div>

            <div
                className="
                    flex
                    flex-wrap
                    md:flex-nowrap
                    items-start
                    mx-auto
                    gap-5
                    w-full
                    px-5
                    md:px-20
                "
                >
                <p
                    className="
                    text-[#0A3937]
                    w-full
                    md:w-1/6
                    inter-medium
                    text-sm
                    text-center

                    md:text-left
                    pt-1
                    "
                >
                    More than 100+ companies partner
                </p>

                <div className="relative w-full md:w-5/6 overflow-hidden">
                    {/* LEFT FADE */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F6F6F4] to-transparent" />

                    {/* RIGHT FADE */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F6F6F4] to-transparent" />

                    {/* SCROLLING CONTENT */}
                    <div className="flex w-max animate-scroll gap-5 ">
                        {[...companyLogos, ...companyLogos].map((logo, index) => (
                        <div key={`${logo}-${index}`} className="shrink-0 p-2">
                            <Image
                            className="rounded-lg"
                            src={logo}
                            alt="Brand logo"
                            width={100}
                            height={20}
                            priority
                            />
                        </div>
                        ))}
                    </div>
                </div>
                </div>
        </div>
    )
}