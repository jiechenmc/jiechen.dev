import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="justify-evenly sm:flex-col md:flex-row">
        <About />
        {/* <Classes /> */}
        <Education />
        {/* <Projects /> */}
        <Projects />
        {/* <TechStack /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
