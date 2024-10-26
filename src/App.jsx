import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-gray-900 text-white antialiased font-sans min-h-screen w-full">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
