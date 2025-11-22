import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {registerWithEmailPassword} = useContext(AuthContext);
    return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Name</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Your Full Name"
                />
                <label className="label">PhotoUrl</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your photoUrl"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div>
                  <span>Already have an account?</span>
                  <Link className="text-blue-500" to={"/signup"}>
                    Login
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
