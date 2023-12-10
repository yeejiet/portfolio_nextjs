import React from "react";
import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export default function Home(){
  return(
<div className="flex min-h-screen flex-col" style={{ marginLeft: '40px', marginRight: '40px' }}>
    <main>
      <Navbar/>
      <HeroSection />
      <AboutMe />
      <EmailSection />
    </main>
      <Footer />
</div>
  );
}