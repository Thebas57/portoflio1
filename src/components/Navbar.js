import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    //Fonction pour le scroll
    const onScroll = () => {
      if (window.scrollY > 100) setIsScroll(true);
      else setIsScroll(false);
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={isScroll ? "scroll" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="./img/logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "activeLink" : ""}
              onClick={(e) => setActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Skills"
              className={activeLink === "skills" ? "activeLink" : ""}
              onClick={(e) => setActiveLink("skills")}
            >
              Compétences
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              className={activeLink === "projects" ? "activeLink" : ""}
              onClick={(e) => setActiveLink("projects")}
            >
              Projets
            </Nav.Link>
          </Nav>
          <div className="navbar-networks">
            <div>
              <a href="/#">
                <FaGithubSquare />
              </a>
              <a href="/#">
                <FaLinkedin />
              </a>
            </div>
            <button>Let's goo</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
