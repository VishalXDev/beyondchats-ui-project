import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 to-black p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-6">Welcome to BeyondChats</h1>
      <p className="text-lg text-center text-gray-300 mb-8">Create and integrate your chatbot easily.</p>
      <Link to="/register">
        <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold text-xl rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-l from-teal-500 to-blue-500 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-opacity-50">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Home;
