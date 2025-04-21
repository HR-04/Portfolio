import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { navItems } from "@/data";

const GitHubProjects = dynamic(
  () => import("@/components/GitHubProjects.client"),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <TracingBeam className="px-4 sm:px-6">
          <Hero />
          <Grid />
          <Education />
          <GitHubProjects />
          <Footer />
        </TracingBeam>
      </div>
    </main>
  );
}
