"use client";

import React, { useState } from "react";
import { LayoutGrid } from "./ui/LayoutGrid";

export const Achievements = () => {
  const achievements = [
    {
      id: 1,
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">
            🏆 Hack Odyssey 2K25 – 1st Prize (₹15K)
          </h3>
          <p className="text-purple-300 mt-2">
            Theme: Quality Education & Lifelong Learning (SDG 4)
          </p>
          <p className="text-white/80 mt-2">
            Project: AI-Vita – An AI-powered learning companion using
            Deepseek-r1 LLM, RAG, and Stable Diffusion.
          </p>
          <p className="text-sm text-white/60 mt-4">
            Date: March 13–14, 2025 | Venue: Kalasalingam Academy of Research
            and Education
          </p>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/Hack4.jpg",
    },
    {
      id: 2,
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">
            🏆 Hack Odyssey 2024 – 1st Prize (₹50K)
          </h3>
          <p className="text-purple-300 mt-2">
            Theme: Equal Education and Quality Resources
          </p>
          <p className="text-white/80 mt-2">
            Project: AICademy – An AI-powered assessment platform accessible to
            both students and teachers.
          </p>
          <p className="text-sm text-white/60 mt-4">
            Date: March 26–27, 2024 | Venue: Kalasalingam Academy of Research
            and Education
          </p>
        </div>
      ),
      className: "md:col-span-1",
      thumbnail: "/Hack1.jpg",
    },
    {
      id: 3,
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">
            🏆 4th National Level Project Contest INNOFESTA&apos;24 – 1st Prize
            (₹25K)
          </h3>
          <p className="text-purple-300 mt-2">
            Theme: EdTech – Project Presentation
          </p>
          <p className="text-sm text-white/60 mt-4">
            Date: March 28, 2024 | Venue: Velammal College of Engineering and
            Technology
          </p>
        </div>
      ),
      className: "md:col-span-1",
      thumbnail: "/Hack2.jpg",
    },
    {
      id: 4,
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">
            🏅 24-Hour Hackathon – Special Jury Award (₹2K)
          </h3>
          <p className="text-white/80 mt-2">
            Recognition: Special Jury Award presented by Ramyaa S., with
            inspiring feedback and encouragement.
          </p>
          <p className="text-sm text-white/60 mt-4">
            Date: September 20–21, 2024 | Venue: KCG College of Engineering and
            Technology
          </p>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/Hack3.jpg",
    },
  ];

  return (
    <section id="achievements" className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="heading">
          My <span className="text-purple">Achievements</span>
        </h1>
        <div className="mt-10">
          {achievements.length > 0 ? (
            <LayoutGrid cards={achievements} />
          ) : (
            <p className="text-white">No achievements to display</p>
          )}
        </div>
      </div>
    </section>
  );
};