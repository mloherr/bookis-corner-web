import PropTypes from 'prop-types';
import BookComponent from './BookComponent';

function BooksList({ books, myBooks, isAuthenticated, handleAddFav }) {
  return (
    <section className="booksSection">
      <ul className="booksSection__list">
        {books.map((book) => {
          return (
            <BookComponent
              key={book.id}
              bookData={book}
              myBooks={myBooks}
              isAuthenticated={isAuthenticated}
              handleAddFav={handleAddFav}
            />
          );
        })}
      </ul>
    </section>
  );
}

BooksList.propTypes = {
  books: PropTypes.array,
  myBooks: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  handleAddFav: PropTypes.func,
};
export default BooksList;
