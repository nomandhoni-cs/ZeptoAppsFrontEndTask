import { Link } from "react-router-dom";
import BooksCollection from "../components/BooksCollection";

const MyWishList = ({ books, setWishListedBooks }) => {
  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl text-headingText font-semibold">My Wishlist</h1>
        <span className="text-gray-500">
          {books.length} {books.length === 1 ? "book" : "books"}
        </span>
      </div>

      {books.length > 0 ? (
        <BooksCollection
          books={books}
          setWishListedBooks={setWishListedBooks}
        />
      ) : (
        <div className="text-center text-lg text-gray-500 py-10">
          <p>Your wishlist is empty.</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Browse books to add some!
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyWishList;
