import { twMerge } from "tailwind-merge"
import { PropsWithChildren } from "react"

const Card = ({
    className,
    children,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <div
            className={twMerge(
                "bg-gray-800 bg-opacity-35 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
                className
            )}
        >
            {children}
        </div>
    )
}

export default Card
