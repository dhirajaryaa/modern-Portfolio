import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen w-full font-body bg-white text-gray-800 dark:bg-slate-950 dark:text-white transition-colors duration-500">
        <Header setTheme={setTheme} theme={theme} />
        <main className="max-w-3xl w-full mx-auto px-2 sm:px-4">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
