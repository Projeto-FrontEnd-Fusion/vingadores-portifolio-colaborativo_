import "./App.css";
import FormDescription from "./components/FormDescription/FormDescription";
import Navbar from "./components/Navbar/Navbar";
import Forms from "./components/Forms/Forms";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0920]">
      <header className="flex h-14 p-10">
        <Navbar />
      </header>
      <div className="px-8 py-3 bg-">
        <FormDescription />
      </div>

      <Forms />
    </div>

  );
}

export default App;
