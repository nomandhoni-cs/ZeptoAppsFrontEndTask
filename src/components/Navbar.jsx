import logo from "../assets/NovelFlowTextDarkLogo.svg";
import logoMobile from "../assets/favicon.svg";
import heart from "../assets/heart.svg";

const Navbar = (props) => {
  const { wishListedBooks } = props;
  console.log(wishListedBooks);
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
                className=" h-8 sm:h-10 lg:h-12 w-auto"
              />
              <img
                alt="Desktop logo"
                src={logo}
                className="h-5 sm:h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex-none relative">
            <div className="bg-transparent border-none p-1.5 flex items-center space-x-2 relative">
              <span className="text-black text-base font-semibold hidden sm:block">
                My Wishlist
              </span>
              <img src={heart} alt="Favorites icon" className="h-8" />
              {/* Circle displaying savedItems count */}
              {wishListedBooks.length > 0 && (
                <span className="absolute bottom-1 right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishListedBooks.length}
                </span>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
