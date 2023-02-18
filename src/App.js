import "./App.css";
import Zoom from "react-reveal/Zoom";
import { About } from "./Routes/About";
import { Stats } from "./Routes/Stats";
import { Skills } from "./Routes/Skills";
import { Footer } from "./Routes/Footer";
import { Navbar } from "./Routes/Navbar";
import { Projects } from "./Routes/Projects";
import { LottieAnimation } from "./Routes/LottieAnimation";
import { useState, useEffect } from "react";
import { Calender } from "./Routes/Calender";
import { Home } from "./Routes/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return loading ? (
    <LottieAnimation />
  ) : (
    <>
      <Navbar />
      <Zoom>
        <About />
      </Zoom>
      <Zoom>
        <Home />
      </Zoom>
      <Zoom>
        <Skills />
      </Zoom>
      <Projects />
      <Zoom>
        <Stats />
      </Zoom>
      <Zoom>
        <Calender />
      </Zoom>
      <Footer />
    </>
  );
}
