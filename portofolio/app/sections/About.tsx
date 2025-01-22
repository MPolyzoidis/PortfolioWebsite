import Background from "../components/Background"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
import ArrowDown from "../images/downArrow.svg"
import Image from 'next/image'
import placeholder from "../images/placeholder.png"


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

            </div>
        </Card>

    </div>

  )
}

export default AboutSection