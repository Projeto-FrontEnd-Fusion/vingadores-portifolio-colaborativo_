import "./App.css";
import FormDescription from "./components/FormDescription/FormDescription";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0920]">
      {/* Navbar */}
      <header className="h-14 p-4">
        <Navbar />
      </header>

      <SectionPresentation />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 px-8 py-6 gap-8">
        {/* Left Section: Form Description */}
        <div className="flex-1">
          <FormDescription />
        </div>

        {/* Right Section: Forms */}
        <div className="flex-1">
          <Forms />
        </div>
      </div>
    </div>
  );
}

export default App;