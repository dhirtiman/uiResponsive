import './App.css';
import AnnouncementBar from './components/header/AnnouncementBar';
import NavBar from './components/header/NavBar';
import Hero from './components/Hero';

function App() {
  return (
    <section className="h-screen w-auto ">
      <AnnouncementBar />
      <NavBar/>
      <Hero/>
    </section>
  );
}

export default App;
