import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
    setCaptainData({ email: email, password: password });
    console.log(captainData);
  };
  return (
    <div className="flex justify-between flex-col h-screen p-7">
      <div>
        <img
          className="w-20 mb-8"
          src="https://th.bing.com/th/id/OIP.Oy5wfKuZ37KcuXONE7zjnQHaEK?rs=1&pid=ImgDetMain"
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
              to={"/captain-sign-up"}
            >
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/sign-in"}
          className="flex justify-center items-center w-full bg-[#de6849] text-[#fff] text-xl rounded px-4 py-2 font-semibold"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignIn;
