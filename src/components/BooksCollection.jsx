import { useEffect, useState } from "react";
import Book from "./Book";
import SkeletonLoader from "./SkeletonLoader";

const BooksCollection = () => {
  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (url = "https://gutendex.com/books") => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4 text-center text-headingText">
        Books Collection
      </h1>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Show skeleton loader for each card while loading */}
          {[...Array(8)].map((_, idx) => (
            <SkeletonLoader key={idx} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      )}

      <div className="flex justify-between items-center my-6">
        <button
          onClick={() => prevPage && fetchBooks(prevPage)}
          disabled={!prevPage}
          className={`px-4 py-2 rounded text-white ${
            !prevPage && "opacity-50 cursor-not-allowed"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => nextPage && fetchBooks(nextPage)}
          disabled={!nextPage}
          className={`px-4 py-2 rounded bg-[#DD845A] text-white ${
            !nextPage && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BooksCollection;
