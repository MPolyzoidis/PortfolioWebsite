"use client"
import { Link } from "react-scroll"
import { useEffect, useState } from "react"

const navTitles = [
    { title: "Home" },
    { title: "Employment" },
    { title: "About" },
    { title: "Contact" },
]

const Navbar = () => {
    //Custom offset for the project page for md and sm screens since it behaved differently that the others when scrolling to it through the navbar
    const [offset, setOffset] = useState(0)
    const [animationDuration, setAnimationDuration] = useState(500)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setOffset(-80)
                setAnimationDuration(1000)
            } else {
                setOffset(0)
                setAnimationDuration(500)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className="flex justify-center items-center fixed w-full top-3 z-50">
            <nav className="flex gap-1 xs:gap-0.5 p-0.5 border border-white/15 rounded-2xl bg-white/10 backdrop-blur">
                {navTitles.map((navTitle) => (
                    <Link
                        key={navTitle.title}
                        to={navTitle.title}
                        smooth={true}
                        duration={animationDuration}
                        spy={true}
                        offset={navTitle.title === "Employment" ? offset : 0}
                        className="nav-item"
                    >
                        <button>{navTitle.title}</button>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Navbar
