import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/featuredcourses";
import WhyChooseUs from "@/components/WhyChooseus";
import TestimonialCard from "@/components/TestimonialCard";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <Upcomingwebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
