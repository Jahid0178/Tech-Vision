import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUS from "./components/ContactUS/ContactUS";
import Login from "./components/Login/Login/Login";
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
              path="/productDetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
