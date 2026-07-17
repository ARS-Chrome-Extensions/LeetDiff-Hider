import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Comparison from "./components/Comparison";
import Features from "./components/Features";
import Installation from "./components/Installation";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <Why />
        <Comparison />
        <Features />
        <Installation />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
