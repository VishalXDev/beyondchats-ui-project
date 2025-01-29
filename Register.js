import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Verification code sent to email!");
    navigate("/organization");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">User Registration</h2>
        <input type="text" name="name" placeholder="Name" className="block p-2 mb-2 border" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="block p-2 mb-2 border" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="block p-2 mb-2 border" onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}

export default Register;
