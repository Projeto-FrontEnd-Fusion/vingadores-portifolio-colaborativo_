import "./App.css";
import FormDescription from "./components/FormDescription/FormDescription";
import Navbar from "./components/Navbar/Navbar";
import SectionPresentation from "./components/SectionPresentation/SectionPresentation";
import Forms from "./components/Forms/Forms";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0a0920]">
        <header className="">
          <Navbar />
        </header>

        <main className="px-8 py-6 gap-8">
          <SectionPresentation />
          <section className="w-full flex flex-wrap items-center flex-col lg:flex-row lg:justify-between lg:items-start">
            <FormDescription />
            <Forms />
          </section>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
