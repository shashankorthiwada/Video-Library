import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { VideoWatch } from "./components/VideoWatch";
import { PageRoutes } from "./components/PageRoutes";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div style={{ display: "flex",alignItems:"normal",flexWrap:"wrap" }}>
        <Menu />
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
