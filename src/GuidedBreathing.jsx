import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GuidedBreathing = () => {
  const navigate = useNavigate();

  // Define breathing steps (inhalation, hold, exhalation)
  const steps = [
    { label: "Breathe In", duration: 4, color: "#659287" },
    { label: "Hold Breath", duration: 7, color: "#9fb28a" },
    { label: "Breathe Out", duration: 8, color: "#FFD09B" },
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [timer, setTimer] = useState(steps[0].duration);
  const [isStarted, setIsStarted] = useState(false); // Track if timer has started

  // useEffect hook with proper dependencies
  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prev) => prev - 1); // Countdown the timer
        } else {
          // Transition to the next step
          const nextStepIndex = (stepIndex + 1) % steps.length;
          setStepIndex(nextStepIndex);
          setTimer(steps[nextStepIndex].duration);
        }
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [timer, stepIndex, isStarted, steps]); // Added isStarted to ensure the effect runs after start

  const handleStart = () => {
    setIsStarted(true);
    setTimer(steps[0].duration); // Reset the timer to start the first step
  };

  return (
    <div className="min-h-screen bg-[#FFD09B] text-[#482026] flex flex-col items-center justify-center p-8">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 bg-[#2a092b] text-white py-2 px-4 rounded-full hover:bg-[#659287] transition duration-300"
      >
        Back to Home
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Guided Breathing Exercise</h1>

      {/* Timer Circle */}
      <div
        className="relative flex items-center justify-center w-64 h-64 rounded-full"
        style={{
          background: `conic-gradient(${steps[stepIndex].color} ${(timer / steps[stepIndex].duration) * 360}deg, #FFF 0deg)`,
          border: `8px solid ${steps[stepIndex].color}`,
        }}
      >
        <div className="absolute flex flex-col items-center justify-center w-56 h-56 bg-[#FFD09B] rounded-full">
          <h2 className="text-2xl font-bold">{steps[stepIndex].label}</h2>
          <p className="text-xl">{timer}s</p>
        </div>
      </div>

      {/* Instruction */}
      <p className="mt-8 text-lg text-center">
        Follow the circle's motion: {steps[stepIndex].label.toLowerCase()} for{" "}
        {steps[stepIndex].duration} seconds.
      </p>

      {/* Let's Start Button */}
      {!isStarted && (
        <button
          onClick={handleStart}
          className="mt-6 bg-[#2a092b] text-white py-3 px-8 rounded-full hover:bg-[#659287] transition duration-300"
        >
          Let's Start
        </button>
      )}
    </div>
  );
};

export default GuidedBreathing;
