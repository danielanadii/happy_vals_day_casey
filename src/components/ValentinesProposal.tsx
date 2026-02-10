import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 36 images
const images = [
  "happy_vals_day_casey/game-photos/1.avif",
  "happy_vals_day_casey/game-photos/2.avif",
  "happy_vals_day_casey/game-photos/3.avif",
  "happy_vals_day_casey/game-photos/4.avif",
  "happy_vals_day_casey/game-photos/5.avif",
  "happy_vals_day_casey/game-photos/6.avif",
  "happy_vals_day_casey/game-photos/7.avif",
  "happy_vals_day_casey/game-photos/8.avif",
  "happy_vals_day_casey/game-photos/9.avif",
  "happy_vals_day_casey/game-photos/10.avif",
  "happy_vals_day_casey/game-photos/11.avif",
  "happy_vals_day_casey/game-photos/12.avif",
  "happy_vals_day_casey/game-photos/13.avif",
  "happy_vals_day_casey/game-photos/14.avif",
  "happy_vals_day_casey/game-photos/15.avif",
  "happy_vals_day_casey/game-photos/16.avif",
  "happy_vals_day_casey/game-photos/17.avif",
  "happy_vals_day_casey/game-photos/18.avif",
  "happy_vals_day_casey/game-photos/19.avif",
  "happy_vals_day_casey/game-photos/20.avif",
  "happy_vals_day_casey/game-photos/21.avif",
  "happy_vals_day_casey/game-photos/22.avif",
  "happy_vals_day_casey/game-photos/23.avif",
  "happy_vals_day_casey/game-photos/24.avif",
  "happy_vals_day_casey/game-photos/25.avif",
  "happy_vals_day_casey/game-photos/26.avif",
  "happy_vals_day_casey/game-photos/27.avif",
  "happy_vals_day_casey/game-photos/28.avif",
  "happy_vals_day_casey/game-photos/29.avif",
  "happy_vals_day_casey/game-photos/30.avif",
  "happy_vals_day_casey/game-photos/31.avif",
  "happy_vals_day_casey/game-photos/32.avif",
  "happy_vals_day_casey/game-photos/33.avif",
  "happy_vals_day_casey/game-photos/34.avif",
  "happy_vals_day_casey/game-photos/35.avif",
  "happy_vals_day_casey/game-photos/36.avif",
];

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 2) {
      // Change step after 5 seconds
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Congratulations! You have completed the game.
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            I have a surprise for you!
          </motion.h2>
        )}
        {step === 2 && (
          <motion.div
            key="step-2"
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            {/* Image Grid Background */}
            <div className="absolute inset-0 grid grid-cols-6 opacity-10">
              {images.slice(0, 36).map((src, index) => (
                <div key={index} className="relative h-full">
                  <Image
                    src={src}
                    alt={`Memory ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <h2
              className={`text-5xl font-semibold mb-8 ${playfairDisplay.className}`}
            >
              Will you be my Valentine?
            </h2>
            <Image
              src="/sad_hamster.png"
              alt="Sad Hamster"
              width={200}
              height={200}
            />
            <div className="flex space-x-4 mt-10">
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleYesClick}
              >
                Yes, I will! 🥰
              </button>
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
                style={
                  position
                    ? {
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                      }
                    : {}
                }
                onMouseEnter={() => setPosition(getRandomPosition())}
                onClick={() => setPosition(getRandomPosition())}
              >
                No, I won&apos;t 🥹
              </button>
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step-3"
            className={`text-4xl font-semibold mb-4 flex flex-col justify-center items-center ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Happy Valentine's Day, babyy! 💕
            <p className="text-sm mt-4">No words can truly capture how much I love you!!! 💌<br>I choose you every day, not just today. Always you.</br><br>With love, Daniel❤️</br></p>
            <Image
              src="/hamster_jumping.gif"
              alt="Hamster Feliz"
              width={200}
              height={200}
              unoptimized
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute w-full h-full">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}
