import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0 'onClick={()=>{
      props.setvehicleFound(false)
    }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i> </h5>
      <h3 className='text-2xl font-semibold mb-5'>
        Looking for a Driver
      </h3>
      <div className='flex gap-5 justify-between flex-col items-center'>
      <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
      <div className='w-full mt-5'>
<div className='flex gap-5 p-3 border-b-2  items-center'>
<i className="ri-map-pin-user-fill"></i>
<div>
  <h3 className='text-lg font-medium'>830/11-A</h3>
  <p className='text-sm -mt-1 text-gray-600'>Orangi Town,Karachi</p>
</div>
</div>
<div className='flex gap-5  p-3 border-b-2 items-center'>
<i className="ri-map-pin-2-fill"></i>
<div>
  <h3 className='text-lg font-medium'>830/11-A</h3>
  <p className='text-sm -mt-1 text-gray-600'>Orangi Town,Karachi</p>
</div>
</div>
<div> 
<div className='flex gap-5 p-3  items-center'>
<i className="ri-currency-line"></i>
<div>
  <h3 className='text-lg font-medium'>Rs:198.17</h3>
  <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
</div>
</div>
</div>

      </div>
      </div>

    </div>
  )
}

export default LookingForDriver