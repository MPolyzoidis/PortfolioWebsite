"use client"
import { Element } from "react-scroll"
import Image from 'next/image'
import placeholder from "../images/placeholder.png"
import ArrowUpRight from "../images/arrow-up-right-from-square-solid.svg"
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const portofolioProjects = [
    {
        company: "Lorem Ipsum",
        year: "2024",
        title: "Lorem Ipsum 1",
        results: [
        { title: "Lorem Ipsum is simply dummy text of the printing 1" },
        { title: "Lorem Ipsum is simply dummy text of the printing 2" },
        { title: "Lorem Ipsum is simply dummy text of the printing 3" }
        ],
        link: "https://www.lipsum.com/",
        image: placeholder,
    },
    {
        company: "Lorem Ipsum",
        year: "2024",
        title: "Lorem Ipsum 2",
        results: [
        { title: "Lorem Ipsum is simply dummy text of the printing 4" },
        { title: "Lorem Ipsum is simply dummy text of the printing 5" },
        { title: "Lorem Ipsum is simply dummy text of the printing 6" }
        ],
        link: "https://www.lipsum.com/",
        image: placeholder,
    },
    {
        company: "Lorem Ipsum",
        year: "2024",
        title: "Lorem Ipsum 3",
        results: [
        { title: "Lorem Ipsum is simply dummy text of the printing 7" },
        { title: "Lorem Ipsum is simply dummy text of the printing 8" },
        { title: "Lorem Ipsum is simply dummy text of the printing 9" }
        ],
        link: "https://www.lipsum.com/",
        image: placeholder,
    }
]



const Projects = () => {
    return (
        <Element name="Projects">
            <section className="pb-20 lg:py-24 z-0">

                <div className="container">

                    <SectionHeader 
                        eyebrow="Lorem Ipsum"
                        title="Featured Projects"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />

                    <div className="flex flex-col gap-20 mt-10 md:mt-20">
                        {portofolioProjects.map(project => (

                            <Card 
                                key={project.title} 
                                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                                
                                <div className="lg:grid lg:grid-cols-2 lg:gap-16">

                                    <div className="lg:pb-16">
                                        <div className="flex">
                                            <div   
                                                className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 
                                                font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">

                                                <span>{project.company}</span>
                                                <span>&bull;</span>
                                                <span>{project.year}</span>
                                            </div>
                                        </div>

                                        <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>

                                        <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>

                                        <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                            {project.results.map((result) => (
                                                <li key={result.title} className="text-sm md:text-base text-white/50">{result.title}</li>
                                            ))}
                                        </ul>
                                        
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">

                                            <button className="group bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold 
                                            inline-flex items-center justify-center gap-2 mt-8 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:text-white transition duration-300">

                                                <span>View Live Site</span>
                                                <ArrowUpRight className="size-4 group-hover:fill-white transition duration-300"/>

                                            </button>

                                        </a>
                                    </div>
                                    
                                    <div className="relative">
                                        <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                                    </div>

                                </div>
                                
                            </Card>

                        ))}

                    </div>

                </div>

            </section>
        </Element>
    )
}

export default Projects