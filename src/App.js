import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home" className="p-2">
            Mr. Arun's Course
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto p-3">
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="active">
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
