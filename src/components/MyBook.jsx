import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function MyBook({ myBookData }) {
  return (
    <li className="bookData">
      <figure className="bookData__cover">
        <img src={myBookData.image} alt="" />
      </figure>
      <h2 className="bookData__title">{myBookData.title}</h2>
      <h3 className="bookData__author">{myBookData.author}</h3>
      <p className="bookData__genre">{myBookData.genre}</p>
      <div className="bookData__isFavourite">
        {myBookData.isFavorite}
        <FontAwesomeIcon
          icon={faHeart}
          className="bookData__isFavourite--icon"
          size="lg"
          style={{ color: 'red', position: 'relative', right: '1.13rem' }}
        />
      </div>
    </li>
  );
}

MyBook.propTypes = {
  myBookData: PropTypes.object,
};
export default MyBook;
