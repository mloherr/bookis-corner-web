import video from '../images/bookVideo.mp4';
import PropTypes from 'prop-types';

function Signup({
  handleChangeName,
  userName,
  handleChangeEmail,
  emailUser,
  handleChangePassword,
  password,
  handleSubmit,
}) {
  const changeUserName = (event) => {
    const newValue = event.target.value;
    handleChangeName(newValue);
  };

  const changeEmail = (event) => {
    const newValue = event.target.value;
    handleChangeEmail(newValue);
  };

  const changePassword = (event) => {
    const newValue = event.target.value;
    handleChangePassword(newValue);
  };
  return (
    <section className="signupSection">
      <form className="signupSection__form" onSubmit={handleSubmit}>
        <h2 className="signupSection__form--title">Crear una cuenta</h2>
        <label
          htmlFor="username"
          className="signupSection__form--label"
        ></label>
        <input
          type="text"
          name="username"
          id="username"
          className="signupSection__form--input"
          placeholder="Nombre de usuario..."
          value={userName}
          onChange={changeUserName}
        />

        <label htmlFor="email" className="signupSection__form--label"></label>
        <input
          type="email"
          name="email"
          id="email"
          className="signupSection__form--input"
          placeholder="Email..."
          value={emailUser}
          onChange={changeEmail}
        />

        <label
          htmlFor="password"
          className="signupSection__form--label"
        ></label>
        <input
          type="password"
          name="password"
          id="password"
          className="signupSection__form--input"
          placeholder="Contraseña..."
          value={password}
          onChange={changePassword}
        />

        <button type="submit" className="signupSection__form--button">
          Registrarme
        </button>
      </form>
      <video
        autoPlay
        loop
        muted
        className="signupSection__decoration"
        src={video}
      ></video>
    </section>
  );
}

Signup.propTypes = {
  handleChangeName: PropTypes.func,
  userName: PropTypes.string,
  handleChangeEmail: PropTypes.func,
  emailUser: PropTypes.string,
  handleChangePassword: PropTypes.func,
  password: PropTypes.any,
  handleSubmit: PropTypes.func,
};

export default Signup;
