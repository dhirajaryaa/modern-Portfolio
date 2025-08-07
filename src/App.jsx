import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter } from "react-router";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Contributions from "./components/Contributions";
import Thoughts from "./components/Thoughts";

function App() {
  return (
    <BrowserRouter>
    <div className="antialiased min-h-screen w-full font-body">
      <Header />
      <main className="max-w-3xl w-full mx-auto"> 
        <Hero />
        <Skills />
        <FeaturedProject />
        <Contributions />
        <Thoughts />
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;

