import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./App.css";
import FormDescription from "./components/FormDescription/FormDescription";
import Forms from "./components/Forms/Forms";
import MemberCard from './components/MemberCard/MemberCard';
import MembersDescription from "./components/MembersDescription/MembersDescription";
import Navbar from "./components/Navbar/Navbar";
import SectionPresentation from "./components/SectionPresentation/SectionPresentation";

const members = [
  {
    photo: "https://avatars.githubusercontent.com/u/94319702?v=4",
    name: "Maria de Fátima Nunes Alves",
    role: "Desenvolvedora Frontend",
    technologies: [],
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
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0a0920]">
        <header className="">
          <Navbar />
        </header>

        <main className="px-8 py-6 gap-8">
          <SectionPresentation />
          <section className="">
            <MembersDescription />

            {members.map((member) => (
              <MemberCard
                key={member.name}
                photo={member.photo}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
                github={member.github}

              />
            ))}

          </section>

          <section className="w-full flex flex-col justify-center items-center gap-8 lg:flex-row lg:items-start">
            <FormDescription />
            <Forms />
          </section>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
