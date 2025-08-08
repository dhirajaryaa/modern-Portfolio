import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter } from "react-router";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Contributions from "./components/Contributions";
import Thoughts from "./components/Thoughts";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen w-full font-body px-2 sm:px-4 bg-white text-gray-800 dark:bg-slate-950 dark:text-white">
        <Header />
        <main className="max-w-3xl w-full mx-auto">
          <Hero />
          <Skills />
          <FeaturedProject />
          <Contributions />
          <Thoughts />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
