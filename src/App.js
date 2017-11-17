import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

let links = [
  {
    name: "Home",
    url: "#"
  },
  {
    name: "About",
    url: "#"
  },
  {
    name: "Contact",
    url: "#"
  },
]
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar brand="Kobina Otchere" links={links}/> */}
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    )
  }
}

export default App;
