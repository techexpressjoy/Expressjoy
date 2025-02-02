"use client";
import React, { useState } from "react";
import { Button } from "@heroui/react";
import confetti from "canvas-confetti";

export default function HomePage(){
  const [showMessage, setShowMessage] = useState(false);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      startVelocity: 40,
      scalar: 1.2,
      origin: { y: 0.6 },
    });

    setShowMessage(true); 
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 to-red-500">
      <Button
        disableRipple
        className="relative overflow-hidden px-12 py-4 rounded-full text-white font-bold text-lg shadow-2xl 
                  bg-white/20 backdrop-blur-lg border border-white/30 transition-all duration-500
                  hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]
                  after:content-[''] after:absolute after:inset-0 after:bg-white/10 after:rounded-full
                  after:scale-125 after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100"
        size="lg"
        onClick={handleConfetti}
      >
        🎁 Surprise Me!
      </Button>

      {showMessage && (
        <div className="mt-6 text-white text-3xl font-bold transition-all duration-700 animate-fadeIn">
          🎉 Welcome to GiftHub! 🎁
        </div>
      )}
    </div>
  );
};

