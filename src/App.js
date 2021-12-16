import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Footer from "./components/Shared/Footer/Footer";
import Navigation from "./components/Shared/Navigation/Navigation";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/view-details:productId"
              element={<ProductDetails />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
