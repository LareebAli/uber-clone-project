import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const [email, setemail] = useState('')
      const [password, setpassword] = useState('')
 const [captainData, setcaptainData] = useState('')
      const submintHandler=(e)=>{
  e.preventDefault()
  setcaptainData({
      email:email,
      password:password
  })
  setemail('')
  setpassword('')
      }
  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
    <div>
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />
        <form onSubmit={(e)=>{
            submintHandler(e)
        }} >
            <h3 className='text-lg mb-2 font-medium'>What's is your email </h3>

            <input required value={email} onChange={(e) => setemail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' type="email" placeholder="email@example.com" />


            <h3 className='text-lg mb- font-medium'>Enter Password</h3>

            <input required value={password} onChange={(e) => setpassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' type="password" placeholder="password" />


            <button className='bg-[#111] text-white  font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base '>Login</button>


            <p className='text-center'>Join a fleet?   <Link to="/captain-signup" className='text-blue-600 '>Register as a Captain</Link></p>


        </form>
    </div>
    <div>
        <Link to='/login' className=' flex justify-center items-center bg-[#d5622d] text-white  font-semibold mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
    </div>
</div>
  )
}

export default CaptainLogin