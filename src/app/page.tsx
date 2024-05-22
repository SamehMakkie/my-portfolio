import MouseFollower from "../../components/MouseFollower/MouseFollower";
import Contact from "../../views/Contact/Contact";
import Footer from "../../views/Footer/Footer";
import Hero from "../../views/Hero/Hero";
import PortfolioProjects from "../../views/PortfolioProjects/PortfolioProjects";
import Profile from "../../views/Profile/Profile";
import Skills from "../../views/Skills/Skills";

export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-52">
      <Hero />
      <Profile />
      <Skills />
      <PortfolioProjects />
      <Contact />
      <Footer />
      <MouseFollower />
    </div>    
  );
}
