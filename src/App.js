import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;
