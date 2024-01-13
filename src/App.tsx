import Nav from "./components/layouts/Navbar/Nav";
import Hero from "./components/pages/Hero";
import Partenaire from "./components/pages/Partenaire";
import Review from "./components/pages/Review";
import Contact from "./components/pages/Contact";
import Footer from "./components/layouts/Footer";
import "./App.css";

function App() {
  return (
    <div className=" min-h-screen">
      <Nav />
      <Hero />
      <Partenaire />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
