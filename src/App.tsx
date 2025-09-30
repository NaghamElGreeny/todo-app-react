import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import ToDoList from "./components/Sections/ToDoList";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col gap-4 p-4 overflow-auto">
        {/* Tasks Container */}
        <ToDoList />

        {/* Notes Container (future) */} 
        {/* <section className="bg-yellow-200 rounded-lg p-4 shadow-md w-full max-w-2xl mx-auto">
          <h2 className="font-bold mb-2">Notes</h2>
          NotesList
        </section> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
