import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureProjects from "./components/FeatureProjects";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
    <div className="antialiased min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <FeatureProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

