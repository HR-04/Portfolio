"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const techCategories = {
  "AI/ML Core": [
    { name: "Python", img: "/tech/python.webp" },
    { name: "Machine Learning", img: "/tech/ml.png" },
    { name: "Deep Learning", img: "/tech/dl.png" },
    { name: "NLP", img: "/tech/NLP.png" },
  ],
  "AI Frameworks": [
    { name: "TensorFlow", img: "/tech/tensor.png" },
    { name: "Pytorch", img: "/tech/pytorch.png" },
    { name: " Axolotl", img: "/tech/Axolotl.jpg" },
    { name: "CrewAI", img: "/tech/crew.png" },
  ],
  "Data Tools": [
    { name: "ScikitLearn", img: "/tech/scikit.png" },
    { name: "MatPlotLib", img: "/tech/matplotlib.png" },
    { name: "Seaborn", img: "/tech/seaborn.svg" },
    { name: "Tableau", img: "/tech/tab.svg" },
  ],
  "GenAI Stack": [
    { name: "Langchain", img: "/tech/langchain.png" },
    { name: "OpenAI", img: "/tech/opeanaii.webp" },
    { name: "Gemini", img: "/tech/gemini.webp" },
    { name: "Ollama", img: "/tech/ollama.webp" },
  ],
  "Vector DB": [
    { name: "Qdrant", img: "/tech/qdrant.png" },
    { name: "Chroma", img: "/tech/chroma.webp" },
    { name: "Faiss", img: "/tech/faiss.jpg" },
    { name: "Convex", img: "/tech/convex.png" },
  ],
  "Data Preprocess": [
    { name: "Numpy", img: "/tech/numpy.svg" },
    { name: "Pandas", img: "/tech/pandas.png" },
    { name: "MongoDB", img: "/tech/mongodb.svg" },
    { name: "PostgreySQL", img: "/tech/postgrey.png" },
  ],
  "Web Dev": [
    { name: "NextJS", img: "/tech/nextjs.png" },
    { name: "TailwindCSS", img: "/tech/tailwind.png" },
    { name: "Typescript", img: "/tech/ts.png" },
    { name: "FastAPI", img: "/tech/fastapi.png" },
  ],
  Infrastructure: [
    { name: "Docker", img: "/tech/docker.svg" },
    { name: "Nginx", img: "/tech/nginx.svg" },
    { name: "GitHub", img: "/tech/github.svg" },
    { name: "Anaconda", img: "/tech/anaconda.png" },
  ],
};

export const TechStackNotebook = () => {
  const [activeCategory, setActiveCategory] = useState<string>("AI/ML Core");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showOutput, setShowOutput] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>("AI/ML Core");

  const handleRun = () => {
    if (isRunning) return;

    setIsRunning(true);
    setShowOutput(false);

    // First phase: Execution animation
    setTimeout(() => {
      setActiveCategory(selectedTab);
    }, 500);

    // Second phase: Show results
    setTimeout(() => {
      setShowOutput(true);
      setIsRunning(false);
    }, 750);
  };

  const handleTabChange = (category: string) => {
    setSelectedTab(category);
    if (category !== activeCategory) {
      setShowOutput(false);
    }
  };

  return (
    <section id="tech-stack" className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      {/* Notebook UI */}
      <div className="max-w-6xl mx-auto mt-12 bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden backdrop-blur-sm">
        {/* Notebook Toolbar */}
        <div className="bg-gradient-to-r from-purple-900/30 to-black/50 px-6 py-3 flex flex-wrap items-center border-b border-gray-700/50 gap-2">
          {Object.keys(techCategories).map((category) => (
            <button
              key={category}
              onClick={() => handleTabChange(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative overflow-hidden ${
                selectedTab === category
                  ? "bg-purple-600/90 text-white"
                  : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/80"
              }`}
            >
              {category}
              {selectedTab === category && (
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-400"
                  layoutId="tabIndicator"
                />
              )}
            </button>
          ))}

          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`ml-auto flex items-center px-4 py-2 rounded-lg text-white font-medium transition-all ${
              selectedTab !== activeCategory || !showOutput
                ? "bg-gradient-to-r from-green-600 to-green-500 shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
                : "bg-gray-700/50 text-gray-400"
            } ${isRunning ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            <span>{isRunning ? "Executing..." : "Run Stack"}</span>
            {isRunning && (
              <span className="ml-2 flex items-center">
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 bg-white rounded-full mx-[1px]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </span>
            )}
          </button>
        </div>

        {/* Notebook Output */}
        <div className="p-6 min-h-[400px] relative">
          {/* Terminal Output */}
          <div className="font-mono mb-6">
            <div className="text-purple-400">
              In [1]:{" "}
              <span className="text-green-400">{`run_stack('${selectedTab}')`}</span>
            </div>

            {isRunning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 mt-2"
              >
                <div>Executing {selectedTab} stack...</div>
                <div className="flex items-center mt-1">
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <span>Processing dependencies</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Tech Stack Output */}
          <AnimatePresence mode="wait">
            {showOutput ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
              >
                {techCategories[
                  activeCategory as keyof typeof techCategories
                ].map((tech) => (
                  <TechCard key={tech.name} tech={tech} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center text-gray-500"
              >
                {isRunning ? (
                  <div className="text-center">
                    <div className="inline-block w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-3" />
                    <p>Loading {selectedTab} stack...</p>
                  </div>
                ) : (
                  <p>Run the stack to view technologies</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ tech }: { tech: { name: string; img: string } }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group rounded-xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-black/40 to-gray-900/50 backdrop-blur-sm"
    >
      {/* Moving border gradient */}
      <div className="absolute inset-0 overflow-hidden rounded-xl p-[1px]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-[length:200%_100%]"
          initial={{ backgroundPosition: "100% 0" }}
          animate={{ backgroundPosition: "-100% 0" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            
          }}
        />
      </div>

      {/* Card content */}
      <div className="relative h-full p-5 flex flex-col items-center bg-gray-900/80 rounded-[11px]">
        <div className="relative w-20 h-20 mb-4">
          <Image
            src={tech.img}
            alt={tech.name}
            fill
            className="object-contain"
            quality={100}
          />
        </div>
        <h3 className="text-center font-medium text-white">{tech.name}</h3>
      </div>
    </motion.div>
  );
};
