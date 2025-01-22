import React from 'react'

const LocationSearchPanel = (props) => {
  
// Simple Array for Location 
const locations = [
  'Orangi Near Town ,Sector 11/A',
  'Orangi Near Town ,Sector 11/E',
  'Orangi Near Town ,Sector 5',
  'Orangi Near Town ,Sector 10',


] 


  return (
    <div>
      {/* This is just a simple data */}

      {
      locations.map(function(elem,idx){
return <div key={idx} onClick={()=>{
  props.setvehiclePanel(true)
  props.setpanelOpen(false)
}} className='flex items-center justify-start my-2 gap-4 border-grey-50 active:border-black border-2 p-3 rounded-lg'>
<h2 className='bg-[#eee] w-10 h-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
<h4 className='font-medium'>{elem}</h4>
</div>
      })
      }
    </div>
  )
}

export default LocationSearchPanel