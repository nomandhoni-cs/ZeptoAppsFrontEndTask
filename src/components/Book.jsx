const Book = ({ book }) => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-dark-tertiary shadow-md rounded overflow-hidden rounded-t-2xl">
      <img
        className="h-56 w-full object-cover"
        src={book.formats["image/jpeg"]}
        alt={`Cover of ${book.title}`}
      />
      <div className="px-3 py-3">
        <div className="text-left font-bold font-poppins text-xl mb-2 text-black">
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
