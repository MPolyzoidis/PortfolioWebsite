'use client';
import { twMerge } from "tailwind-merge";
import { PropsWithChildren, useState } from "react";
import {motion} from "framer-motion";
import React from "react";

const ExpendableCard = ({ className, children } : PropsWithChildren<{className?: string}> ) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const childrenArray = React.Children.toArray(children);
    const header = childrenArray[0]; // Assuming that the first child is the header
    const restOfChildren = childrenArray.slice(1);

    return (
        <motion.div 
            className={twMerge("bg-gray-800 bg-opacity-35 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",className)}
            onClick={() => setIsOpen(!isOpen)}
            layout
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
            style={{ overflow: 'hidden' }}>

            <motion.div layout="position">
                {header}
            </motion.div>

            <motion.div>
                {isOpen && restOfChildren}
            </motion.div>

        </motion.div>
    )
}

export default ExpendableCard