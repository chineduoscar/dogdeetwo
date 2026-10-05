import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Adopt from "./pages/Adopt";
import MainLayout from "./layout/MainLayout";
import AdoptLayout from "./layout/AdoptLayout";
import SingleDog from "./pages/SingleDog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dog/:id" element={<SingleDog />} />
        </Route>

        <Route element={<AdoptLayout />}>
          <Route path="/adopt" element={<Adopt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
