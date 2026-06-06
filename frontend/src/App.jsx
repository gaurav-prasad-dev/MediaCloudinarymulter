import { Routes, Route, Link } from "react-router-dom";
import Upload from "./pages/Upload";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Upload</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}