import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Energydrinks from './components/Energydrinks'
import Cracksec from './components/Cracksec'
import Events from './components/Events'
import Joinus from './components/Joinus'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Energydrinks />
      <Cracksec />
      <Events />
      <Joinus />
      <Footer />
    </main>
  );
}
