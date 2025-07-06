import Background from "./components/Background"
import Navbar from "./components/Navbar"
import AboutSection from "./sections/About"
import ContactSection from "./sections/Contact"
import FooterSection from "./sections/Footer"
import HeroSection from "./sections/Hero"
import EmploymentSection from "./sections/Employment"
// import TestimonialsSection from "./sections/Testimonials"

export default function Home() {
    return (
        <div className="relative">
            <Background />

            <Navbar />
            <HeroSection />
            <EmploymentSection />
            {/* <TestimonialsSection /> */}
            <AboutSection />
            <ContactSection />
            <FooterSection />
        </div>
    )
}
