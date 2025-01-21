import Navbar from "./components/Navbar";
import HeroSection from "./sections/Hero";
import ProjectsSection from "./sections/Projects";
import TestimonialsSection from "./sections/Testimonials";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ProjectsSection />
            <TestimonialsSection />
        </div>
    );
}
