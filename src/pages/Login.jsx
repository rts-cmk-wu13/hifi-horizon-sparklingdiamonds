import { Form, Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { loginUser } from "../api/authService.js";

export default function Login() {
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const from = location.state?.from?.pathname || "/secrets";

  async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const userData = await loginUser(data);
      login(userData.accessToken);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <div className="login__header">
        <Link to="/" className="goback__container">
          <button className="btn_goback btn__signin"><FaArrowLeft /></button>
        </Link>
        <h2 className="login__title">Login</h2>
        <img className="small__logo" src="/img/emojione_bird.svg" alt="LOGO" />
      </div>

      <Form onSubmit={handleLogin}>
        <div className="form__grup">
          <input type="email" id="email" name="email" placeholder="Email address" required />
        </div>
        <div className="form__grup">
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        {error && <div className="error">{error}</div>}
        <button className="btn btn__signin" type="submit">
          Login <FaArrowRight />
        </button>
      </Form>
    </>
  );
}
