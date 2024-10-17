import heart from "../assets/heartNoFill.svg"; // Import the heart icon

const Book = ({ book }) => {
  return (
    <div className="relative h-[500px] bg-slate-50 shadow-sm mx-auto dark:bg-dark-tertiary rounded overflow-hidden rounded-t-2xl">
      <div className="relative">
        {/* Container with a fixed aspect ratio for consistent height */}
        <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={book.formats["image/jpeg"]}
            alt={`Cover of ${book.title}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "path/to/placeholder-image.jpg"; // Add a placeholder in case of missing images
            }}
          />
        </div>

        {/* Heart button for favorites */}
        <button
          className="absolute top-2 right-2 bg-iconBg p-2 rounded-full shadow hover:scale-105 transition-transform duration-300"
          aria-label="Add to favorites"
        >
          <img src={heart} alt="Add to favorites" className="h-6 w-6" />
        </button>
      </div>

      <div className="px-3 py-3">
        <div className="text-left font-bold font-poppins text-xl mb-2 text-[#554333]">
          {book.title}
        </div>
        <p className="text-left text-gray-700 text-base">
          by {book.authors.map((author) => author.name).join(", ")}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Genre: {book.subjects.join(", ")}
        </p>
        <p className="text-gray-500 text-xs mt-2">ID: {book.id}</p>
      </div>
    </div>
  );
};

export default Book;
