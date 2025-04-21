"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Education from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Certificates } from "@/components/Certificates";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { TechStackNotebook } from "@/components/TechStackNotebook";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <TracingBeam className="px-4 sm:px-6">
          <Hero />
          <Grid />
          <TechStackNotebook />
          <Education />
          <RecentProjects />
          <Achievements />
          <Certificates />
          <Experience />
          <Footer />
        </TracingBeam>
      </div>
    </main>
  );
};

export default Home;
