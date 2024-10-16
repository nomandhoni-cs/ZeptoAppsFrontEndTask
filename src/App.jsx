import "./App.css";
import BooksCollection from "./components/BooksCollection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BooksCollection />
      <div className="card"></div>
    </>
  );
}

export default App;
