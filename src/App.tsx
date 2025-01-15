import "./App.css";
import FormDescription from "./components/FormDescription/FormDescription";
import Navbar from "./components/Navbar/Navbar";
import SectionPresentation from "./components/SectionPresentation/SectionPresentation";
import Forms from "./components/Forms/Forms";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0920]">
      <header className="h-14 p-4">
        <Navbar />
      </header>

      <SectionPresentation />

      <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 flex justify-center">
            <Carousel />
      </div>
    </div>

      <div className="flex flex-col md:flex-row flex-1 px-8 py-6 gap-8">
        <div className="flex-1">
          <FormDescription />
        </div>

        <div className="flex-1">
          <Forms />
        </div>
      </div>
    </div>
  );
}

export default App;