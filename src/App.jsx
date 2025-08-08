import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter } from "react-router";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Contributions from "./components/Contributions";
import Thoughts from "./components/Thoughts";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(()=>{
    const root = document.documentElement;
    if(theme === "dark"){
      root.classList.add('dark')
    }else{
      root.classList.remove('dark')
    };
    localStorage.setItem('theme',theme);
  },[theme])

  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen w-full font-body bg-white text-gray-800 dark:bg-slate-950 dark:text-white transition-colors duration-500">
        <Header setTheme={setTheme}/>
        <main className="max-w-3xl w-full mx-auto px-2 sm:px-4">
          <Hero />
          <Skills />
          <FeaturedProject />
          <Contributions theme={theme} />
          <Thoughts />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
