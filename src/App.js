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
    </div>
  );
}

export default App;
