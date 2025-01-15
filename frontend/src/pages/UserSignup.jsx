import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Usersign = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [password , setpassword] = useState('')
  const [userData , setuserData] = useState({})


const submintHandler = (e) => {
e.preventDefault()

setuserData({
  fullName:{
    firstName:firstName,
  lastName:lastName,  
  },
  email:email,
  password:password
})
console.log(userData)
setfirstName('')
setlastName('')
setemail('')
setpassword('')
}



  return (
    <div> <div className='h-screen p-7 flex flex-col justify-between'>
    <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=>{
            submintHandler(e)
          }} >
          <h3 className='text-lg mb-2 font-medium'>What's is your Name</h3>
          <div className='flex gap-4 mb-6'>
          <input required value={firstName} onChange={(e)=>setfirstName(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm ' type="text" placeholder="FirstName" /> 
          <input required value={lastName} onChange={(e)=>setlastName(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm ' type="text" placeholder="LastName" /> 
          </div>
            <h3 className='text-lg font-medium mb-2'>What's is your Email </h3>

            <input required value={email} onChange={(e)=>setemail(e.target.value)} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm ' type="email" placeholder="email@example.com" />


            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input required value={password} onChange={(e)=>setpassword(e.target.value)} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm ' type="password" placeholder="password" />


            <button className='bg-[#111] text-white  font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm '>Login</button>


            <p className='text-center'>Already have a Account <Link to="/login" className='text-blue-600 '>Login here</Link></p>


        </form>
    </div>
    <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>

</div></div>
  )
}

export default Usersign