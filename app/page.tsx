import Hero from "./Hero";
import About from "./About";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="justify-evenly sm:flex-col md:flex-row">
        <About />
        {/* <Classes /> */}
        {/* <Projects /> */}
        {/* <TechStack /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
