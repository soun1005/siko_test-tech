import Nav from './components/layouts/Nav';
import Hero from './components/pages/Hero';
import Partenaire from './components/pages/Partenaire';
import Review from './components/pages/Review';
import Contact from './components/pages/Contact';
import './App.css';

function App() {
  return (
    <div className=" min-h-screen">
      <Nav />
      <Hero />
      <Partenaire />
      <Review />
      <Contact />
    </div>
  );
}

export default App;
