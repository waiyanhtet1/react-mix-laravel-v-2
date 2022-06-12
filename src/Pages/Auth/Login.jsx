import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ax from "../../config/ax";
import Master from "../Layout/Master";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/watches");
    }
  }, []);

  const Login = () => {
    const frmData = new FormData();
    frmData.append("email", email);
    frmData.append("password", password);

    ax.post("/login", frmData)
      .then((res) => {
        if (res.data.success === false) {
          setError(res.data);
        } else {
          localStorage.setItem("token", res.data.token);
          const jsonObj = JSON.stringify(res.data.data);
          localStorage.setItem("authUser", jsonObj);
          navigate("/watches");
        }
      })
      .catch((error) => {
        setError(error.response.data.errors);
      });
  };

  const EmailOnChange = (e) => {
    setEmail(e.target.value);
    delete error.email;
    delete error.message;
  };
  const PasswordOnChange = (e) => {
    setPassword(e.target.value);
    delete error.password;
    delete error.message;
  };

  return (
    <Master>
      <div className="uk-container uk-conatiner-large uk-padding-large">
        <div className="uk-form-stacked uk-text-center">
          <h2>Login Here</h2>
          <div className="uk-alert-danger">{error.message}</div>
          <div className="uk-margin">
            <div className="uk-form-control">
              <input
                type="text"
                className={`uk-input ${
                  error.email && "uk-form-danger"
                } uk-width-1-3@m uk-width-1-1`}
                placeholder="Email"
                onChange={(e) => EmailOnChange(e)}
              />
            </div>
            {error.email &&
              error.email.map((err) => (
                <label
                  key={err}
                  className="uk-from-label uk-text-danger"
                  htmlFor="form-stacked-text"
                >
                  {err}
                </label>
              ))}
          </div>

          <div className="uk-margin">
            <div className="uk-form-control">
              <input
                type="password"
                className={`uk-input ${
                  error.password && "uk-form-danger"
                } uk-width-1-3@m uk-width-1-1`}
                placeholder="Password"
                onChange={(e) => PasswordOnChange(e)}
              />
            </div>
            {error.password &&
              error.password.map((err) => (
                <label
                  key={err}
                  className="uk-from-label uk-text-danger"
                  htmlFor="form-stacked-text"
                >
                  {err}
                </label>
              ))}
          </div>

          <div className="uk-margin">
            <button
              onClick={() => Login()}
              className="uk-button uk-button-secondary uk-width-1-3@m uk-width-1-1"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </Master>
  );
}
