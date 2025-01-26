import { twMerge } from "tailwind-merge";
import ArrowDown from "../images/downArrow.svg"

const CardHeader = ( { title, description, className } : { title: string, description: string; className?: string; } ) => {
    return (
        <div className={ twMerge("flex flex-col", className )}>
            <div className="inline-flex items-center gap-2">
                <ArrowDown className="fill-emerald-300 size-9"/>
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>

            <p className="text-sm text-white/60 mt-2">{description}</p>
        </div>
    )
}

export default CardHeader