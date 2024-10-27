import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureProjects from "./components/FeatureProjects";

function App() {
  return (
    <div className="bg-gray-900 text-white antialiased font-sans min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <FeatureProjects />
      </main>
    </div>
  );
}

export default App;
