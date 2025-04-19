"use client";

import React from "react";
import { Timeline } from "./ui/TimeLine";
import { FaGraduationCap, FaSchool, FaChild } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";

const Education = () => {
  const educationData = [
    {
      title: "2021 - 2025",
      content: (
        <div className="p-4 rounded-xl border border-purple-500/20 bg-gradient-to-b from-black/10 to-black/5 dark:from-white/5 dark:to-white/10 hover:shadow-purple-500/10 hover:shadow-lg transition-all">
          <div className="flex items-start gap-3">
            <FaGraduationCap className="text-purple-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Kamaraj College of Engineering & Technology
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                Bachelor's Degree in Artificial Intelligence & Data Science
              </p>
              <p className="text-purple-500 mt-2 font-medium">CGPA: 8.73</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2013 - 2020",
      content: (
        <div className="p-4 rounded-xl border border-purple-500/20 bg-gradient-to-b from-black/10 to-black/5 dark:from-white/5 dark:to-white/10 hover:shadow-purple-500/10 hover:shadow-lg transition-all">
          <div className="flex items-start gap-3">
            <FaSchool className="text-purple-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                S.B.O.A Matric Hr Sec School
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                6th to 12th Standard
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2008 - 2013",
      content: (
        <div className="p-4 rounded-xl border border-purple-500/20 bg-gradient-to-b from-black/10 to-black/5 dark:from-white/5 dark:to-white/10 hover:shadow-purple-500/10 hover:shadow-lg transition-all">
          <div className="flex items-start gap-3">
            <GiSchoolBag className="text-purple-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Indira Gandhi Memorial Matriculation Hr Sec School
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                1st to 5th Standard
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2006 - 2008",
      content: (
        <div className="p-4 rounded-xl border border-purple-500/20 bg-gradient-to-b from-black/10 to-black/5 dark:from-white/5 dark:to-white/10 hover:shadow-purple-500/10 hover:shadow-lg transition-all">
          <div className="flex items-start gap-3">
            <FaChild className="text-purple-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Bharathiya Vidyalaya Nursery & Primary School
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                UKG - LKG
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="w-full py-40">
      <h1 className="heading">
        <span className="text-purple">Education Details</span>
      </h1>
      <div className="mt-10">
        <Timeline data={educationData} />
      </div>
    </section>
  );
};

export default Education;
