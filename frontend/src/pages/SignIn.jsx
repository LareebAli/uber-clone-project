import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
    setUserData({ email: email, password: password });
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
          <h3 className="text-xl font-bold mb-2">Wha`s your email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-xl"
          />
          <h3 className="text-xl font-bold mb-2">What`s your password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full mb-6 bg-[#eeeeee] rounded px-4 py-2 border text-xl"
          />
          <button className="w-full bg-[#111] text-[#fff] text-xl rounded mb-4 px-4 py-2 font-semibold">
            Sign in
          </button>
          <p className="text-center mb-4 text-lg font-medium">
            No account?{" "}
            <Link
              className="text-blue-800 text-xl font-semibold"
              to={"/sign-up"}
            >
              Create one
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/captain-sign-in"}
          className="flex justify-center items-center w-full bg-[#59a53e] text-[#fff] text-xl rounded px-4 py-2 font-semibold"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
