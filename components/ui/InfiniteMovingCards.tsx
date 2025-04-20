"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    image: string;
    caption: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        scrollerRef.current?.appendChild(item.cloneNode(true));
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    containerRef.current?.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "100s" : "110s"
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap items-center",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li key={item.id} className="w-[20vw] max-w-full flex-shrink-0">
            <div className="flex flex-col items-center">
              <div className="relative w-full h-64 rounded-lg overflow-hidden ">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-contain"
                  style={{ background: "transparent" }}
                />
              </div>
              <p className="mt-3 text-center text-sm text-white/80 max-w-[80%]">
                {item.caption}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
