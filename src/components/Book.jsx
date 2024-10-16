const Book = ({ book }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src={book.formats["image/jpeg"]}
        alt={`Cover of ${book.title}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">
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
