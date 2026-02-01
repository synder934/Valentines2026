import { useEffect } from "react";
import confetti from "canvas-confetti";
import HeartRain from "../components/HeartRain";
export default function Yes() {
  useEffect(() => {
    // Launch confetti from left and right sides
    const duration = 2 * 1000; // 2 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      // Left side
      confetti({
        ...defaults,
        origin: { x: 0, y: Math.random() },
      });

      // Right side
      confetti({
        ...defaults,
        origin: { x: 1, y: Math.random() },
      });
    }, 200);
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-pink-50">
      <HeartRain count={250} />

      <img
        src={`${process.env.PUBLIC_URL}/bear-kiss-bear-kisses.gif`}
        alt="Bear Kissing"
        // className="w-64 h-auto rounded-xl shadow-lg"s
      />
      <h1 className="text-4xl font-bold text-rose-600">
        🎉 YAYYYYY! Happy Valentine’s Day Blue! 🎉
      </h1>
    </div>
  );
}
