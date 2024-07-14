import video from '../images/bookVideo.mp4';
import PropTypes from 'prop-types';

function Login({
  handleChangeEmail,
  emailUser,
  handleChangePassword,
  password,
  handleLogin,
}) {
  const changeEmail = (event) => {
    const newValue = event.target.value;
    handleChangeEmail(newValue);
  };

  const changePassword = (event) => {
    const newValue = event.target.value;
    handleChangePassword(newValue);
  };
  return (
    <section className="loginSection">
      <form className="loginSection__form" onSubmit={handleLogin}>
        <h2 className="loginSection__form--title">Iniciar sesión</h2>
        <label htmlFor="email" className="loginSection__form--label"></label>
        <input
          type="email"
          name="email"
          id="email"
          className="loginSection__form--input"
          placeholder="Email..."
          value={emailUser}
          onChange={changeEmail}
        />

        <label htmlFor="password" className="loginSection__form--label"></label>
        <input
          type="password"
          name="password"
          id="password"
          className="loginSection__form--input"
          placeholder="Contraseña..."
          value={password}
          onChange={changePassword}
        />

        <button type="submit" className="loginSection__form--button">
          Entrar
        </button>
      </form>
      <video
        autoPlay
        loop
        muted
        className="loginSection__decoration"
        src={video}
      ></video>
    </section>
  );
}

Login.propTypes = {
  handleChangeEmail: PropTypes.func,
  emailUser: PropTypes.string,
  handleChangePassword: PropTypes.func,
  password: PropTypes.any,
  handleLogin: PropTypes.func,
};

export default Login;
