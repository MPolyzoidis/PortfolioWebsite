import ArrowUpRight from "../images/arrow-up-right-from-square-solid.svg"
import TechIcon from "../components/TechIcon"
import GithubIcon from "../images/TechIcons/github-icon.svg"
import LinkedInIcon from "../images/TechIcons/linkedin-Icon.svg"

const footerLinks = [
    {
        icon: LinkedInIcon,
        title:"LinkedIn",
        href:"https://www.linkedin.com/in/marios-polyzoidis-b2ab88317/",
    },
    {
        icon: GithubIcon,
        title:"Github",
        href:"https://github.com/MPolyzoidis",
    }
]

const FooterSection = () => {
    return (

        <footer className="relative overflow-x-clip">

            <div 
                className="absolute h-[400px] w-[1600px] lg:w-[2600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10">
            </div>

            <div className="container">

                <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">

                    <div className="text-white/40">&copy; 2024. All rights reserved.</div>

                    <nav className="flex flex-col md:flex-row items-center gap-8">

                        {footerLinks.map(link => (
                            <a 
                            key={link.title} 
                            href={link.href}
                            target="_blank"
                            className="inline-flex items-center gap-1.5">
                                <TechIcon component={link.icon} className="size-4" />
                                <span className="font-semibold">{link.title}</span>
                                <ArrowUpRight className="size-3 fill-white"/>
                            </a>
                        ))}

                    </nav>

                </div>

            </div>

        </footer>

    )
}

export default FooterSection