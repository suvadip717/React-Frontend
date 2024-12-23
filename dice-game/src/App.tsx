import { useState } from "react";
import "./App.css";
import StarterPage from "./components/StarterPage";
import HomePage from "./components/HomePage";

function App() {
  const [togglePage, setTogglePage] = useState(false);
  const togglerpage = () => {
    setTogglePage((prev) => !prev);
  };
  return (
    <div className="font-['poppins']">
      {togglePage ? <HomePage /> : <StarterPage toggle={togglerpage} />}
    </div>
  );
}

export default App;
