"use client";

import { motion } from "framer-motion";

interface IntroProps {
  onStart: () => void;
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-pink-50 px-6">

      {/* Glow */}
      <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-400/30 blur-[120px]" />

      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-50px",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            opacity: [0, 1, 0],
            x: [0, -20, 20, 0],
            rotate: [0, 25, -25, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 4,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Petals */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={"flower" + i}
          className="absolute text-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-30px",
          }}
          animate={{
            y: ["0vh", "120vh"],
            rotate: [0, 360],
            x: [-20, 20, -20],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 5,
            delay: Math.random() * 5,
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: .85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md rounded-[40px] border border-white/40 bg-white/30 p-8 text-center shadow-2xl backdrop-blur-xl"
      >

        {/* Photo */}
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: .5 }}
          src="/images/01.jpg"
          alt="Lakshita"
          className="mx-auto h-40 w-40 rounded-full border-4 border-white object-cover shadow-2xl"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .8 }}
          className="mt-8 text-5xl font-extrabold leading-tight text-pink-700"
        >
          Happpyyyyyy
          <br />
          Girlfriendss Dayyy
          <br />
          Babbyyyy 💗
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-2xl font-semibold text-rose-600"
        >
          Yourrr Rishuuu
          <br />
          Lovesss Youuu
          <br />
          Alotttt Mommyyy 💗
        </motion.h2>

        {/* Divider */}
        <div className="my-8 text-2xl">
          ✨ ❤️ 🌸 ❤️ ✨
        </div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="leading-8 text-gray-700"
        >
          Thankkk youuu forr makinggg everyyy dayyy sooo
          beautifulll. Youuu areee myyy happiesttt placeee,
          myyy comforttt, myyy peaceee andddd myyy foreverrr
          personnn. I loveeeeeee youuu sooo muchhh babbyyyy.
          Thankkk youuu forr beinggg mineee foreverrrr. ❤️
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          onClick={onStart}
          className="mt-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-4 text-lg font-bold text-white shadow-2xl"
        >
          💌 Open Your Surprise
        </motion.button>

      </motion.div>

    </section>
  );
}
