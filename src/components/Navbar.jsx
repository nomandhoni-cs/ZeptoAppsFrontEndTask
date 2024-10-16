import logo from "../assets/NovelFlowTextDarkLogo.svg";
import logoMobile from "../assets/favicon.svg";
import heart from "../assets/heart.svg";
import search from "../assets/search.svg";

const Navbar = () => {
  return (
    <header className="bg-[#d6e0d5] w-full">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 space-x-4 max-w-full"
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
        <div className="flex-1">
          <div className="relative flex items-center divide-x-2 divide-secondary w-full border border-secondary h-12 rounded-lg focus-within:shadow-lg overflow-hidden">
            <input
              className="peer flex-1 h-full w-full outline-primary outline-1 text-sm bg-inherit text-gray-700 pl-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
            <div className="flex-none flex items-center justify-center px-4 h-full text-gray-300">
              <img src={search} alt="Search icon" className="h-8" />
              <span className="hidden lg:block text-2xl text-black">
                Search
              </span>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button className="bg-transparent border-none p-1.5">
            <img src={heart} alt="Favorites icon" className="h-8" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
