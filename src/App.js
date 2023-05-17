import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
