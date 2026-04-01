import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { WhyUs } from './components/sections/WhyUs';
import { TargetAudience } from './components/sections/TargetAudience';
import { Philosophy } from './components/sections/Philosophy';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <TargetAudience />
        <Philosophy />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
