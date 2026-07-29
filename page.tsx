"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";

export default function Home() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#FFF8FB]">

      <AnimatePresence mode="wait">
        {!loadingFinished && (
          <LoadingScreen
            key="loading"
            onComplete={() => setLoadingFinished(true)}
          />
        )}
      </AnimatePresence>

      {loadingFinished && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Hero />

          {/* Next chapters will be added here */}

          {/* <ChapterOne /> */}

          {/* <ChapterTwo /> */}

          {/* <Gallery /> */}

          {/* <Ending /> */}

        </motion.div>
      )}
    </main>
  );
}
