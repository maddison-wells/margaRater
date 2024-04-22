import "./App.scss";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Container/Home/Home";
import Recipe from "./Container/Recipe/Recipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
