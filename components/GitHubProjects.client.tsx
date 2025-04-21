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

export default function GitHubProjects() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/HR-04/starred"
        );
        const myProjects = response.data.filter(
          (project: GitHubProject) => project.owner.login === "HR-04"
        );
        setProjects(myProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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
        My <span className="text-purple">Starred Projects</span>
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
              "bg-[linear-gradient(90deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)]",
              "p-6"
            )}
          >
            <div className="flex flex-col h-full">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                {project.name
                  .replace(/-/g, " ")
                  .replace(/_/g, " ")
                  .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </h1>
              <p className="mt-3 text-gray-300 flex-grow">
                {project.description || "No description available"}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.topics?.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-xs rounded-full bg-purple-900/50 text-purple-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-6 inline-flex items-center px-4 py-2 rounded-lg w-max",
                  "bg-purple-900 text-white hover:bg-purple-800 transition-colors",
                  "border border-purple-700 hover:border-purple-500"
                )}
              >
                <TbBrandGithub className="mr-2" />
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
