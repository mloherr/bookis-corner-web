import PropTypes from 'prop-types';
import MyBook from './MyBook';

function MyBooksList({ myBooks, token, isAuthenticated }) {
  if (!isAuthenticated) {
    isAuthenticated = token ? true : false;
  }

  return (
    <section className="myBooksSection">
      {isAuthenticated ? (
        <ul className="myBooksSection__list">
          {myBooks.map((myBook) => {
            return <MyBook key={myBook.id} myBookData={myBook} />;
          })}
        </ul>
      ) : (
        <p>Necesitas estar registrado/a para acceder a esta sección</p>
      )}
    </section>
  );
}

MyBooksList.propTypes = {
  myBooks: PropTypes.array,
  token: PropTypes.any,
  isAuthenticated: PropTypes.bool,
};
export default MyBooksList;
