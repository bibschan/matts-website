import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Recognition from "@/components/Recognition";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="lg:px-16">
          <About />
          <Experience />
          <Recognition />
          <Community />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
