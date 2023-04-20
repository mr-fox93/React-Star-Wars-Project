import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="img-div">
        <div className="div">
          <img className="imgg" src="/1.png" alt="img" />
        </div>
        <div className="div">
          <img className="imgg" src="/2.png" alt="img" />
        </div>
        <div className="div">
          <img className="imgg" src="/3.png" alt="img" />
        </div>
      </div>
    </>
  );
}

export default App;
