import Confetti from "react-confetti";
import { useState } from "react";

function ConfettiSuccess() {
  const [showConfetti, setShowConfetti] = useState(true);

  return (
    <div>
      {showConfetti && <Confetti />}
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setShowConfetti(false)}>
        Stop Confetti
      </button>
    </div>
  );
}

export default ConfettiSuccess;
