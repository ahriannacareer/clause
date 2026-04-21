
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { MdPermPhoneMsg } from "react-icons/md";

import { FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube   } from "react-icons/fa";

const footerSolutions = [
    { label: "Why Cequence", href: "/" },
    { label: "Features", href: "/"},
    { label: "OpenAI", href: "/"},
    { label: "Technology", href: "/"},
    { label: "Security", href: "/"},
];

const footerCustomers = [
    { label: "Procurement", href: "/" },
    { label: "Sales", href: "/"},
    { label: "Legal", href: "/" },
    { label: "Medium", href: "/"},
    { label: "Enterprise", href: "/" },
];

const footerResources = [
    { label: "Pricing", href: "/" },
    { label: "Contact Sales", href: "/" },
    { label: "Changelog *", href: "/" },
    { label: "Blog", href: "/" },
];

export default function Footer() {
    return (
        <footer className="
            
        ">
            <div className="
                bg-[#273e3d]
                px-10 lg:px-30
                py-15
                flex flex-col lg:flex-row
            ">
                <h1 className="
                    text-[#fff] 
                    py-2 px-10 md:px-2 
                    text-[clamp(1rem,5vw,2rem)] 
                    inter-light
                    text-center lg:text-left 
                    leading-10 
                    lg:leading-12
                    w-full
                    ">Discover the full scale of <span className="
                        relative inline-block z-10
                        after:content-['']
                        after:absolute
                        after:left-0
                        after:right-0
                        after:h-[5px]
                        after:bg-[#cef709]
                        after:bottom-[2px]
                        after:-z-10
                    "> Clause</span> capabilities</h1>

                <div className="
                    flex flex-row flex-wrap lg:flex-nowrap
                    w-full
                    justify-center lg:justify-end
                    pt-5 lg:pt-8
                    ">
                    <Link
                        href=""
                        className="
                            px-5 py-3 
                            cta-white
                            font-normal
                            rounded-xl
                            shadow-lg
                            inter-medium
                            mr-4
                            self-start
                            ">
                            Get a Demo   
                        </Link>

                    <Link
                        href=""
                        className="
                            px-5 py-3 
                            cta-lime
                            font-normal
                            rounded-xl
                            shadow-lg
                            inter-medium
                            self-start
                        ">
                            Start for Free    
                        </Link>  
                </div>
            </div>
            {/* <div className="
            flex flex-col
            lg:flex-row
            bg-[#0A3937]
            px-30">

            </div> */}
            <div className="
                mx-auto max-w-6xl 
                py-10 px-10 lg:px-30
                flex flex-col 
                lg:flex-row 
                items-center 
                lg:items-start 
                text-center lg:text-left 
                gap-10
                bg-[#031111]
                
                ">
                    <div className="
                        flex flex-col 
                        gap-3 w-2/4 lg:pt-6
                        justify-center items-center
                        lg:items-start
                        ">
                        <Link href="/" className="w-auto flex items-center gap-1 pb-3" >
                            {/* <div className="h-9 w-9 rounded-lg bg-white/10 border border-white/10 grid place-items-center">
                                <span className="text-sm">▶</span>
                            </div> */}
                            {/* <span className="tracking-[0.2em] text-sm font-semibold text-white/90">
                                STUDIO CITIZEN
                            </span> */}
                            <Image
                                src="/images/clause-logo-bg-removal-rounded.png"
                                alt="Studio Citizen Logo"
                                width={50}
                                height={56}
                                />
                            <h2 className="text-[#fff] hover:text-[#B6CD5E] py-2 px-2 text-xl inter-medium tracking-wide">Clause</h2>
                        </Link>
                        <Link href="mailTo:youremail@domain.com" className="
                            w-full flex flex-row
                            text-[#9CA8B7] hover:text-[#B6CD5E]
                            items-center justify-center
                            lg:justify-start
                            " > 
                               <AiOutlineMail className="mt-[5px]"/> <span className="ml-2">youremail@domain.com</span>
                        </Link>
                         <Link href="mailTo:youremail@domain.com" className="
                            w-full flex flex-row 
                            text-[#9CA8B7] hover:text-[#B6CD5E]
                            items-center justify-center
                            lg:justify-start
                            " > 
                               <MdPermPhoneMsg className="mt-[5px]"/> <span className="ml-2">+621 987 654</span>
                        </Link>
                    </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
                    {/* Column 1 */}
                    <div>
                        <h5 className="text-[16px] text-white inter-medium mt-9 tracking-wide"> Solutions</h5>
                        <ul className="w-full space-y-2 pt-3">
                            {footerSolutions.map((item, index) => (
                                <li key={index + item.href}>
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="hover:text-[#B6CD5E] transition-colors tracking-wide text-[#9CA8B7] text-[14px]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 2 */}
                    <div>
                        <h5 className="text-[16px] text-white inter-medium mt-9 tracking-wide"> Support </h5>
                        <ul className="w-full space-y-2 pt-3">
                            {footerCustomers.map((item, index) => (
                                <li key={index + item.href}>
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="hover:text-[#B6CD5E] transition-colors tracking-wide text-[#9CA8B7] text-[14px]"
                                        
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h5 className="text-[16px] text-white inter-medium mt-9 tracking-wide"> Resources </h5>
                        <ul className="w-full space-y-2 pt-3">
                            {footerResources.map((item, index) => (
                                <li key={index + item.href}>
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="hover:text-[#B6CD5E] transition-colors tracking-wide text-[#9CA8B7] text-[14px]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>               
            </div>
            <div className="
                flex flex-col lg:flex-row 
                justify-center lg:justify-between
                items-center lg:items-start
                gap-10
                lg:gap-0
                bg-[#031111]
                py-10 px-10 lg:px-30
                ">
                <p className="text-[#9CA8B7] text-[12px]">Copyright 2024 Cluase. All rights reserved.</p>

                <div className="flex flex-row gap-5">
                    <FaTwitter />         
                    <FaLinkedinIn />
                    <FaInstagram />
                    <FaYoutube />

                            
                </div>
                </div>  
        </footer>
    )
}