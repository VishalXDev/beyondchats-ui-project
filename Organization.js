import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Organization() {
  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] = useState({ name: "", website: "", description: "" });

  const handleChange = (e) => {
    setCompanyDetails({ ...companyDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/integration");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Setup Your Organization</h2>
        <input type="text" name="name" placeholder="Company Name" className="block p-2 mb-2 border" onChange={handleChange} required />
        <input type="url" name="website" placeholder="Website URL" className="block p-2 mb-2 border" onChange={handleChange} required />
        <textarea name="description" placeholder="Company Description" className="block p-2 mb-2 border" onChange={handleChange}></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </form>
    </div>
  );
}

export default Organization;
