import { Form, useNavigate } from "react-router";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import registerUser from "../api/authService";
export default function SignUp() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSignUp(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const user = {
      email: data.email,
      password: data.password,
      username: data.username,
    };

    try {
      await registerUser(user);
      navigate("/success");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Form onSubmit={handleSignUp}>
      <div className="login__header">
        <button className="btn_goback btn__signin" type="button" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </button>
        <h2 className="login__title">Sign Up</h2>
      </div>

      <div className="form__grup">
        <input type="text" name="username" placeholder="Username" required />
      </div>
      <div className="form__grup">
        <input type="email" name="email" placeholder="Email address" required />
      </div>
      <div className="form__grup">
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <div className="form__grup">
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
      </div>

      {error && <div className="error">{error}</div>}

      <button className="btn btn__signin" type="submit">
        Sign Up <FaArrowRight />
      </button>
    </Form>
  );
}
