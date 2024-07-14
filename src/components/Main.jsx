import PropTypes from 'prop-types';
import BooksList from './BooksList';

function Main({ books, myBooks, isAuthenticated, handleAddFav }) {
  return (
    <main className="main">
      <BooksList
        books={books}
        myBooks={myBooks}
        isAuthenticated={isAuthenticated}
        handleAddFav={handleAddFav}
      />
    </main>
  );
}

Main.propTypes = {
  books: PropTypes.array,
  myBooks: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  handleAddFav: PropTypes.func,
};

export default Main;
