import Navbar from "./components/Navbar";
import HeroSection from "./sections/Hero";
import ProjectsSection from "./sections/Projects";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ProjectsSection />
        </div>
    );
}
