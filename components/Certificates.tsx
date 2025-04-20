"use client";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export const Certificates = () => {
  const certificates = [
    {
      id: 1,
      image: "/cert1.jpg",
      caption: "SAP PSG iTech Hackfest 2023 - 4th Prize",
    },
    {
      id: 2,
      image: "/cert2.jpg",
      caption: "QST Hackathon 2024 - 1st Prize",
    },
    {
      id: 3,
      image: "/cert3.jpg",
      caption: "Phoenix Softech Course 2023 - Flask",
    },
    {
      id: 4,
      image: "/cert4.jpg",
      caption: "RED HAT LINUX 2023 - Hands-on Workshop ",
    },
    {
      id: 5,
      image: "/cert5.jpg",
      caption: "Microsoft HackXcelerate 2024 - one of the Top 10 Teams",
    },
    {
      id: 6,
      image: "/cert6.jpg",
      caption: "ICA5NT International Conference 2024",
    },
    {
      id: 7,
      image: "/cert7.jpg",
      caption: "IAAA 2024 International Conference 2024",
    },
    {
      id: 8,
      image: "/cert8.jpg",
      caption: "Quantanics 2022 - Product Development Intern",
    },
    {
      id: 9,
      image: "/cert9.jpg",
      caption: "Infosys Python for Data Science 2023",
    },
    {
      id: 10,
      image: "/cert10.jpg",
      caption: "Infosys UX and UI - Designing with Color Theory 2024",
    },
    {
      id: 11,
      image: "/cert11.jpg",
      caption:
        " 4th National Level Project Contest INNOFESTA'24 – 1st Prize (₹25K)",
    },
    {
      id: 12,
      image: "/cert12.jpg",
      caption: "Hack Odyssey 2024 – 1st Prize (₹50K)",
    },
    {
      id: 13,
      image: "/cert13.jpg",
      caption: "SkillRack Python3.x 2022",
    },
    {
      id: 14,
      image: "/cert14.jpg",
      caption: "SkillRack SQL 2022",
    },
    {
      id: 15,
      image: "/cert15.jpg",
      caption: "Top Engineers IIT workshop - skill Development in ML",
    },
    {
      id: 16,
      image: "/cert16.jpg",
      caption: "Infosys Java Programming",
    },
    {
      id: 17,
      image: "/cert17.jpg",
      caption: "SkillRack C - Programming course 2022",
    },
    {
      id: 18,
      image: "/cert18.jpg",
      caption: "International Conference ICIECST - 2025",
    },
  ];

  return (
    <section id="certificates" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="heading">
          My <span className="text-purple">Certificates</span>
        </h1>

        <div className="mt-10">
          <InfiniteMovingCards
            items={certificates}
            direction="right"
            speed="normal"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};
