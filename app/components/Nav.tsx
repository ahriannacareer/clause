"use client"
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

const navigation = [
    {category: "solutions", subcategories: [
        "Link 1",
        "Link 2",
        "Link 3",
        "Link 4",
        "Link 5"
    ]},
    {category: "customers", subcategories: [
        "Link 1",
        "Link 2",
        "Link 3",
        "Link 4",
        "Link 5"
    ]}
]


export default function Nav() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
        }, [open]);

    return (
        <header className="sticky top-0 z-50 mx-auto w-full backdrop-blur-md ">
            <div className="">
                <nav className="flex flex-row justify-between text-[#282826] w-full z-1 px-5 lg:px-15 py-5 ">
                    <div className="flex flex-nowrap items-start ">
                        <div className="flex flex-row flex-nowrap items-start hidden w-auto lg:flex">
                            <Image
                                className="rounded-lg" 
                                src="/images/clause-logo-bg-removal-rounded.png"
                                alt="Brand logo"
                                width={40}
                                height={20}
                                priority
                            />
                            <h2 className="text-[#0A3937] py-2 px-2 text-xl inter-medium-bold tracking-wide self-start">Clause</h2>
                        </div>

                        <div className="py-[2.5px] pl-12 hidden lg:block">
                            <ul className="list-none flex flex-nowrap items-center gap-4 whitespace-nowrap">
                                {navigation.map((item) => (
                                    <li className="relative px-2 py-2 group " key={item.category}> 
                                        <span className="flex items-center gap-1 inter-medium nav-hover">
                                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)} <IoIosArrowDown />
                                        </span>
                                    
                                        <div className="absolute top-[100%] bg-[#fff] px-7 py-4 rounded-sm hidden group-hover:block w-[20vw]">
                                            <ul>
                                                { item.subcategories.map((sub) => (
                                                    
                                                    <li key={sub} className="py-1">
                                                        <Link
                                                            href={``}
                                                            className="font-light nav-hover">
                                                                {sub}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                                <li className="relative px-2 py-1">
                                    <Link
                                        href=""
                                        className="inter-medium nav-hover">
                                            Pricing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-nowrap items-end hidden lg:block mt-2">
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
                                ">
                                Log In    
                            </Link>

                        <Link
                            href=""
                            className="
                                px-5 py-3 
                                cta-green
                                font-normal
                                rounded-xl
                                shadow-lg
                                inter-medium
                            ">
                                Start Now    
                            </Link>    
                    </div>

                    {/* Mobile Navigation */}
                   <div className="w-full lg:hidden flex flex-row justify-between">
                     <div className="flex flex-nowrap items-start ">
                            <Image
                                className="rounded-lg"
                                src="/images/clause-logo-bg-removal-rounded.png"
                                alt="Brand logo"
                                width={40}
                                height={20}
                                priority
                            />
                            <h2 className="text-[#0A3937] py-2 px-2 text-xl inter-medium-bold tracking-wide">Clause</h2>
                        </div>
                    <button
                        type="button"
                        className="text-black lg:hidden cursor-pointer "
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle navigation menu"
                        >
                        <span className="text-2xl">{open ? "✕" : "☰"}</span>
                    </button>
                   </div>
                    {/* Mobile dropdown menu */}
                    {open && (
                        <nav className={`
                            bg-[#F6F6F4]
                            fixed top-0 left-0
                            w-full
                            h-[calc(100dvh-5rem)]
                            overflow-y-auto
                            overscroll-contain
                            z-50
                            px-15
                            py-10 pb-20
                            lg:hidden
                            ${open ? "animate__animated animate__slideInRight" : ""}
                        `}
                        >
                            <div className="flex flex-row flex-nowrap justify-between mb-10">
                                <div className="flex flex-row flex-nowrap w-auto lg:flex">
                                    <Image
                                        className="rounded-lg" 
                                        src="/images/clause-logo-bg-removal-rounded.png"
                                        alt="Brand logo"
                                        width={40}
                                        height={20}
                                        priority
                                    />
                                    <h2 className="text-[#0A3937] py-2 px-2 text-xl inter-medium-bold tracking-wide self-start">Clause</h2>
                                </div>
                                <button
                                    type="button"
                                    className="text-black lg:hidden cursor-pointer "
                                    onClick={() => setOpen(!open)}
                                    aria-label="Toggle navigation menu"
                                    >
                                    <span className="text-md">Close</span>
                                </button>
                            </div>
                            <div className={`flex flex-col gap-5 mb-5 items-start lg:hidden mt-2
                                ${ open ? "animate__animated animate__slideInRight" : ""}
                                `}>
                                <Link
                                    href=""
                                    className="
                                        inter-medium-bold
                                        text-[1.1em]
                                        text-[#282826]
                                        flex
                                        ease-in-out
                                        duration-100
                                        hover:text-[#B6CD5E]
                                        ">
                                        Log In<span className="pt-1 pl-1"><MdOutlineLogin /></span>   
                                    </Link>

                                <Link
                                    href=""
                                    className="
                                        inter-medium-bold
                                        text-[#0A3937]
                                        text-[1.1em]
                                        flex
                                        ease-in-out
                                        duration-100
                                        hover:text-[#B6CD5E]
                                    ">
                                        Get Started <span className="pt-1 pl-1"><IoIosArrowForward /></span> 
                                    </Link>    
                            </div>
                        
                            {navigation.map((item) => (
                                <ul className={`
                                    flex flex-col 
                                    gap-4 py-5
                                    
                                    `}  key={item.category}>
                                    <li className="text-[#0A3937] inter-medium-bold"> 
                                        <span className={`text-[1.1em]
                                            ${ open ? "block animate__animated animate__fadeInRight animate__delay-2s" : ""}
                                            `}>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                                        <ul className="">
                                            { item.subcategories.map((sub) => ( 
                                                <li key={sub} className="py-3 pl-5 text-[#282826]/80 border-b border-[#D6D9D3]/30 mobile-nav">
                                                    <Link
                                                        href={``}
                                                        className={`
                                                            text-[1em]
                                                            font-light 
                                                            ${ open ? "block animate__animated animate__fadeInRight animate__delay-3s" : ""}
                                                            `}>
                                                            {sub}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                   
                            
                                </ul>
                            ))}
                            <Link
                                    href=""
                                    className="
                                        inter-medium-bold
                                        text-[#0A3937]
                                        text-[1.1em]
                                        flex
                                        ease-in-out
                                        duration-100
                                        hover:text-[#B6CD5E]
                                    ">
                                        Pricing <span className="pt-1 pl-1"></span> 
                                    </Link>    
                        </nav>
                    )}
                    
                </nav>
                
            </div>
        </header>
    )
}