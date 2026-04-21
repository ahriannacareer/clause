
import Link from "next/link";
import Image from "next/image";
import { AiFillAppstore } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";

const smartNotes = [
    {
        index: 0,
        text: "New messages, comments, or replies",
        isChecked: "defaultChecked"
    },
    {
        index: 1,
        text: "Social emails",
        isChecked: ""
    },
    {
        index: 2,
        text: "Announcement and Update",
        isChecked: "defaultChecked"
    },
    {
        index: 3,
        text: "Reminders",
        isChecked: "defaultChecked"
    },
]

const taskMang = [
    {
        index: 0,
        text:
            <>
                Hello <span className="font-bold">@Ragip Diller</span>, could you sign the contract before March 12? Thank you in advance
            </>,
        name: "Bill Sanders",
        img: "/images/bill-profile-pic-white.png"
    },
    {
        index: 1,
        text:  
            <>
                 <IoDocument className="inline-block"/> Uploaded new contract
            </>,
        name: "Jane Cooper",
        img: "/images/jane-profile-pic-white.png"
    },
    
]
export default function Features() {
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

            bg-white
            mt-20
            md:mt-10
        ">
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
                            <AiFillAppstore />
                        </span>
                        Features
                </p>
                <h1 className="
                    text-[#0A3937] 
                    py-2 px-2 
                    text-[clamp(1rem,5vw,2.3rem)] 
                    inter-medium-bold 
                    text-center 
                    leading-10 
                    md:lg:leading-13 
                    lg:leading-15 
                    w-full
                    md:w-3/5">Latest advanced technologies to ensure everything you needs</h1>
                
                <p className="
                    text-[#282826]/80 
                    leading-5  md:leading-7 
                    py-2 px-10 md:px-2 
                    text-[clamp(12px,2vw,16px)] 
                    w-full
                    md:w-3/5 
                    inter-medium 
                    text-center"
                    >
                        Maximize your team's productivity and security with our affordable, user-friendly contract management system.
                </p>
                <div className="flex flex-col gap-15 lg:gap-5 items-center justify-center mt-20">
                    <div className="flex flex-row items-center justify-center">
                    {/* First Card */}
                        <div className="
                                bg-[#D6D9D3]
                                w-5/6 
                                relative 
                                flex 
                                flex-col md:flex-row
                                h-full lg:min-h-[350px]
                                pt-0 md:pt-10
                                items-center md:items-end
                                justify-center md:justify-end
                                rounded-lg
                                
                                "
                                >
                                <div className="
                                    w-full h-full lg:min-h-[350px]
                                    flex
                                    flex-col
                                    justify-between
                                    items-between
                                    gap-10 
                                    pt-10 pb-10 md:pb-20 md:pt-0

                                ">
                                    <div>
                                        <h4 className="
                                        text-[#0A3937] 
                                        text-[clamp(1rem,5vw,1.6rem)] 
                                        inter-medium
                                        text-center md:text-left
                                        leading-10 
                                        md:lg:leading-13 
                                        lg:leading-15 
                                        w-full
                                        px-6 md:pl-15  
                                        
                                        ">
                                        Dynamic dashboard
                                    </h4>
                                    <p className="
                                        text-[#282826]/80 
                                        leading-5  md:leading-6 
                                        text-[clamp(12px,2vw,14px)] 
                                        w-full
                                        inter-medium 
                                        text-center md:text-left
                                        px-6 md:pl-15 
                                        "
                                        >
                                            Clause helps legal teams work faster, smarter and more efficiently, delivering the visibility and data-driven insights to mitigate risk and esnure compliance.
                                    </p>
                                    </div>

                                    <Link
                                        href=""
                                        className="
                                            px-5 py-3 
                                            cta-green
                                            rounded-lg
                                            shadow-md
                                            inter-medium
                                            w-auto
                                            text-center
                                            mx-auto md:mx-15
                                            self-start
                                            text-[clamp(12px,2vw,14px)] 
                                            ">
                                            Explore all  
                                    </Link> 
                                </div>
                                <div className="
                                    w-full
                                    h-full
                                    flex
                                    flex-col
                                    justify-center
                                    p-1 md:pr-1 md:pb-1
                                ">
                                    <Image
                                        className="w-full h-full rounded-b-lg"
                                        src="/images/dashboard-rect.png"
                                        alt="Brand logo"
                                        width={500}
                                        height={40}
                                        priority
                                    />
                                </div>
                                
                        </div>
                    </div>
                    
                    <div className="flex flex-row items-center justify-center">
                        <div className="
                            w-full md:w-5/6
                            flex
                            flex-col lg:flex-row
                            gap-5
                            items-center lg:items-start
                        ">
                            {/* Second Card */}
                            <div className="
                                    bg-[#F6F6F4]
                                    w-5/6 
                                    relative 
                                    flex 
                                    flex-col 
                                    h-full 
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-lg
                                    py-10 pt-0
                                    "
                                    >
                                    <div className="
                                        bg-[#D6D9D3]
                                        w-full
                                        flex
                                        flex-col
                                        py-10 rounded-t-lg
                                    ">
                                    <h4 className="
                                        text-[#0A3937] 
                                        text-[clamp(1rem,5vw,1.6rem)] 
                                        inter-medium
                                        text-center
                                        leading-10 
                                        md:lg:leading-13 
                                        lg:leading-15 
                                        w-full
                                        px-6

                                        
                                        ">
                                        Smart notifications
                                    </h4>
                                    <p className="
                                        text-[#282826]/80 
                                        leading-5  md:leading-6 
                                        text-[clamp(12px,2vw,14px)] 
                                        w-full
                                        inter-medium 
                                        text-center
                                        px-6
                                        
                                        
                                        "
                                        >
                                            Maximize your team's productivity and security with our affordable, user-friendly contract management system.
                                    </p>
                                    </div>
                                    
                                    <div className="
                                        bg-[#F6F6F4]
                                        w-full
                                        flex
                                        flex-col
                                        relative
                                        lg:min-h-[320px]
                                        ">
                                        <div className="pointer-events-none absolute bottom-0 z-10 w-full h-[20%] bg-gradient-to-t from-[#F6F6F4] to-transparent" />
                                        <div className="
                                                flex
                                                flex-row
                                                flex-nowrap
                                                justify-between
                                                py-7
                                                pl-0 md:pl-10

                                                
                                            ">
                                                <p className="
                                                    text-[#0A3937]/80 
                                                    leading-5  md:leading-7 
                                                    
                                                    px-10 md:px-2 

                                                    pt-1
                                                    text-[clamp(14px,2vw,16px)] 
                                                    w-auto
                                                    md:w-3/5 
                                                    inter-medium-bold 
                                                    text-center md: text-left
                                                    
                                                    
                                                    "
                                                    >
                                                        Email notification
                                                </p>
                                                <Link
                                                    href=""
                                                    className="
                                                        px-4 py-1 
                                                        text-[#0A3937]/80 
                                                        text-[clamp(12px,2vw,12px)] 
                                                        rounded-lg
                                                        shadow-md
                                                        inter-medium
                                                        mr-10
                                                        text-center
                                                        self-start
                                                        ">
                                                        Save    
                                                </Link>
                                                
                                            </div>
                                            <div className="flex flex-col gap-0 justify-center px-10 ">
                                                
                                                { smartNotes.map((row) => (
                                                        <div className="
                                                            flex
                                                            flex-row
                                                            flex-nowrap
                                                            justify-between 
                                                            py-3
                                                            border-t border-[#D6D9D3]/30
                                                            
                                                            px-0 md:px-2
                                                        " key={row.index}> 
                                                            <p className="
                                                                text-[#282826]/80 
                                                                text-[clamp(12px,2vw,13px)] 
                                                                leading-5  lg:leading-7 

                                                                pt-0
                                                                w-auto
                                                                md:w-4/5 
                                                                inter-medium
                                                                text-left
                                                                "
                                                                >
                                                                    {row.text}
                                                            </p>
                                                            <label className="relative inline-block w-10 h-5">
                                                                <input type="checkbox" className="peer sr-only" />
                                                                <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-teal-700 transition"></div>
                                                                <div className="absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                                                            </label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                    </div>
                                    
                            </div>      
                            {/* Third Card */}
                            <div className="
                                    bg-[#F6F6F4]
                                    w-5/6 
                                    relative 
                                    flex 
                                    flex-col 
                                    h-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-lg
                                    py-10 pt-0
                                    "
                                    >
                                    <div className="
                                        bg-[#D6D9D3]
                                        w-full
                                        flex
                                        flex-col
                                        py-10 rounded-t-lg
                                    ">
                                    <h4 className="
                                        text-[#0A3937] 
                                        text-[clamp(1rem,5vw,1.6rem)] 
                                        inter-medium
                                        text-center
                                        leading-10 
                                        md:lg:leading-13 
                                        lg:leading-15 
                                        w-full
                                        px-6 
                                                

                                        
                                        ">
                                        Task Managment
                                    </h4>
                                    <p className="
                                        text-[#282826]/80 
                                        leading-5  md:leading-6 
                                        text-[clamp(12px,2vw,14px)] 
                                        w-full
                                        inter-medium 
                                        text-center
                                        px-6
                                        
                                        
                                        "
                                        >
                                            Discuss contract queries, manage tasks, secure approvals, track progress in the workplace.
                                    </p>
                                    </div>
                                    
                                    <div className="
                                        bg-[#F6F6F4]
                                        w-full
                                        flex
                                        flex-col
                                        relative
                                        lg:min-h-[320px]
                                        ">
                                        <div className="pointer-events-none absolute bottom-0 z-10 w-full h-[20%] bg-gradient-to-t from-[#F6F6F4] to-transparent" />
                                            <div className="
                                                flex
                                                flex-row
                                                flex-nowrap
                                                justify-between
                                                py-7
                                                pl-0 md:pl-10
                                            ">
                                                <p className="
                                                    text-[#0A3937]/80 
                                                    leading-5  md:leading-7 
                                                    
                                                    px-10 md:px-2 

                                                    pt-1
                                                    text-[clamp(14px,2vw,16px)] 
                                                    w-auto
                                                    md:w-3/5 
                                                    inter-medium-bold 
                                                    text-center md: text-left
                                                    
                                                    
                                                    "
                                                    >
                                                        Activity
                                                </p>
                                                <Link
                                                    href=""
                                                    className="
                                                        px-4 py-1 
                                                        text-[#0A3937]/80 
                                                        text-[clamp(12px,2vw,12px)] 
                                                        rounded-lg
                                                        shadow-md
                                                        inter-medium
                                                        mr-10
                                                        self-start
                                                        ">
                                                        + Message    
                                                </Link>
                                                
                                            </div>
                                            <div className="flex flex-col gap-5 justify-center relative px-10">
                                                
                                                { taskMang.map((row) => (
                                                        <div className="
                                                            flex
                                                            flex-col
                                                            flex-nowrap
                                                            justify-between 
                                                            py-3
                                                            rounded-md
                                                            shadow-sm
                                                            bg-white
                                                            px-2 md:px-2 
                                                        " key={row.index}> 
                                                            <div className="flex flex-row justify-between ">
                                                                <div className="w-2/3 flex flex-row "> 
                                                                    <Image
                                                                        className="rounded-lg"
                                                                        src={row.img}
                                                                        alt="Brand logo"
                                                                        width={45}
                                                                        height={40}
                                                                        priority
                                                                    />
                                                                    <p className="
                                                                        text-[#0A3937]/80 
                                                                        text-[clamp(12px,2vw,14px)] 
                                                                        leading-5  lg:leading-6 
                                                                        pt-3 pl-3
                                                                        w-auto
                                                                        md:w-3/5 lg:pt-2
                                                                        inter-medium-bold
                                                                        text-left
                                                                        "
                                                                        >
                                                                            {row.name}
                                                                    </p>
                                                                </div>
                                                                
                                                                <div className="w-[40px]  mt-[11px] h-[15px] rounded-full bg-[#D6D9D3]"> </div>
                                                            </div>
                                                            <div className="flex flex-row pl-14">
                                                                <p className="
                                                                    text-[#282826]/80 
                                                                    text-[clamp(12px,2vw,13px)] 
                                                                    leading-5  lg:leading-6  

                                                                    w-auto
                                                                    inter-medium
                                                                    text-left
                                                                    "
                                                                    >
                                                                        {row.text}
                                                                </p>
                                                            </div>
                                                            
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                    </div>
                                    
                            </div>       
                        </div>    
                    </div>  
                </div>
            </div>

        </div>
    )
}