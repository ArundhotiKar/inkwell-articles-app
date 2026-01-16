import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Impact from "@/components/Impact";
import Newsletter from "@/components/Newsletter";
import LatestArticles from "@/components/LatestArticles";

export default function Home() {
  return (
    <main className="space-y-16 p-6">
      {/* Hero Section */}
      <Hero></Hero>
     
     {/* Featured Sections */}
     <Features></Features>
     <LatestArticles></LatestArticles>
       
     <AboutUs></AboutUs>
     <Testimonials></Testimonials>
     <CTA></CTA>
     <Impact></Impact>
     <Newsletter></Newsletter>
     
    </main>
  );
}
