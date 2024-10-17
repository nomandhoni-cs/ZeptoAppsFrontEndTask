import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Book = ({ book, setWishListedBooks }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  // Check if the book is already in the favorites list when the component mounts
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorited = favorites.some(
      (favBook) => favBook.id === book.id
    );

    setWishListedBooks(favorites);
    setIsFavorited(isAlreadyFavorited);
  }, [book.id]);

  // Toggle the favorite status
  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorited) {
      // If already favorited, remove the book from favorites
      const updatedFavorites = favorites.filter(
        (favBook) => favBook.id !== book.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setWishListedBooks(updatedFavorites);
    } else {
      // Add the book to favorites
      favorites.push(book);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setWishListedBooks(favorites);
    }

    setIsFavorited(!isFavorited);
  };

  return (
    <div className="relative w-full h-[500px] bg-card shadow-sm mx-auto dark:bg-dark-tertiary rounded-lg overflow-hidden rounded-t-2xl">
      <div className="relative">
        <div className="w-full h-72 bg-gray-200 flex items-center justify-center relative overflow-hidden">
          <img
            className="w-full h-full object-fill"
            src={book.formats["image/jpeg"]}
            alt={`Cover of ${book.title}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "path/to/placeholder-image.jpg"; // Add a placeholder in case of missing images
            }}
          />

          {/* Bottom overlay */}
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        </div>

        {/* Heart button for favorites */}
        <button
          onClick={handleFavorite}
          className="absolute bottom-2 right-2 bg-iconBg p-1 rounded-full shadow hover:scale-105 transition-transform duration-300 z-20 flex hover:space-x-1 items-center justify-center hover:px-3 group"
          aria-label="Add to wishlist"
        >
          {/* Show "Added" or "Add" based on favorite state */}
          <span className="text-black hidden group-hover:block transition-opacity duration-700">
            {isFavorited ? "Added" : "Add to wishlist"}
          </span>
          {isFavorited ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#DD845A"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-headingText"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </button>

        {/* Book ID */}
        <p className="absolute bottom-2 left-2 text-primary text-sm font-bold mt-2 z-20">
          {book.id}
        </p>
      </div>

      <Link to={`/book/${book.id}`}>
        <div className="px-3 py-3">
          {/* Book title */}
          <div className="text-left font-bold font-poppins text-xl mb-2 text-headingText truncate">
            {book.title}
          </div>

          {/* Author information */}
          <p className="text-left text-gray-700 text-base">
            by {book.authors.map((author) => author.name).join(", ")}
          </p>

          {/* Genre display */}

          <div className="flex flex-wrap gap-2 mt-2">
            <p className="text-left text-gray-700 text-base">Genre:</p>
            {book.subjects.slice(0, 4).map((subject, index) => {
              const truncatedSubject = subject.split(" ").slice(0, 2).join(" ");
              const isTruncated = subject.split(" ").length > 2;
              return (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {isTruncated ? `${truncatedSubject}...` : truncatedSubject}
                </span>
              );
            })}

            {book.subjects.length > 4 && (
              <span className="bg-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full">
                {`${book.subjects.length - 4}+`}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
