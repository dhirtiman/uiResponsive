import './App.css';
import AnnouncementBar from './components/header/AnnouncementBar';
import NavBar from './components/header/NavBar';

function App() {
  return (
    <section className="h-screen w-auto ">
      <AnnouncementBar />
      <NavBar/>
    </section>
  );
}

export default App;
