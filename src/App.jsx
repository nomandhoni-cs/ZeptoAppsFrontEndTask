import { useState } from "react";
import "./App.css";
import BooksCollection from "./components/BooksCollection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BooksCollection />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
