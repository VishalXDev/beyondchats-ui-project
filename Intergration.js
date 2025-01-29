import { useState } from "react";
import ConfettiSuccess from "../components/ConfettiSuccess";

function Integration() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl mb-4">Chatbot Integration</h2>
      <button onClick={() => setShowConfetti(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-2">Test Chatbot</button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Integrate on Your Website</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Test Integration</button>
      {showConfetti && <ConfettiSuccess />}
    </div>
  );
}

export default Integration;
