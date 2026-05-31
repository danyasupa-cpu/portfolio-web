import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import { data } from "./data";
export default function App() {
  return (
    <div>
      <Hero
        image={data.image}
        fio={data.fio}
        prof={data.prof}
        bio={data.bio}
      ></Hero>
      <Skills skills={data.skills}></Skills>
      <Projects projects={data.projects}></Projects>
      <Footer contacts={data.contacts}></Footer>
    </div>
  );
}
