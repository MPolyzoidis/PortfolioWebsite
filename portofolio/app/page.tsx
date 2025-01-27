import Navbar from "./components/Navbar";
import AboutSection from "./sections/About";
import ContactSection from "./sections/Contact";
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
            <AboutSection />
            <ContactSection />
        </div>
    );
}
