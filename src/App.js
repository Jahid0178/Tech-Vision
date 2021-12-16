import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Shared/Footer/Footer";
import Navigation from "./components/Shared/Navigation/Navigation";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
