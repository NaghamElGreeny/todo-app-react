import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";

function App() {
  console.log("app is ready");
  return (
    <div className="flex flex-col min-h-screen bg-green-50/50">
      <Navbar />

      {/* Main */}
      <main className="flex-grow bg-white border rounded-3xl mx-3 my-6 p-4 shadow-lg">
        {/* to-do list goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
