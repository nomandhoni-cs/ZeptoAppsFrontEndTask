import Filter from "./Filter";
import Pagination from "./Pagination";

const FilteringAndPagination = (props) => {
  const {
    fetchBooks,
    prevPage,
    nextPage,
    uniqueGenres,
    setCurrentGenreFilter,
  } = props;
  return (
    <div className="filtering-and-pagination flex justify-between items-center space-x-5">
      <Filter
        uniqueGenres={uniqueGenres}
        setCurrentGenreFilter={setCurrentGenreFilter}
      />
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        fetchBooks={fetchBooks}
      />
    </div>
  );
};

export default FilteringAndPagination;
