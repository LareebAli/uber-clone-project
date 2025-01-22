import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const Usersign = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext); // Correct useContext usage

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }

      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <div>
      <div className="h-screen p-7 flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
          />
          <form onSubmit={submitHandler}>
            <h3 className="text-lg mb-2 font-medium">What's is your Name</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
                type="text"
                placeholder="FirstName"
              />
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
                type="text"
                placeholder="LastName"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">What's is your Email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="email"
              placeholder="email@example.com"
            />
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="password"
              placeholder="password"
            />
            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm">
              Create Account
            </button>
            <p className="text-center">
              Already have a Account{' '}
              <Link to="/login" className="text-blue-600">
                Login here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and{' '}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usersign;
