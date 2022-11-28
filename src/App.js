import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
