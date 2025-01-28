"use client"
import { useRef } from 'react'
import Card from './Card'
import CardHeader from './CardHeader'
import { motion } from "framer-motion"

const CardDraggableElements = ( { hobbies } : {hobbies : { title: string; emoji: string; left: string; top: string; } [] } ) => {

    const constraintRef = useRef(null);
    
    return (
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">

            <CardHeader 
                title="Beyond the Code" 
                description="Explore my interests and hobbies beyond the digital realm"
            />

            <div className="relative flex-1" ref={constraintRef}>

                {hobbies.map(hobby => (

                    <motion.div 
                        key={hobby.title} 
                        className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute" 
                        style={{left: hobby.left, top: hobby.top}}
                        drag
                        dragConstraints={constraintRef}>

                        <span className="font-medium text-gray-950">{hobby.title}</span>

                        <span>{hobby.emoji}</span>

                    </motion.div>

                ))}

            </div>

        </Card>
    )
}

export default CardDraggableElements