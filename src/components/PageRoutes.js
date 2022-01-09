import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { VideoWatch } from "./VideoWatch";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoWatch />} />
    </Routes>
  );
};
