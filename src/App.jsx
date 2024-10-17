import "./App.css";

import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import Homepage from "./pages/Homepage";
import MyWishList from "./pages/MyWishList";
import SingleBook from "./components/SingleBook";

function App() {
  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUsingSearch, setIsUsingSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [wishListedBooks, setWishListedBooks] = useState([]);

  console.log(isUsingSearch);

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

  // Filter books based on search query
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authors.some((author) =>
        author.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  useEffect(() => {
    if (isUsingSearch) {
      setSearchResults(filteredBooks);
    } else {
      setSearchResults(books);
    }
  }, [searchQuery]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage wishListedBooks={wishListedBooks} />,
      children: [
        {
          index: true,
          element: (
            <Homepage
              isUsingSearch={isUsingSearch}
              setIsUsingSearch={setIsUsingSearch}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              books={searchQuery.length > 0 ? searchResults : books}
              fetchBooks={fetchBooks}
              loading={loading}
              nextPage={nextPage}
              prevPage={prevPage}
              setWishListedBooks={setWishListedBooks}
            />
          ),
        },
        {
          path: "mywishlist",
          element: (
            <MyWishList
              books={wishListedBooks}
              setWishListedBooks={setWishListedBooks}
            />
          ),
        },
        {
          path: "book/:id",
          element: <SingleBook />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// <div className="App bg-primary md:px-10 xl:px-30 space-y-7">
//   <Navbar wishListedBooks={wishListedBooks} />
//   <Search
//     isUsingSearch={isUsingSearch}
//     setIsUsingSearch={setIsUsingSearch}
//     searchQuery={searchQuery}
//     setSearchQuery={setSearchQuery}
//   />
//   <FilteringAndPagination />
//   <BooksCollection
//     books={searchQuery.length > 0 ? searchResults : books}
//     fetchBooks={fetchBooks}
//     loading={loading}
//     nextPage={nextPage}
//     prevPage={prevPage}
//     setWishListedBooks={setWishListedBooks}
//   />
// </div>
