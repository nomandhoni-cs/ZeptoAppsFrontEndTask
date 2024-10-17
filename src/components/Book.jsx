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
        {/* Book title, limited to one line with ellipsis if too long */}
        <div className="text-left font-bold font-poppins text-xl mb-2 text-[#554333] truncate">
          {book.title}
        </div>

        {/* Author information */}
        <p className="text-left text-gray-700 text-base">
          by {book.authors.map((author) => author.name).join(", ")}
        </p>

        {/* Genre display */}
        <p className="text-left text-gray-700 text-xs pt-2">Genre:</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {book.subjects.slice(0, 4).map((subject, index) => {
            // Limit genre to 2 words, truncate with '...' if too long
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

          {/* Show remaining genres as a '3+' pill if more than 4 */}
          {book.subjects.length > 4 && (
            <span className="bg-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full">
              {`${book.subjects.length - 4}+`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
