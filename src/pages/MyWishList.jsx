import BooksCollection from "../components/BooksCollection";

const MyWishList = ({ books, setWishListedBooks }) => {
  return (
    <>
      <BooksCollection books={books} setWishListedBooks={setWishListedBooks} />
    </>
  );
};

export default MyWishList;
