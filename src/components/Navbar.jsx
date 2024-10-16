import logo from "../assets/NovelFlowTextDarkLogo.svg";
import logoMobile from "../assets/favicon.svg";
import heart from "../assets/heart.svg";
import search from "../assets/search.svg";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 space-x-3"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <img alt="" src={logoMobile} className=" h-10 lg:h-16 w-auto" />
            <img
              alt=""
              src={logo}
              className="h-8 invisible hidden lg:visible lg:block w-auto"
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="relative flex items-center w-full border border-secondary h-12 rounded-lg focus-within:shadow-lg overflow-hidden">
            <input
              className="peer h-full w-full outline-primary outline-1 text-sm bg-inherit text-gray-700 pl-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <img src={search} alt="" className="h-8" />
            </div>
          </div>
        </div>
        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <button className="bg-transparent border-none p-1.5">
            <img src={heart} alt="" className="h-8" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
