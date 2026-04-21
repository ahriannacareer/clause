
import Link from "next/link";
import Image from "next/image";
import { IoMdQuote } from "react-icons/io";

export default function Testimonies() {
    return (
        <div className="
            w-full 
            relative 
            flex 
            h-full 
            flex-col 
            items-center
            justify-center
            gap-40
            py-20
            px-10
            bg-white
        ">
            <div className="flex flex-col gap-20 justify-center items-centerw-full"> 
            
                <h4 className="
                    text-[#0A3937] 
                    font-lg
                    text-center
                    text-[clamp(1rem,5vw,2rem)] 
                    inter-medium  lg:px-35
                    ">
                    <IoMdQuote className="text-center w-full my-5"/>
                    Clause is helping our company to decrease operational expenses and turnaround time, while increasing the compliance, resource allocation and effectiveness of our contract management.
                </h4>
                <div className="flex flex-col gap-3 justify-center items-center">
                    
                    <Image
                        className="w-1/10 h-full rounded-b-lg"
                        src="/images/companies/pfp-combo.png"
                        alt="Brand logo"
                        width={500}
                        height={40}
                        priority
                    />
                    <p className="
                        text-[#0A3937] 
                        text-[clamp(14px,5vw,1.1rem)] 
                    ">Darlena Robertson</p>
                    <p className="text-[#000]/70 ">Head of Strategy at Mailchimp</p>
                </div>

                <div className="
                    flex 
                    flex-col lg:flex-row
                    gap-15 lg:gap-10 
                    justify-center items-center

                    md:justify-between
                    text-[#0A3937] 
                    bg-[#F6F6F4]
                    w-full
                    rounded-lg
                    py-10 
                    lg:px-35
                    ">
                    <div className="flex flex-col">
                            <p className="
                                text-[clamp(3rem,5vw,3.5rem)] 
                                inter-medium
                                text-center
                                ">2021</p>
                            <p className="
                                text-[clamp(14px,5vw,14px)] 
                                inter-medium
                                text-center">Clause Founded</p>
                        </div> 
                        
                        <div className="flex flex-col">
                            <p className="
                                text-[clamp(3rem,5vw,3.5rem)] 
                                inter-medium
                                text-center
                                ">50K+</p>
                            <p className="
                                text-[clamp(14px,5vw,14px)] 
                                inter-medium
                                text-center
                                ">Active users</p>
                        </div>

                        <div className="flex flex-col">
                            <p className="
                                text-[clamp(3rem,5vw,3.5rem)] 
                                inter-medium
                                text-center
                                ">1K+</p>
                            <p className="
                                text-[clamp(14px,5vw,14px)] 
                                inter-medium
                                text-center
                                ">Company Partners</p>
                        </div>  

                </div>
            </div>
        </div>
    )
}