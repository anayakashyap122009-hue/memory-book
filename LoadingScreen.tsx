"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setStep(1);
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-gradient-to-b from-pink-100 via-rose-50 to-white flex items-center justify-center px-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {step === 0 ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              className="text-7xl"
            >
              🌸
            </motion.div>

            <motion.h1
              className="mt-10 text-3xl font-bold text-pink-700"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
            >
              Loading Memories...
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Please wait a moment...
            </motion.p>

            <div className="mt-8 w-64 h-2 rounded-full bg-pink-200 overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-pink-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="text-center"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="text-6xl"
            >
              🎧
            </motion.div>

            <h2 className="mt-8 text-3xl font-bold text-gray-800">
              Put on your earphones
            </h2>

            <p className="mt-4 text-gray-500 leading-7">
              This little journey is best experienced
              <br />
              with music.
            </p>

            <motion.button
              whileTap={{
                scale: 0.96,
              }}
              whileHover={{
                scale: 1.03,
              }}
              onClick={onComplete}
              className="mt-12 rounded-full bg-pink-500 px-8 py-4 text-white font-semibold shadow-xl"
            >
              Begin The Journey ❤️
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
