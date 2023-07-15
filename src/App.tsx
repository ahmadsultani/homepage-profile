import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ButtonHome from "./components/ButtonHome";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <main className="text-gray-400 bg-gray-900 flex flex-col gap-40 pb-20">
        <Hero />
        <Projects />
        <Skills />
        <ButtonHome />
      </main>
    </>
  );
}

export default App;
