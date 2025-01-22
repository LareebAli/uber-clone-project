import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const UserLogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [userData, setuserData] = useState({})
const { user, setUser } = useContext(UserDataContext);
const navigate = useNavigate()

    const submintHandler = async(e)=>{
e.preventDefault()
const userData={
    email:email,
    password:password
}
const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

if(response.status===200){
    const data=response.data
    setUser(data.user)
    localStorage.setItem('token',data.token)
    navigate('/home')
}


setemail('')
setpassword('')
    }
    return (
        <div className='h-screen p-7 flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form onSubmit={(e)=>{
                    submintHandler(e)
                }} >
                    <h3 className='text-lg mb-2 font-medium'>What's is your email </h3>

                    <input required value={email} onChange={(e) => setemail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' type="email" placeholder="email@example.com" />


                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                    <input required value={password} onChange={(e) => setpassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' type="password" placeholder="password" />


                    <button className='bg-[#111] text-white  font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base '>Login</button>


                    <p className='text-center'>New here?   <Link to="/signup" className='text-blue-600 '>Create new Account</Link></p>


                </form>
            </div>
            <div>
                <Link to='/captain-login' className=' flex justify-center items-center bg-[#10b461] text-white  font-semibold mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin