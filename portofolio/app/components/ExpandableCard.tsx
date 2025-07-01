"use client";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowDown from "../images/arrow-down-solid.svg";
import React from "react";

const ExpandableCard = ({
    className,
    children,
}: PropsWithChildren<{ className?: string }>) => {
    const [isOpen, setIsOpen] = useState(false);
    const childrenArray = React.Children.toArray(children);
    const header = childrenArray[0]; // Assuming that the first child is the header
    const restOfChildren = childrenArray.slice(1);

    return (
        <motion.div
            className={twMerge(
                "bg-gray-800 bg-opacity-35 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
                className
            )}
            layout
            style={{ overflow: "hidden" }}
        >
            <motion.div layout="position">{header}</motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {restOfChildren}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-center items-center m-5">
                <motion.div layout="position" className="">
                    <button
                        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <ArrowDown
                            className={`fill-white size-4 transition-transform duration-1000 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ExpandableCard;
