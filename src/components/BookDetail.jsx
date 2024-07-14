import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BookDetail({ bookDetailData }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (bookDetailData) {
      setIsLoading(false);
    }
  }, [bookDetailData]);
  console.log('bookDetailData', bookDetailData);
  console.log('title', bookDetailData.title);
  return (
    <section className="sectionDetailData">
      <div className="sectionDetailData__returnHome">
        <Link to={'/'} className="sectionDetailData__returnHome--link">
          Volver a Inicio
        </Link>
      </div>
      {isLoading ? (
        <p>Cargando información del libro...</p>
      ) : (
        <div className="sectionDetailData__containerData">
          <figure className="sectionDetailData__containerData--image">
            <img src={bookDetailData?.image} alt={bookDetailData?.title} />
          </figure>
          <div className="sectionDetailData__containerData--info">
            <h4 className="bookInfo__title">{bookDetailData?.title}</h4>
            <p className="bookInfo__resume--title">Sinopsis:</p>
            <p>{bookDetailData?.resume}</p>
            <p className="bookInfo__pages--title">Páginas: </p>
            <p className="bookInfo__pages">{bookDetailData?.pages}</p>
            <p className="bookInfo__language--title">Idioma:</p>
            <p className="bookInfo__language"> {bookDetailData?.language}</p>
          </div>
        </div>
      )}
    </section>
  );
}

BookDetail.propTypes = {
  bookDetailData: PropTypes.object,
};

export default BookDetail;
