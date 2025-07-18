// src/App.tsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Heroslider";
import CollectionGrid from "./components/CollectionGrid";
import ProductGrid from "./components/ProductGrid";
import ExploreWoodsSection from "./components/WoodSection";
import Footer from "./components/Footer";
import Collection from "./context/Collections";
import ProductDescription from "./components/ProductDescription";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CollectionGrid />
              <ProductGrid />
              <ExploreWoodsSection />
            </>
          }
        />

        {/* Dynamic Collection Page */}
        <Route path="/collection/:name" element={<Collection />} />
         <Route path="/product-description/:id" element={<ProductDescription />} />
         <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;
