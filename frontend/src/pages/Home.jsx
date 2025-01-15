import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-[url(https://img.freepik.com/free-photo/vertical-shot-traffic-light-with-number-13-stopwatch_181624-11218.jpg?t=st=1736598406~exp=1736602006~hmac=a81d33dccdef9a3961a1a827833d8a1aa51bfdac3b4002e9d33e50cba5c3f135&w=740)] bg-cover bg-center w-full pt-8 h-screen flex justify-between flex-col bg-blue-900-400">
        <img
          className="w-20 ml-8"
          src="https://th.bing.com/th/id/R.ee430489d1505483166c19ab9ed00d4e?rik=9h%2bv%2fqv8kXnGKQ&pid=ImgRaw&r=0"
          alt="Uber"
        />
        <div className="bg-white py-4 pb-7 px-4">
          <h1 className="text-3xl font-bold">Get started with uber</h1>
          <Link
            to={"/sign-in"}
            className="flex items-center justify-center w-full bg-black rounded mt-5 text-white py-3"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
