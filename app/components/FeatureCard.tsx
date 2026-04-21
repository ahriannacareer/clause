
import Link from "next/link";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";

type Props = {
    cardHeading: string;
    cardSubHeading: string;
    seriesCreator: string;
    meta?: string;
    spotlightDescription: string;
    spotlightThumbnail: string;
    spotlightURL: string;
}

export default function FeatureCard() {
    return (
        <div className="
            bg-[#D6D9D3]
            w-full 
            relative 
            flex 
            flex-col 
            h-full
            items-center
            justify-center
            gap-10
            "
            >
            
            <h4 className=""></h4>
        </div>
    )
}