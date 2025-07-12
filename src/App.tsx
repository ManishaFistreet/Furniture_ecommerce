// src/App.tsx
import {Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Heroslider";
import CollectionGrid from "./components/CollectionGrid";
import ProductGrid from "./components/ProductGrid";
import ExploreWoodsSection from "./components/WoodSection";
import Footer from "./components/Footer";
import Collection from "./context/Collections";

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
              <Footer />
            </>
          }
        />

        {/* Dynamic Collection Page */}
        <Route path="/collection/:name" element={<Collection />} />
      </Routes>
      </>
    
  );
};

export default App;
