"use client";

import { useEffect, useState } from "react";

export default function HeartRain({ count = 30 }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: count }, () => ({
      id: Math.random(),
      left: Math.random() * 100, // percent from left
      duration: 3 + Math.random() * 3, // 3–6s fall
      delay: Math.random() * 5, // stagger start
      size: 16 + Math.random() * 24, // px
    }));
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-50">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-pink-500 animate-fall"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            top: "-50px", // start offscreen
          }}
        >
          ❤️
        </span>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
