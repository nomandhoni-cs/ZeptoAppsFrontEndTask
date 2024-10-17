import logo from "../assets/NovelFlowTextDarkLogo.svg";
import logoMobile from "../assets/favicon.svg";
import heart from "../assets/heart.svg";
import search from "../assets/search.svg";

const Navbar = ({ searchQuery, setSearchQuery, setIsUsingSearch }) => {
  return (
    <>
      <header className="w-full mx-auto">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-2 lg:px-8 space-x-4 max-w-full"
        >
          <div className="flex-none">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <img
                alt="Mobile logo"
                src={logoMobile}
                className=" h-10 lg:h-16 w-auto"
              />
              <img
                alt="Desktop logo"
                src={logo}
                className="h-8 invisible hidden lg:visible lg:block w-auto"
              />
            </a>
          </div>
          <div className="flex-none">
            <button className="bg-transparent border-none p-1.5">
              <img src={heart} alt="Favorites icon" className="h-8" />
            </button>
          </div>
        </nav>
      </header>
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
              <img src={search} alt="Search icon" className="h-8" />
              <span className="hidden lg:block text-lg text-[#554333]">
                Search
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="py-5 flex items-center space-x-1 sm:space-x-4">
        <div className=" text-[#554333] flex items-center space-x-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span className="button-text hidden sm:block">Previous</span>
        </div>
        <div className=" text-[#554333] flex items-center space-x-2  cursor-pointer">
          <span className="button-text hidden sm:block">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
