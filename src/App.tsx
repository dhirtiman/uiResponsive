import './App.css';
import AnnouncementBar from './components/header/AnnouncementBar';
import NavBar from './components/header/NavBar';
import Hero from './components/Hero';
import LogoCloud from './components/sections/LogoCloud';

function App() {
  return (
    <section className="h-screen w-auto ">
      <AnnouncementBar />
      <NavBar/>
      <Hero/>
      <LogoCloud/>
    </section>
  );
}

export default App;
