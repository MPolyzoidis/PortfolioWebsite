//Reusable Component Imports
import Background from "../components/Background"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"

//Images Imports
import Image from 'next/image'
import ArrowDown from "../images/downArrow.svg"
import placeholder from "../images/placeholder.png"
import mapImage from "../images/map.png"
import memojiSmile from "../images/memoji-smile.png"

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
        title:"Ipsum",
        emoji:"⚽"
    },
    {
        title:"Ipsum",
        emoji:"⚽"
    },
    {
        title:"Ipsum",
        emoji:"⚽"
    },
    {
        title:"Ipsum",
        emoji:"⚽"
    },
    {
        title:"Ipsum",
        emoji:"⚽"
    },
    {
        title:"Ipsum",
        emoji:"⚽"
    },
]


const AboutSection = () => {
  return (
    <div className="pb-96 relative z-0">

        <Background />

        <SectionHeader 
            eyebrow="Happy Clients" 
            title="What Clients Say About Me" 
            description="Don't just take my word for it. See what clients have to say about my work"
        />

        <Card>
            <div>

                <ArrowDown className="fill-white size-4"/>

                <h3>Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                <Image 
                    src={placeholder} 
                    alt="Placeholder" 
                />

            </div>
        </Card>

        <Card>
            <div>

                <ArrowDown className="fill-white size-4"/>

                <h3>My Toolbox</h3>
                <p>Explore the technologies I use to create exceptional digital experiences</p>

                <div>

                    {toolboxItems.map(item => (

                        <div key={item.title}>

                            <TechIcon component={item.iconType} />
                            <span>{item.title}</span>

                        </div>

                    ))}

                </div>

            </div>
        </Card>

        <Card>
            <div>
                <ArrowDown className="fill-white size-4"/>

                <h3>Beyond the Code</h3>
                <p>Explore my interests and hobbies beyond the digital realm</p>
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

        <Card>
            <Image src={mapImage} alt="map" />
            <Image src={memojiSmile} alt="Smiling memoji" />
        </Card>

    </div>

  )
}

export default AboutSection