import React, { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "../../api/axios";
import { Link } from "react-router-dom";
const LOGIN_URL = "/auth";

const Login = () => {
  //TODO: don't use any here
  const { setAuth }: any = useAuth();

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
      // TODO: don't use any here
    } catch (err: any) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }

      errRef?.current?.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            {/* Here will come router instead */}
            <a href="#">Go to home</a>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                required
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                required
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
              />
            </label>
            <button
              type="submit"
              disabled={!user || !pwd || !errMsg || !success ? true : false}
            >
              Sign In
            </button>
          </form>
          <p>
            Need an Account? <br />
            <span className="line">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
