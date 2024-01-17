import Nav from "./components/layouts/Navbar/Nav";
import Hero from "./components/pages/Hero";
import Partenaire from "./components/pages/Partenaire";
import Review from "./components/pages/Review";
import Contact from "./components/pages/Contact";
import Footer from "./components/layouts/Footer";
import PageUpBtn from "./components/common/PageUpBtn";
import "./App.css";

function App() {
  return (
    <div className="relative">
      <Nav />
      <section className="h-[10rem] phone:h-[8rem]"></section>
      <Hero />
      <Partenaire />
      <Review />
      <Contact />
      <Footer />
      <PageUpBtn />
    </div>
  );
}

export default App;
