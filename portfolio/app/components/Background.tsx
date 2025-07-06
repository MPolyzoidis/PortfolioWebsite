"use client"
import { motion } from "framer-motion"

const Background = () => {
    return (
        <motion.div
            className="absolute inset-0 -z-30 opacity-5 h-full w-full overflow-hidden bg-[url('/background.png')] bg-[length:100%_auto] bg-repeat-y bg-top"
            layout
            transition={{ duration: 0.75, ease: "easeInOut" }}
        ></motion.div>
    )
}

export default Background
