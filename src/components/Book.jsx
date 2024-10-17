import heart from "../assets/heartNoFill.svg"; // Import the heart icon

const Book = ({ book }) => {
  return (
    <div className="relative w-full h-[500px] bg-slate-50 shadow-sm mx-auto dark:bg-dark-tertiary rounded overflow-hidden rounded-t-2xl">
      <div className="relative">
        {/* Container with a fixed aspect ratio for consistent height */}
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

          {/* Top overlay */}
          {/* <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-black/60 to-transparent z-10"></div> */}

          {/* Bottom overlay */}
          <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        </div>

        {/* Heart button for favorites */}
        <button
          className="absolute bottom-2 right-2 bg-iconBg p-1 rounded-full shadow hover:scale-105 transition-transform duration-300 z-20 flex hover:space-x-1 items-center justify-center hover:px-3 group"
          aria-label="Add to favorites"
        >
          {/* 'Add' text will only appear on hover */}
          <span className="text-black hidden group-hover:block transition-opacity duration-700">
            Add
          </span>
          <img src={heart} alt="Add to favorites" className="h-6 w-6" />
        </button>

        {/* Book ID */}
        <p className="absolute bottom-2 left-2 text-primary text-sm font-bold mt-2 z-20">
          {book.id}
        </p>
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
      </div>
    </div>
  );
};

export default Book;
