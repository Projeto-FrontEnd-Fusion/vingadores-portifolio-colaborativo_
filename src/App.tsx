import "./App.css";
import FormDescription from "./components/FormDescription/FormDescription";
import Navbar from "./components/Navbar/Navbar";
import SectionPresentation from "./components/SectionPresentation/SectionPresentation";
import Forms from "./components/Forms/Forms";
import MemberCard from './components/MemberCard/MemberCard';
import Carousel from "./components/Carousel/Carousel";
import { useState } from "react";
import SectionMembers from "./components/SectionMembers/SectionMembers";

const members = [
  {
    photo: "https://avatars.githubusercontent.com/u/94319702?v=4",
    name: "Maria de Fátima Nunes Alves",
    role: "Desenvolvedora Frontend",
    technologies: [
      <img width="32" height="32" src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/external-react-a-javascript-library-for-building-user-interfaces-logo-tritone-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-tritone-tal-revivo"/>
    ],
    linkedin: "https://linkedin.com/in/maria-de-fatima-nunes-alves/",
    github: "https://github.com/alvesmariadefatima",
  },

  {
    photo: "https://avatars.githubusercontent.com/u/109109668?v=4",
    name: "Caroline Moraes",
    role: "Desenvolvedora Frontend",
    technologies: [],
    linkedin: "https://www.linkedin.com/in/carolinemmoraes/",
    github: "https://github.com/carolinedemoraes",
  },

  {
    photo: "https://avatars.githubusercontent.com/u/62396328?v=4",
    name: "Breno Matheus",
    role: "Desenvolvedor Frontend",
    technologies: [],
    linkedin: "https://www.linkedin.com/in/breno-mateus-8b9a99211/",
    github: "https://github.com/Breno-Mateus",
  },

  {
    photo: "https://avatars.githubusercontent.com/u/86496222?v=4",
    name: "Rafael Euzebio",
    role: "Desenvolvedor Full-Stack",
    technologies: [],
    linkedin: "https://linkedin.com/in/rafael-euzebio",
    github: "https://github.com/rafael-euzebio",
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = members.length;

  const handlePrev = () => {
    if(activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if(activeIndex < totalCards - 1)  {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0920]">
      <header className="h-14 p-10">
        <Navbar />
      </header>

      <SectionPresentation />

      <SectionMembers />

      <main className="px-8 py-6 gap-8">
        <section className="overflow-hidden">
          <Carousel>
            {members.map((member) => (
              <MemberCard
                key={member.name}
                photo={member.photo}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
                github={member.github}
                handlePrev={handlePrev}
                handleNext={handleNext}
                activeIndex={activeIndex}
                totalCards={totalCards}
              />
            ))}
          </Carousel>
        </section>

        <section className="w-full flex flex-col justify-center items-center gap-8 lg:flex-row lg:items-start">
          <FormDescription />
          <Forms />
        </section>
      </main>
    </div>
  );
}

export default App;