import "./App.css";
import FormDescription from "./components/FormDescription/FormDescription";
import Navbar from "./components/Navbar/Navbar";
import Forms from "./components/Forms/Forms";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0a0920]">
        <header className="h-14 p-10">
          <Navbar />
        </header>

        <main className="flex flex-1 px-8 py-6 gap-8">
          <section className="w-full flex flex-wrap flex-col justify-center items-center lg:flex-row lg:items-start">
            <FormDescription />
            <Forms />
          </section>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
