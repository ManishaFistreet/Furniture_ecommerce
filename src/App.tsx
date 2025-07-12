// src/App.tsx
import CollectionGrid from "./components/CollectionGrid";
import Footer from "./components/Footer";
import Hero from "./components/Heroslider";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import ExploreWoodsSection from "./components/WoodSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <CollectionGrid />
      </div>
        <ProductGrid />
        <ExploreWoodsSection />
        <Footer />
    </>
  );
};

export default App;