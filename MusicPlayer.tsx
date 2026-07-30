"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, Volume2 } from "lucide-react";

const songs = [
  "/music/song1.mp3",
  "/music/song2.mp3",
  "/music/song3.mp3",
  "/music/song4.mp3",
  "/music/song5.mp3",
  "/music/song6.mp3",
  "/music/song7.mp3",
  "/music/song8.mp3",
];

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentSong, setCurrentSong] = useState(0);

  const [playing, setPlaying] = useState(true);

  const [volume, setVolume] = useState(0.65);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;

    if (playing) {

      audio.play().catch(()=>{});

    } else {

      audio.pause();

    }

  }, [playing, volume]);

  useEffect(() => {

    let id: NodeJS.Timeout;

    if (playing){

      id = setInterval(()=>{

        setRotation(r=>r+1);

      },25);

    }

    return ()=>clearInterval(id);

  },[playing]);

  const changeSong = (index:number)=>{

      if(index===currentSong) return;

      const audio=audioRef.current;

      if(!audio) return;

      let v=volume;

      const fadeOut=setInterval(()=>{

        v-=0.05;

        if(v<=0){

          clearInterval(fadeOut);

          audio.pause();

          setCurrentSong(index);

        }

        audio.volume=Math.max(v,0);

      },70);

  };

  useEffect(()=>{

      const audio=audioRef.current;

      if(!audio) return;

      audio.src=songs[currentSong];

      audio.load();

      audio.volume=0;

      audio.play().catch(()=>{});

      let v=0;

      const fadeIn=setInterval(()=>{

          v+=0.05;

          audio.volume=Math.min(v,volume);

          if(v>=volume){

             clearInterval(fadeIn);

          }

      },70);

  },[currentSong]);
