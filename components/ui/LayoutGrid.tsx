"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-4 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(
            card.className,
            "relative h-[300px] md:h-[400px]" // Added fixed height
          )}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden rounded-xl h-full w-full",
              selected?.id === card.id
                ? "fixed inset-0 m-auto z-50 w-[80%] h-[80%]"
                : "cursor-pointer"
            )}
            layout
          >
            <BlurImage card={card} />
            {selected?.id === card.id && <SelectedCard selected={selected} />}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-black/70 z-40",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 1 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Image
        src={card.thumbnail}
        fill
        alt="thumbnail"
        className={cn(
          "object-cover transition duration-200",
          loaded ? "blur-none" : "blur-md"
        )}
        onLoad={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
    </>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-end p-6 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full bg-black/70 p-6 rounded-lg backdrop-blur-sm">
        {selected?.content}
      </div>
    </motion.div>
  );
};
