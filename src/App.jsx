import "./App.scss";
import { About } from "./components/about/About";
import { ContactUs } from "./components/contactUs/ContactUs";
import { Copyright } from "./components/copyright/Copyright";
import { Footer } from "./components/footer/Footer";

import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { Tasks } from "./components/tasks/Tasks";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tasks />
      <Projects />
      <ContactUs />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
