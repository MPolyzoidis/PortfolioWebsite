"use client"

//Reusable Component Imports
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
import CardHeader from "../components/CardHeader"
import ExpandableCard from "../components/ExpandableCard"
import ToolboxRondo from "../components/ToolboxRondo"

//Package Imports
import Image from "next/image"
import { Element } from "react-scroll"
import dynamic from "next/dynamic"

//Images Imports
import placeholder from "../images/placeholder.png"

//Toolbox Icons Imports
import CSSIcon from "../images/TechIcons/css3-icon.svg"
import DockerIcon from "../images/TechIcons/docker-icon.svg"
import FigmaIcon from "../images/TechIcons/figma-icon.svg"
import FlutterIcon from "../images/TechIcons/flutter-icon.svg"
import GitHubIcon from "../images/TechIcons/github-icon.svg"
import GitLabIcon from "../images/TechIcons/gitlab-icon.svg"
import HTMLIcon from "../images/TechIcons/html5-icon.svg"
import JavaIcon from "../images/TechIcons/java-icon.svg"
import CSharpIcon from "../images/TechIcons/c-sharp-icon.svg"
import JavaScriptIcon from "../images/TechIcons/js-icon.svg"
import TypeScriptIcon from "../images/TechIcons/ts-icon.svg"
import MySQLIcon from "../images/TechIcons/mysql-icon.svg"
import PostgreSQLIcon from "../images/TechIcons/postgresql-icon.svg"
import NodeIcon from "../images/TechIcons/node-icon.svg"
import ExpressIcon from "../images/TechIcons/express-icon.svg"
import ReactIcon from "../images/TechIcons/react-icon.svg"
import TailwindIcon from "../images/TechIcons/tailwind-icon.svg"
import TrelloIcon from "../images/TechIcons/trello-icon.svg"
import UnityIcon from "../images/TechIcons/unity-icon.svg"
import ViteIcon from "../images/TechIcons/vite-icon.svg"
import NextIcon from "../images/TechIcons/next-icon.svg"
import TechIcon from "../components/TechIcon"
import CardDraggableElements from "../components/CardDraggableElements"
import ArrowUpRight from "../images/arrow-up-right-from-square-solid.svg"

//Other Icons Imports
import FileIcon from "../images/file-Icon.svg"
import BasketIcon from "../images/basketIcon.svg"
import ToolboxIcon from "../images/toolboxIcon.svg"

const toolboxItems1 = [
    {
        title: "HTML",
        iconType: HTMLIcon,
    },
    {
        title: "CSS",
        iconType: CSSIcon,
    },
    {
        title: "JavaScript",
        iconType: JavaScriptIcon,
    },
    {
        title: "TypeScript",
        iconType: TypeScriptIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "Vite",
        iconType: ViteIcon,
    },
    {
        title: "Next.js",
        iconType: NextIcon,
    },
]

const toolboxItems2 = [
    {
        title: "Tailwind CSS",
        iconType: TailwindIcon,
    },
    {
        title: "GitHub",
        iconType: GitHubIcon,
    },
    {
        title: "GitLab",
        iconType: GitLabIcon,
    },
    {
        title: "Java",
        iconType: JavaIcon,
    },
    {
        title: "C#",
        iconType: CSharpIcon,
    },
    {
        title: "Flutter",
        iconType: FlutterIcon,
    },
    {
        title: "MySQL",
        iconType: MySQLIcon,
    },
]

const toolboxItems3 = [
    {
        title: "PostgreSQL",
        iconType: PostgreSQLIcon,
    },
    {
        title: "Node.js",
        iconType: NodeIcon,
    },
    {
        title: "Express",
        iconType: ExpressIcon,
    },
    {
        title: "Figma",
        iconType: FigmaIcon,
    },
    {
        title: "Docker",
        iconType: DockerIcon,
    },
    {
        title: "Unity",
        iconType: UnityIcon,
    },
    {
        title: "Trello",
        iconType: TrelloIcon,
    },
]

const toolboxItems = [...toolboxItems1, ...toolboxItems2, ...toolboxItems3]

