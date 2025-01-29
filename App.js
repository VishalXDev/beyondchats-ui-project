import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Organization from "./pages/Organization";
import Integration from "./pages/Intergration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/integration" element={<Integration />} />
      </Routes>
    </Router>
  );
}

export default App;
