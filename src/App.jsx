import Download from "./Sections/Download.jsx";
import Faqs from "./Sections/Faq.jsx";
import Features from "./Sections/Features.jsx";
import Footer from "./Sections/Footer.jsx";
import Header from "./Sections/Header.jsx";
import Hero from "./Sections/Hero.jsx";
import Pricing from "./Sections/Pricing.jsx";
import Testimonials from "./Sections/Testimonials.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faqs />
      <Testimonials />
      <Download />  
      <Footer/>
    </main>
  );
};

export default App;
