import '../scss/App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import MyBooksList from './MyBooksList';
import BookDetail from './BookDetail';
import api from '../services/api';
import localStorage from '../services/localStorage';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [userName, setUserName] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState(localStorage.get('token') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [myBooks, setMyBooks] = useState([]);
  console.log('myBooks APP', myBooks);

  useEffect(() => {
    setIsLoading(true);
    api.getBooks().then((response) => {
      setBooks(response.books);
      console.log(response.books);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const storedToken = localStorage.get('token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    } else {
      setToken('');
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    const fetchMyBooks = async () => {
      if (token) {
        try {
          const data = await api.getMyBooks(token);
          setMyBooks(data.myBooks);
        } catch (error) {
          console.error('Error fetching my books:', error);
        }
      }
    };
    fetchMyBooks();
  }, [token]);
  const handleChangeName = (value) => {
    setUserName(value);
  };

  const handleChangeEmail = (value) => {
    setEmailUser(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUserData = { userName, emailUser, password };
      const response = await api.registerUser(newUserData);
      console.log(response);
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await api.loginUser({ emailUser, password });
      const token = response.token;
      setToken(token);
      localStorage.set('token', token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error logging in:', error);
      setIsAuthenticated(false);
    }
  };

  const handleLogOut = async () => {
    setToken('');
    setIsAuthenticated(false);
    localStorage.clear();
  };

  const handleAddFav = async (bookId) => {
    if (isAuthenticated) {
      try {
        const result = await api.addNewFavBook({ bookId, token });
        console.log('Book added to favorites:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert(
        'Necesitas estar registrado/a para poder añadir libros a favoritos'
      );
    }
  };

  const { pathname } = useLocation();
  const bookDetailRoute = matchPath('/book/:idBook', pathname);
  const idBook = bookDetailRoute ? bookDetailRoute.params.idBook : null;
  const bookDetailData = books.find((book) => book.id === parseInt(idBook));

  return (
    <>
      <Header isAuthenticated={isAuthenticated} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              books={books}
              myBooks={myBooks}
              isAuthenticated={isAuthenticated}
              handleAddFav={handleAddFav}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              handleChangeEmail={handleChangeEmail}
              emailUser={emailUser}
              handleChangePassword={handleChangePassword}
              password={password}
              handleLogin={handleLogin}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              handleChangeName={handleChangeName}
              userName={userName}
              handleChangeEmail={handleChangeEmail}
              emailUser={emailUser}
              handleChangePassword={handleChangePassword}
              password={password}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/mybooks"
          element={
            <MyBooksList
              myBooks={myBooks}
              token={token}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/book/:idBook"
          element={
            bookDetailData ? (
              <BookDetail bookDetailData={bookDetailData} />
            ) : (
              <p>El libro que buscas no existe 😅 </p>
            )
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
