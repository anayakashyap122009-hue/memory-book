"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  song: string;
  title: string;
}

export default function MusicPlayer({ song, title }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = song;
  }, [song]);

  const toggle = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop />

      <motion.div
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        className="fixed bottom-5 left-1/2 z-50 flex w-[92%] max-w-sm -translate-x-1/2 items-center justify-between rounded-full bg-white/90 px-5 py-3 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              rotate: playing ? 360 : 0,
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white"
          >
            🎵
          </motion.div>

          <div>
            <h3 className="text-sm font-semibold">{title}</h3>

            <p className="text-xs text-gray-500">
              Memory Book
            </p>
          </div>
        </div>

        <button
          onClick={toggle}
          className="rounded-full bg-pink-500 p-3 text-white"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </motion.div>
    </>
  );
}
