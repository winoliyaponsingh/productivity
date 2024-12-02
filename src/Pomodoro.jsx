import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pomodoro = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  // Format time in MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Timer logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert("Pomodoro session completed! Take a short break.");
    }
  }, [isRunning, timeLeft]);

  return (
    <div className="min-h-screen bg-[#FFD09B] text-[#482026] flex flex-col items-center justify-center font-sans">
      {/* Back to Home Button */}
      <button
        className="absolute top-4 left-4 bg-[#2a092b] text-white px-6 py-2 rounded-full hover:bg-[#659287] transition duration-300"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>

      <h1 className="text-5xl font-bold mb-4">Pomodoro Timer</h1>
      <div className="text-6xl font-mono my-6">{formatTime(timeLeft)}</div>

      {!isRunning ? (
        <button
          className="bg-[#2a092b] text-white py-3 px-8 rounded-full text-lg hover:bg-[#9fb28a] transition duration-300"
          onClick={() => setIsRunning(true)}
        >
          Let's Start
        </button>
      ) : (
        <button
          className="bg-[#2a092b] text-white py-3 px-8 rounded-full text-lg hover:bg-[#9fb28a] transition duration-300"
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>
      )}

      <button
        className="mt-4 bg-[#659287] text-white py-2 px-6 rounded-full hover:bg-[#2a092b] transition duration-300"
        onClick={() => {
          setTimeLeft(25 * 60);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Pomodoro;
