import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const [singleBookData, setSingleBookData] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleBookData(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!singleBookData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const { title, authors, subjects, bookshelves, formats, download_count } =
    singleBookData;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        {/* Book Cover and Title */}
        <div className="p-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
            <img
              src={formats["image/jpeg"]}
              alt={`Cover of ${title}`}
              className="w-48 h-64 object-cover shadow-lg rounded-md"
            />
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {title}
              </h1>
              <p className="text-gray-700 text-md sm:text-lg lg:text-xl">
                by{" "}
                {authors.map((author) => (
                  <span key={author.name} className="font-semibold">
                    {author.name}{" "}
                    <span className="text-gray-500">
                      ({author.birth_year} - {author.death_year})
                    </span>
                  </span>
                ))}
              </p>
              <p className="text-sm sm:text-md text-gray-600">
                Total Downloads: {download_count}
              </p>
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div className="p-6">
          {/* Subjects */}
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Subjects:
            </h2>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Bookshelves */}
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Bookshelves:
            </h2>
            <div className="flex flex-wrap gap-2">
              {bookshelves.map((shelf, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm"
                >
                  {shelf}
                </span>
              ))}
            </div>
          </div>

          {/* Download Links */}
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Download Formats:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {Object.entries(formats).map(([format, url], index) => (
                <li key={index} className="text-sm sm:text-md text-blue-600">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {format}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
