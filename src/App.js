import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Menu from "./pages/Menu";
import Planets from "./pages/Planets";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </>
  );
}

export default App;
