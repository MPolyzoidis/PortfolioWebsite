import Image from 'next/image'
import placeholder from "../images/placeholder.png"
import ArrowUpRight from "../images/arrow-up-right-from-square-solid.svg"
import Background from "../components/Background"

const portofolioProjects = [
    {
        company: "Lorem Ipsum",
        year: "2024",
        title: "Lorem Ipsum 1",
        results: [
        { title: "Lorem Ipsum is simply dummy text of the printing" },
        { title: "Lorem Ipsum is simply dummy text of the printing" },
        { title: "Lorem Ipsum is simply dummy text of the printing" }
        ],
        link: "https://www.lipsum.com/",
        image: placeholder,
    },
    {
        company: "Lorem Ipsum",
        year: "2024",
        title: "Lorem Ipsum 2",
        results: [
        { title: "Lorem Ipsum is simply dummy text of the printing" },
        { title: "Lorem Ipsum is simply dummy text of the printing" },
        { title: "Lorem Ipsum is simply dummy text of the printing" }
        ],
        link: "https://www.lipsum.com/",
        image: placeholder,
    },
    {
        company: "Lorem Ipsum",
        year: "2024",
        title: "Lorem Ipsum 3",
        results: [
        { title: "Lorem Ipsum is simply dummy text of the printing" },
        { title: "Lorem Ipsum is simply dummy text of the printing" },
        { title: "Lorem Ipsum is simply dummy text of the printing" }
        ],
        link: "https://www.lipsum.com/",
        image: placeholder,
    }
]



const Projects = () => {
    return (
        <section className="pb-16 relative z-0">

            <Background />

            <div className="container">

                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">Lorem Ipsum</p>
                </div>

                <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>

                <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                <div className="flex flex-col gap-20 mt-10">
                    {portofolioProjects.map(project => (

                        <div 
                            key={project.title} 
                            className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] 
                            after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl
                            after:outline-white/20 px-8 pt-8 after:pointer-events-none">
                            
                            <div className="flex">
                                <div   
                                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 
                                    font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">

                                    <span>{project.company}</span>
                                    <span>&bull;</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>

                            <h3 className="font-serif text-2xl mt-2">{project.title}</h3>

                            <hr className="border-t-2 border-white/5 mt-4"/>

                            <ul className="flex flex-col gap-4 mt-4">
                                {project.results.map((result) => (
                                    <li className="text-sm text-white/50">{result.title}</li>
                                ))}
                            </ul>
                            
                            <a href={project.link}>

                                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold 
                                inline-flex items-center justify-center gap-2 mt-8">

                                    <span>View Live Site</span>
                                    <ArrowUpRight className="size-4"/>

                                </button>

                            </a>

                            <Image src={project.image} alt={project.title} className="mt-8 -mb-4"/>
                            
                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Projects