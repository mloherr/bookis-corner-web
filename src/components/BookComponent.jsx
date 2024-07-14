import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookComponent({ bookData, myBooks, isAuthenticated, handleAddFav }) {
  const [isFavBook, setIsFavBook] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const favoriteBookIds = myBooks.map((myBook) => myBook.id);
      const isFavorite = favoriteBookIds.includes(bookData.id);
      setIsFavBook(isFavorite);
    }
  }, [bookData.id, myBooks, isAuthenticated]);

  const onAddFav = () => {
    handleAddFav(bookData.id);
  };

  return (
    <Link to={`/book/${bookData.id}`} className="linkDetail">
      <li className="bookData">
        <figure className="bookData__cover">
          <img src={bookData.image} alt="" />
        </figure>
        <h2 className="bookData__title">{bookData.title}</h2>
        <h3 className="bookData__author">{bookData.author}</h3>
        <p className="bookData__genre">{bookData.genre}</p>
        <div className="bookData__isFavourite">
          {bookData.isFavorite}
          <FontAwesomeIcon
            icon={faHeart}
            className="bookData__isFavourite--icon"
            size="lg"
            style={{
              color: isFavBook ? 'red' : 'white',
              position: 'relative',
              right: '1.13rem',
            }}
            onClick={onAddFav}
          />
        </div>
      </li>
    </Link>
  );
}

BookComponent.propTypes = {
  bookData: PropTypes.object,
  myBooks: PropTypes.array,
  isAuthenticated: PropTypes.any,
  handleAddFav: PropTypes.func,
};

export default BookComponent;
