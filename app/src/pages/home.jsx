import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeartRain from "../components/HeartRain";

export default function Home() {
  const navigate = useNavigate();
  const noRef = useRef(null);

  const handleYes = () => {
    navigate("/yes");
  };

  const moveNoButton = () => {
    const button = noRef.current;
    if (!button) return;

    // Get viewport dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Get button dimensions
    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;

    // Random positions, keeping the button fully on screen
    const x = Math.random() * (width - btnWidth);
    const y = Math.random() * (height - btnHeight);

    button.style.position = "fixed";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  };

  return (
    <div className="flex h-dvh items-center justify-center bg-pink-50">
      <HeartRain count={50} />
      <div className="border-[2px] border-rose-100 rounded-xl p-6 text-center">
        <h1 className="mb-6 text-2xl font-semibold text-rose-600">
          Dear Blue, Will you be my Valentine?
        </h1>

        <div className="flex justify-center gap-4 relative">
          <button
            className="rounded-lg bg-rose-500 px-6 py-2 font-medium text-white hover:bg-rose-600"
            onClick={handleYes}
          >
            Yes
          </button>

          <button
            ref={noRef}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="rounded-lg bg-gray-200 px-6 py-2 font-medium text-gray-700 transition-all duration-200"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
