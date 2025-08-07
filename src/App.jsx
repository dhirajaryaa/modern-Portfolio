import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter } from "react-router";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
    <div className="antialiased min-h-screen w-full font-body">
      <Header />
      <main className="max-w-3xl w-full mx-auto"> 
        <Hero />
        <Skills />
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;

