import './App.css';
import AnnouncementBar from './components/header/AnnouncementBar';
import NavBar from './components/header/NavBar';
import Hero from './components/sections/Hero';
import Feature1 from './components/sections/Feature1';
import LogoCloud from './components/sections/LogoCloud';

function App() {
  return (
    <section className="flex h-screen w-auto flex-col items-center">
      <AnnouncementBar />
      <NavBar />
      <Hero />
      <LogoCloud />
      <Feature1/>
    </section>
  );
}

export default App;
