import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
