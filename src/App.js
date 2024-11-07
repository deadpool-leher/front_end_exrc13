import Header from "./components/Head";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Clients from "./components/Clien";
import Features from "./components/Fiture";
import Pricing from "./components/Pircing";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Hero />
      <Clients />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
