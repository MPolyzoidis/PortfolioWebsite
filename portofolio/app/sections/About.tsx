//Reusable Component Imports
import Background from "../components/Background"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
import CardHeader from "../components/CardHeader"

//Images Imports
import Image from 'next/image'
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
import ExpandableCard from "../components/ExpandableCard"
import Gmap from "../components/GMap"

const toolboxItems = [
    {
        title: "HTML",
        iconType: HTMLIcon 
    },
    {
        title: "CSS",
        iconType: CSSIcon 
    },
    {
        title: "JavaScript",
        iconType: JavaScriptIcon 
    },
    {
        title: "TypeScript",
        iconType: TypeScriptIcon 
    },
    {
        title: "React",
        iconType: ReactIcon 
    },
    {
        title: "Vite",
        iconType: ViteIcon 
    },
    {
        title: "Next.js",
        iconType: NextIcon 
    },
    {
        title: "Tailwind CSS",
        iconType: TailwindIcon 
    },
    {
        title: "GitHub",
        iconType: GitHubIcon 
    },
    {
        title: "GitLab",
        iconType: GitLabIcon 
    },
    {
        title: "Java",
        iconType: JavaIcon 
    },
    {
        title: "C#",
        iconType: CSharpIcon 
    },
    {
        title: "Flutter",
        iconType: FlutterIcon 
    },
    {
        title: "MySQL",
        iconType: MySQLIcon 
    },
    {
        title: "PostgreSQL",
        iconType: PostgreSQLIcon 
    },
    {
        title: "Node.js",
        iconType: NodeIcon 
    },
    {
        title: "Express",
        iconType: ExpressIcon 
    },
    {
        title: "Figma",
        iconType: FigmaIcon 
    },
    {
        title: "Docker",
        iconType: DockerIcon 
    },
    {
        title: "Unity",
        iconType: UnityIcon 
    },
    {
        title: "Trello",
        iconType: TrelloIcon 
    }
]

const hobbies = [
    {
        title:"Ipsum1",
        emoji:"⚽"
    },
    {
        title:"Ipsum2",
        emoji:"⚽"
    },
    {
        title:"Ipsum3",
        emoji:"⚽"
    },
    {
        title:"Ipsum4",
        emoji:"⚽"
    },
    {
        title:"Ipsum5",
        emoji:"⚽"
    },
    {
        title:"Ipsum6",
        emoji:"⚽"
    },
]


const AboutSection = () => {
  return (
    <div className="py-20 relative z-0">

        <div className="container">

            <Background />

            <SectionHeader 
                eyebrow="About Me" 
                title="A Glimpse Into My World" 
                description="Don't just take my word for it. See what clients have to say about my work"
            />

            <div className="mt-20 flex flex-col gap-8">

                <Card className="h-[320px]">
                    <CardHeader 
                        title="Lorem Ipsum" 
                        description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                    />

                    <div className="w-40 mx-auto mt-8">
                        <Image 
                            src={placeholder} 
                            alt="Placeholder" 
                        />
                    </div>
 
                </Card>

                <ExpandableCard>

                    <CardHeader 
                        title="My Toolbox" 
                        description="Explore the technologies I use to create exceptional digital experiences"
                    />

                    <div className="pt-5">

                        {toolboxItems.map(item => (

                            <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 m-1.5 outline outline-2 outline-white/10 rounded-lg">

                                <TechIcon component={item.iconType} />
                                <span className="font-semibold">{item.title}</span>

                            </div>

                        ))}

                    </div>

                </ExpandableCard>

                <Card>
                    <div>
                        <CardHeader 
                            title="Beyond the Code" 
                            description="Explore my interests and hobbies beyond the digital realm"
                        />
                    </div>

                    <div>
                        {hobbies.map(hobby => (
                            <div key={hobby.title}>
                                <span>{hobby.title}</span>
                                <span>{hobby.emoji}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="h-[320px] p-0">
                    <Gmap />
                </Card>

            </div>

        </div>

    </div>

  )
}

export default AboutSection