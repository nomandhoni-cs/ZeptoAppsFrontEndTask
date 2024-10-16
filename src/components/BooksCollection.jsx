import Book from "./Book";
import SkeletonLoader from "./SkeletonLoader";

const BooksCollection = (props) => {
  const { books, loading, fetchBooks, prevPage, nextPage } = props;
  return (
    <div className="container mx-auto">
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
