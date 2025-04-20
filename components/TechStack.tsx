"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  { name: "Python", img: "/tech/python.jpg" },
  { name: "Machine Learning", img: "/tech/ML.jpg" },
  { name: "Deep Learning", img: "/tech/DL.jpg" },
  { name: "NLP", img: "/tech/NLP.png" },
  { name: "TensorFlow", img: "/tech/tensor.png" },
  { name: "Pytorch", img: "/tech/pytorch.png" },
  { name: "Numpy", img: "/tech/numpy.png" },

  // Row 2 (8 items)
  { name: "Pandas", img: "/tech/pandas.png" },
  { name: "scikitLearn", img: "/tech/scikit.png" },
  { name: "MatPlotLib", img: "/tech/matplot.png" },
  { name: "Langchain", img: "/tech/langchain3.webp" },
  { name: "SQL", img: "/tech/sql.png" },
  { name: "Tableau", img: "/tech/tableau.png" },
  { name: "FastAPI", img: "/tech/fastapi.png" },
  { name: "Anaconda", img: "/tech/anaconda.png" },

  // Row 3 (9 items)
  { name: "PhiData", img: "/tech/phidata.png" },
  { name: "CrewAI", img: "/tech/CrewAI.png" },
  { name: "Qdrant", img: "/tech/qdrant.png" },
  { name: "Chroma", img: "/tech/chroma.png" },
  { name: "Faiss", img: "/tech/faiss.jpg" },
  { name: "Convex", img: "/tech/convex.png" },
  { name: "Axotyl", img: "/tech/axotyl.png" },
  { name: "Ollama", img: "/tech/ollama.png" },
  { name: "OpenAI", img: "/tech/openai.png" },

  // Row 4 (8 items)
  { name: "Gemini", img: "/tech/gemini.png" },
  { name: "NextJS", img: "/tech/next.png" },
  { name: "TailwindCSS", img: "/tech/tailwind.png" },
  { name: "Typescript", img: "/tech/ts.png" },
  { name: "MongoDB", img: "/tech/mongo.png" },
  { name: "PostgreySQL", img: "/tech/postgrey.png" },
  { name: "GitHub", img: "/tech/git.png" },
  { name: "Seaborn", img: "/tech/seaborn.png" },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="flex flex-col items-center mt-16">
        {/* Row 1 */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {techStack.slice(0, 7).map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {techStack.slice(7, 15).map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {techStack.slice(15, 24).map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </motion.div>

        {/* Row 4 */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {techStack.slice(24, 32).map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TechIcon = ({ tech }: { tech: { name: string, img: string } }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="flex flex-col items-center group"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-900/30 to-black/70 rounded-xl flex items-center justify-center p-3 border border-white/10 group-hover:border-purple-500/50 transition-all">
        <Image
          src={tech.img}
          alt={tech.name}
          width={80}
          height={80}
          className="object-contain w-full h-full"
        />
      </div>
      <span className="mt-2 text-xs md:text-sm text-white/70 group-hover:text-purple-300 transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
};
