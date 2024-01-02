import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./pages/Alert";
import String from "./pages/String";
import Prompt from "./pages/Prompt";
function App() {
  return (
    <div className="min-h-screen w-screen p-0 bg-white text-gray-600 text-lg ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/string" element={<String />} />
          <Route path="/prompt" element={<Prompt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
