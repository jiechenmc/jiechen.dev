import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";
import Summary from "./Summary"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="justify-evenly sm:flex-col md:flex-row">
        <About />
        <Education />
        <Projects />
        <Summary />
      </div>
      <Footer />
    </main>
  );
}
