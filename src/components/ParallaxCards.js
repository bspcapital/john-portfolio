'use client';
import Image from "next/image";
import Pic1 from '../../public/images/1.jpg';
import Pic2 from '../../public/images/2.jpeg';
import { useMotionValue, useTransform, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

// The Section components are defined outside the main component.
// This is a clean pattern and ensures they don't cause hook-related issues.

const Section1 = ({ scrollYProgress }) => {
    // Hooks are at the top level of the Section1 component. Correct.
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 0.2], [0, -5]);

    return (
        <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
            <p>Government of Alberta</p>
            <div className="flex gap-4">
                <div className="relative w-[12.5vw]">
                    <Image src={Pic1} alt="img" placeholder="blur" fill />
                </div>
            </div>
        </motion.div>
    );
};

const Section2 = ({ scrollYProgress }) => {
    // Hooks are at the top level. Correct.
    const scale = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [1, 1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [0, 0, -5]);

    return (
        <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen">
            <Image src={Pic2} alt="img" placeholder="blur" fill />
        </motion.div>
    );
};

const Section3 = ({ scrollYProgress }) => {
    // Hooks are at the top level. Correct.
    const scale = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0.8, 1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [5, 0, -5]);

    return (
        <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen">
            <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-white text-6xl">
                Section 3
            </div>
        </motion.div>
    );
};

const Section4 = ({ scrollYProgress }) => {
    // Hooks are at the top level. Correct.
    const scale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0.8, 1], [5, 0]);

    return (
        <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen">
            <div className="w-full h-full flex items-center justify-center bg-black text-white text-6xl">
                Section 4
            </div>
        </motion.div>
    );
};


// The main component that gets exported
export default function ParallaxCards({ isOpen, onClose }) {

    // --- All hooks are called here, at the top level of the component ---
    const container = useRef(null);
    const scrollYProgress = useMotionValue(0);

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        ["#C72626", "#000000", "#333333", "#555555", "#000000"]
    );

    useEffect(() => {
        // The logic inside useEffect is fine. The hook itself is what matters.
        if (!isOpen || !container.current) {
            return;
        }

        const lenis = new Lenis({ wrapper: container.current, smoothTouch: true, lerp: 0.1 });
        lenis.on('scroll', (e) => scrollYProgress.set(e.progress));
        
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
        
        return () => lenis.destroy();

    }, [isOpen, scrollYProgress]);
    // ------------------------------------------------------------------

    // We use AnimatePresence directly inside the component that uses the `isOpen` prop
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.main
                    ref={container}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ backgroundColor }}
                    className="fixed top-0 left-0 w-full h-full z-50 overflow-y-scroll"
                >
                    <button
                        onClick={onClose}
                        className="fixed top-4 right-4 z-[100] bg-white/70 backdrop-blur-sm text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
                    >
                        ×
                    </button>
                    
                    <Section1 scrollYProgress={scrollYProgress} />
                    <Section2 scrollYProgress={scrollYProgress} />
                    <Section3 scrollYProgress={scrollYProgress} />
                    <Section4 scrollYProgress={scrollYProgress} />
                </motion.main>
            )}
        </AnimatePresence>
    );
}