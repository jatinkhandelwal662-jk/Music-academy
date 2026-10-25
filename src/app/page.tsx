import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/featuredcourses"
import WhyChooseUs from "@/components/WhyChooseus"
import TestimonialCard from "@/components/TestimonialCard"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">hello jatin</h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCard/>
    </main>
  );
}
