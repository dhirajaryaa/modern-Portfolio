import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureProjects from "./components/FeatureProjects";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white antialiased font-sans min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <FeatureProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

