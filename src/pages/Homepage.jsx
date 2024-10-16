import BooksCollection from "../components/BooksCollection";
import FilteringAndPagination from "../components/FilteringAndPagination";
import Search from "../components/Search";

const Homepage = (props) => {
  const {
    isUsingSearch,
    setIsUsingSearch,
    searchQuery,
    setSearchQuery,
    books,
    fetchBooks,
    loading,
    nextPage,
    prevPage,
    setWishListedBooks,
    uniqueGenres,
    setCurrentGenreFilter,
  } = props;

  return (
    <>
      <Search
        isUsingSearch={isUsingSearch}
        setIsUsingSearch={setIsUsingSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <FilteringAndPagination
        nextPage={nextPage}
        prevPage={prevPage}
        fetchBooks={fetchBooks}
        uniqueGenres={uniqueGenres}
        setCurrentGenreFilter={setCurrentGenreFilter}
      />
      <BooksCollection
        books={books}
        fetchBooks={fetchBooks ? fetchBooks : null}
        loading={loading ? loading : false}
        nextPage={nextPage ? nextPage : null}
        prevPage={prevPage ? prevPage : null}
        setWishListedBooks={setWishListedBooks}
      />
    </>
  );
};

export default Homepage;
