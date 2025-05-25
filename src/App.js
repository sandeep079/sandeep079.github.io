import "./App.css";
import Art from "./components/art/Art";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Experience />
        <Project />
        <Blog />
        {/* <Art /> */}
        {/* <Contact /> */}
        <Footer />
      </main>
    </>
  );
};

export default App;
