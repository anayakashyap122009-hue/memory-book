"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  "Every picture holds a heartbeat.",
  "Some memories deserve forever.",
  "A journey written with smiles.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [quoteIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const current = quotes[quoteIndex];

    const interval = setInterval(() => {
      setText(current.slice(0, i + 1));
      i++;

      if (i >= current.length) {
        clearInterval(interval);
      }
    }, 65);

    return () => clearInterval(interval);
  }, [quoteIndex]);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-white">

      {/* Floating Circles */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-pink-200/30 blur-3xl -top-20 -left-20"
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full bg-purple-200/30 blur-3xl bottom-0 right-0"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
      />

      {/* Floating Emojis */}
      {["🌸", "✨", "💖", "🦋", "🌷"].map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          style={{
            left: `${15 + index * 18}%`,
            top: `${15 + index * 12}%`,
          }}
          animate={{
            y: [-10, 15, -10],
            rotate: [-10, 10, -10],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + index,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-8 text-center">

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-5xl font-bold text-pink-700 leading-tight"
        >
          Welcome
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-3 text-2xl font-semibold text-gray-700"
        >
          To My Memory Book
        </motion.h2>

        <div className="mt-10 h-16 flex items-center justify-center">
          <p className="text-lg text-gray-600 italic">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Hero Photo */}
        <motion.div
          initial={{
            scale: 0.7,
            opacity: 0,
            rotate: -8,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: -3,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="mt-10"
        >
          <div className="bg-white p-3 rounded-3xl shadow-2xl rotate-[-3deg]">
            <img
              src="/images/01.jpg"
              alt="Memory"
              className="w-72 h-[380px] object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
          className="mt-8 text-gray-500 text-sm"
        >
          Scroll slowly and enjoy every memory ❤️
        </motion.p>

      </div>

    </section>
  );
}
