const Filter = ({ uniqueGenres, setCurrentGenreFilter }) => {
  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setCurrentGenreFilter(selectedGenre);
  };

  return (
    <div className="mb-4">
      <select
        id="genre-select"
        name="genres"
        className="block w-full p-2 border border-secondary text-headingText rounded-lg bg-inherit focus:ring-secondary focus:border-secondary"
        onChange={handleGenreChange}
      >
        <option className="text-headingText" value="">
          Please choose a genre
        </option>
        {uniqueGenres.map((genre, index) => (
          <option className="text-headingText" key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
