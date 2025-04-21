"use client";

import { TbBrandGithub } from "react-icons/tb";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GitHubProject {
  id: number;
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  owner: {
    login: string;
  };
}

const GitHubProjects = () => {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch your starred repositories
        const starredResponse = await axios.get(
          "https://api.github.com/users/HR-04/starred"
        );

        // Filter to only include your own repositories
        const starredOwnProjects = starredResponse.data.filter(
          (project: GitHubProject) =>
            project.owner.login === "HR-04"
        );

        setProjects(starredOwnProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchProjects();

    // Set up polling to check for changes every 5 minutes
    const interval = setInterval(fetchProjects, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div id="projects" className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple"> Projects</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-white/[0.1] group",
              "bg-[linear-gradient(90deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)]"
            )}
          >
            <div className="p-6">
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold text-white">
                  {formatProjectName(project.name)}
                </h1>
                <p className="mt-3 text-gray-300">
                  {project.description || "No description available"}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.topics?.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-purple-900/50 text-purple-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Code Button */}
                <div className="mt-6">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center px-4 py-2 rounded-lg",
                      "bg-purple-900 text-white hover:bg-purple-800 transition-colors",
                      "border border-purple-700 hover:border-purple-500"
                    )}
                  >
                    <TbBrandGithub className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Helper function to format repository names
function formatProjectName(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

export default GitHubProjects;
