import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] flex justify-between pt-8 flex-col  h-screen w-full '>
        <img  className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
<div className="bg-white py-4 px-4 pb-7">
  <h2 className='text-[30px] font-bold'>Get Started with User</h2>
  <Link to="/login" className='flex justify-center items-center w-full bg-black text-white rounded-lg py-3 mt-5'>Continue</Link>
</div>
      </div>
      
    </div>
  )
}

export default Home