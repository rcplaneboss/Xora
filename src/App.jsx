import Features from "./Sections/Features.jsx";
import Header from "./Sections/Header.jsx";
import Hero from "./Sections/Hero.jsx";
import Pricing from "./Sections/Pricing.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};

export default App;
