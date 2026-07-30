"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import Typewriter from "./Typewriter";

export default function FinalChapter() {

    const replay = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (

        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#090B18] via-[#151933] to-[#2D1A42] px-6 py-24">

            {/* Moon */}

            <motion.div

                className="absolute right-10 top-10 h-28 w-28 rounded-full bg-yellow-100 shadow-[0_0_120px_40px_rgba(255,255,180,0.35)]"

                animate={{
                    scale:[1,1.08,1]
                }}

                transition={{
                    repeat:Infinity,
                    duration:4
                }}

            />

            {/* Stars */}

            {[...Array(80)].map((_,i)=>(

                <motion.div

                    key={i}

                    className="absolute rounded-full bg-white"

                    style={{

                        width:`${2+Math.random()*3}px`,
                        height:`${2+Math.random()*3}px`,
                        left:`${Math.random()*100}%`,
                        top:`${Math.random()*100}%`

                    }}

                    animate={{

                        opacity:[0.2,1,0.2],
                        scale:[1,1.5,1]

                    }}

                    transition={{

                        repeat:Infinity,
                        duration:2+Math.random()*3,
                        delay:Math.random()*2

                    }}

                />

            ))}

            <div className="relative z-20 mx-auto max-w-md">

                <motion.h1

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    className="text-center text-5xl font-bold text-pink-200"

                >

                    The Final Chapter

                </motion.h1>

                <motion.p

                    initial={{
                        opacity:0
                    }}

                    whileInView={{
                        opacity:1
                    }}

                    transition={{
                        delay:.3
                    }}

                    className="mt-6 text-center leading-8 text-pink-100"

                >

                    Every story has an ending...

                    but I hope ours never does.

                </motion.p>

                {/* Final Photo */}

                <motion.div

                    initial={{
                        opacity:0,
                        scale:.8
                    }}

                    whileInView={{
                        opacity:1,
                        scale:1
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:1
                    }}

                    className="mt-20"

                >

                    <img

                        src="/images/21.jpg"

                        className="mx-auto aspect-[3/4] w-72 rounded-[35px] border-4 border-white object-cover shadow-[0_20px_80px_rgba(255,255,255,.2)]"

                        alt="Forever"

                    />

                </motion.div>

                {/* Final Letter */}

                <motion.div

                    initial={{
                        opacity:0,
                        y:80
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.8
                    }}

                    className="mt-20 rounded-[35px] bg-white/10 p-8 backdrop-blur-xl"

                >

                    <Typewriter

                        speed={22}

                        className="text-lg leading-9 text-pink-50"

                        text={`If you've reached this page...

thank you for walking through every memory with me.

Every smile.

Every laugh.

Every tiny moment.

They all became pieces of something beautiful.

And no matter where life takes us...

I hope we continue making memories

that one day we'll look back on together.

Because my favourite place...

will always be wherever you are.

I loveeeee youuu sooo muchhh ❤️`}

                    />
                                      />

                </motion.div>

                {/* Proposal Card */}

                <motion.div

                    initial={{
                        opacity:0,
                        scale:.9
                    }}

                    whileInView={{
                        opacity:1,
                        scale:1
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.8
                    }}

                    className="mt-20 rounded-[35px] bg-gradient-to-r from-pink-500/30 to-rose-500/30 border border-pink-300/30 p-8 backdrop-blur-xl text-center"

                >

                    <motion.div

                        animate={{
                            scale:[1,1.15,1]
                        }}

                        transition={{
                            repeat:Infinity,
                            duration:1.8
                        }}

                        className="text-7xl"

                    >

                        💍

                    </motion.div>

                    <h2 className="mt-6 text-4xl font-bold text-white">

                        Will You Stay With Me Forever?

                    </h2>

                    <p className="mt-6 leading-9 text-pink-100">

                        Every chapter before this
                        was just leading me to one question.

                        I don't just want memories.

                        I want a lifetime of memories...

                        with you.

                    </p>

                </motion.div>

                {/* Forever Quote */}

                <motion.div

                    initial={{
                        opacity:0
                    }}

                    whileInView={{
                        opacity:1
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        delay:.3
                    }}

                    className="mt-24 text-center"

                >

                    <h2 className="text-5xl font-bold text-pink-200">

                        Forever & Always ❤️

                    </h2>

                    <p className="mt-6 leading-9 text-pink-100">

                        Thank you for being
                        the most beautiful part
                        of my life.

                    </p>

                </motion.div>

                {/* Replay Button */}

                <motion.button

                    whileHover={{
                        scale:1.05
                    }}

                    whileTap={{
                        scale:.96
                    }}

                    onClick={replay}

                    className="mx-auto mt-20 flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 text-white shadow-2xl"

                >

                    <RotateCcw size={20} />

                    Replay Our Story

                </motion.button>

            </div>

            {/* Fireworks */}

            {[...Array(18)].map((_,i)=>(

                <motion.div

                    key={i}

                    className="absolute text-4xl"

                    style={{
                        left:`${Math.random()*100}%`,
                        top:`${Math.random()*80}%`
                    }}

                    animate={{
                        scale:[0,1.4,0],
                        opacity:[0,1,0],
                        rotate:[0,180]
                    }}

                    transition={{
                        repeat:Infinity,
                        duration:2.8,
                        delay:i*.25
                    }}

                >

                    🎆

                </motion.div>

            ))}

            {/* Falling Roses */}

            {[...Array(30)].map((_,i)=>(

                <motion.div

                    key={i}

                    className="absolute text-2xl"

                    style={{
                        left:`${Math.random()*100}%`,
                        top:`-${Math.random()*200}px`
                    }}

                    animate={{
                        y:["0vh","120vh"],
                        rotate:[0,360],
                        x:[0,-25,25,0]
                    }}

                    transition={{
                        repeat:Infinity,
                        duration:9+Math.random()*4,
                        delay:Math.random()*6
                    }}

                >

                    🌹

                </motion.div>

            ))}

            {/* Floating Hearts */}

            {[...Array(25)].map((_,i)=>(

                <motion.div

                    key={i}

                    className="absolute text-pink-400"

                    style={{
                        left:`${Math.random()*100}%`,
                        bottom:`-${Math.random()*150}px`,
                        fontSize:`${18+Math.random()*22}px`
                    }}

                    animate={{
                        y:["0vh","-130vh"],
                        opacity:[0,1,0],
                        x:[0,-30,30,0],
                        rotate:[0,25,-25,0]
                    }}

                    transition={{
                        repeat:Infinity,
                        duration:8+Math.random()*4,
                        delay:Math.random()*5
                    }}

                >

                    ❤️

                </motion.div>

            ))}

            {/* Giant Glowing Heart */}

            <motion.div

                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[280px] opacity-10"

                animate={{
                    scale:[1,1.08,1]
                }}

                transition={{
                    repeat:Infinity,
                    duration:2
                }}

            >

                ❤️

            </motion.div>

        </section>

    );

}