const hobbies = [
    {
        title: "Football",
        emoji: "⚽",
        left: "5%",
        top: "5%",
    },
    {
        title: "Basketball",
        emoji: "🏀",
        left: "50%",
        top: "5%",
    },
    {
        title: "Ipsum4",
        emoji: "⚽",
        left: "35%",
        top: "40%",
    },
    {
        title: "Ipsum3",
        emoji: "⚽",
        left: "10%",
        top: "35%",
    },
    {
        title: "Ipsum5",
        emoji: "⚽",
        left: "70%",
        top: "45%",
    },
    {
        title: "Ipsum6",
        emoji: "⚽",
        left: "5%",
        top: "65%",
    },
    {
        title: "Ipsum7",
        emoji: "⚽",
        left: "45%",
        top: "70%",
    },
]

// Dynamically import Map with SSR turned off
const Map = dynamic(() => import("../components/Map"), {
    ssr: false,
})

const AboutSection = () => {
    return (
        <Element name="About">
            <div className="py-20 lg:py-28 relative z-0">
                <div className="container">
                    <SectionHeader
                        eyebrow="About Me"
                        title="A Glimpse Into My World"
                        description="Don't just take my word for it. See what clients have to say about my work"
                    />

                    <div className="mt-20 flex flex-col gap-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                            <Card className="h-[320px] md:h-[400px] lg:h-[384px] md:col-span-2 lg:col-span-1 flex flex-col justify-between">
                                <CardHeader
                                    title="My CV"
                                    description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                                    Icon={FileIcon}
                                />

                                <div className="w-40 mx-auto mt-0">
                                    <Image
                                        src={placeholder}
                                        alt="Placeholder"
                                    />
                                </div>

                                <div className="mb-4 mx-auto w-max">
                                    <button className="group bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 inline-flex items-center px-6 h-10 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gradient-to-r hover:from-emerald-300/80 hover:to-sky-400/80 hover:text-white transition duration-300">
                                        <span className="font-semibold">
                                            Contact Me
                                        </span>
                                        <ArrowUpRight className="size-4 fill-gray-900 group-hover:fill-white transition duration-300" />
                                    </button>
                                </div>
                            </Card>

                            {/* This is a div that serves the purpose of displaying the ExpandableCard on small viewports and the Card on medium and large viewports through block and hidden */}
                            <div className="md:col-span-3 lg:col-span-2">
                                <ExpandableCard className="block md:hidden">
                                    <CardHeader
                                        title="My Toolbox"
                                        description="Explore the technologies I use to create exceptional digital experiences"
                                        Icon={ToolboxIcon}
                                    />

                                    <div className="px-2">
                                        {toolboxItems.map((item) => (
                                            <div
                                                key={item.title}
                                                className="inline-flex items-center gap-4 py-2 px-3 m-1.5 outline outline-2 outline-white/10 rounded-lg"
                                            >
                                                <TechIcon
                                                    component={item.iconType}
                                                />
                                                <span className="font-semibold">
                                                    {item.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </ExpandableCard>

                                <Card className="hidden md:block">
                                    <CardHeader
                                        title="My Toolbox"
                                        description="Explore the technologies I use to create exceptional digital experiences"
                                        Icon={ToolboxIcon}
                                    />

                                    <ToolboxRondo
                                        toolboxItems={toolboxItems1}
                                        itemsWrapperClassName="animate-move-left hover:[animation-play-state:paused]"
                                    />
                                    <ToolboxRondo
                                        toolboxItems={toolboxItems2}
                                        className="mt-6"
                                        itemsWrapperClassName="-translate-x-1/2 animate-move-right hover:[animation-play-state:paused]"
                                    />
                                    <ToolboxRondo
                                        toolboxItems={toolboxItems3}
                                        className="mt-6 mb-6"
                                        itemsWrapperClassName="animate-move-left hover:[animation-play-state:paused]"
                                    />
                                </Card>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
                            <CardDraggableElements
                                hobbies={hobbies}
                                CardHeaderIcon={BasketIcon}
                            />

                            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
                                <Map />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutSection
