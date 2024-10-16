import "./App.css";
import BooksCollection from "./components/BooksCollection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-primary">
      <Navbar />
      <BooksCollection />
    </div>
  );
}

export default App;
