import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobilNav from "./layout/MobilNav";
import Navigation from "./layout/Nav";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Navigation />
        <MobilNav />
        <Routes>
          <Route path="/room-home" element={<Home />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
