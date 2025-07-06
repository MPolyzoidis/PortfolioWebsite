"use client"
import { FC, SVGProps, useRef } from "react"
import Card from "./Card"
import CardHeader from "./CardHeader"
import { motion } from "framer-motion"
import TechIcon from "./TechIcon"

const CardDraggableElements = ({
    currentTools,
    CardHeaderIcon,
}: {
    currentTools: {
        title: string
        iconType: React.ElementType
        left: string
        top: string
    }[]
    CardHeaderIcon?: FC<SVGProps<SVGElement>>
}) => {
    const constraintRef = useRef(null)

    return (
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
                title="My Current Toolbelt"
                description="Tools I currently use daily"
                Icon={CardHeaderIcon}
            />

            <div className="relative flex-1" ref={constraintRef}>
                {currentTools.map((currentTool) => (
                    <motion.div
                        key={currentTool.title}
                        className="inline-flex items-center justify-center gap-2 px-6 py-1.5 outline outline-2 outline-white/10 bg-neutral-900 rounded-full absolute"
                        style={{ left: currentTool.left, top: currentTool.top }}
                        drag
                        dragConstraints={constraintRef}
                    >
                        <span className="font-semibold">
                            {currentTool.title}
                        </span>

                        <TechIcon component={currentTool.iconType} />
                    </motion.div>
                ))}
            </div>
        </Card>
    )
}

export default CardDraggableElements
