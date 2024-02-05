import "./App.css";
import BackToTop from "./components/BackToTop";
import Casino from "./components/Casino";
import Ellos from "./components/Ellos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jackpot from "./components/Jackpot";
import Lanza from "./components/Lanza";
import Más from "./components/Más";
import Nav from "./components/Nav";
import Nuestros from "./components/Nuestros";
import Poker from "./components/Poker";
import Preguntas from "./components/Preguntas";
import { useEffect, useState } from 'react';
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
    {data ? (
      <div>
     <Preloader/>
      </div>
    ) : (
    <div className="bg-[#00141B] overflow-x-clip">
      <div className="bg-[url(./assets/images/herobg.webp)] min-h-screen bg-cover bg-center bg-no-repeat">
        <Nav />
        <Header />
      </div>
      <Poker />
      <Nuestros/>
      <Jackpot/>
      <Casino/>
      <Más/>
      <Ellos/>
      <Preguntas/>
      <Lanza/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}
</div>);
}

export default App;
