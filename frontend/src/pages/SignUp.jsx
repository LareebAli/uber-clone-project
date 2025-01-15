import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
  };
  return (
    <div className="flex justify-between flex-col h-screen p-7">
      <div>
        <img
          className="w-20 mb-8"
          src="https://th.bing.com/th/id/R.ee430489d1505483166c19ab9ed00d4e?rik=9h%2bv%2fqv8kXnGKQ&pid=ImgRaw&r=0"
          alt="Uber"
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold mb-2">Your name</h3>
          <div className="flex justify-between mb-4 gap-3">
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-xl"
            />
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-xl"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Wha`s your email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-xl"
          />
          <h3 className="text-xl font-semibold mb-2">What`s your password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full mb-6 bg-[#eeeeee] rounded px-4 py-2 border text-xl"
          />
          <button className="w-full bg-[#111] text-[#fff] text-xl rounded mb-4 px-4 py-2 font-semibold">
            Sign up
          </button>
          <p className="text-center mb-4 text-lg font-medium">
            Already have an account?{" "}
            <Link
              className="text-blue-800 text-xl font-semibold"
              to={"/sign-in"}
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p>
          By continuing, you agree to Uber's Terms of Service and acknowledge
          Uber's Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignUp;
