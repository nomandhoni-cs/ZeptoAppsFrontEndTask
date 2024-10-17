const Search = (props) => {
  const { searchQuery, setSearchQuery, setIsUsingSearch } = props;
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="flex-1 p-2 md:p-4 max-w-screen-lg">
          <div className="relative flex items-center divide-x-1 sm:divide-x-2 divide-secondary w-full border border-secondary h-14 sm:h-16 rounded-full focus-within:shadow-lg overflow-hidden">
            <input
              className="peer flex-1 h-full w-full outline-primary outline-1 text-sm bg-inherit text-gray-700 pl-5"
              type="text"
              id="search"
              placeholder="Search books..."
              value={searchQuery}
              onFocus={() => setIsUsingSearch(true)}
              onBlur={() => setIsUsingSearch(false)}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full bg-secondary rounded-full flex items-center text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-headingText"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <span className="hidden lg:block text-lg text-[#554333]">
                Search
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
