import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehcilePannel from '../components/VehcilePannel'
import ConfirmedRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'


const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const vehiclePanelRef = useRef(null)
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)


  const confirmRidePanelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmRidePanel, setconfirmRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [waitingForDriver, setwaitingForDriver] = useState(false)

  const submintHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        // opacity:1
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }

    else {
      gsap.to(panelRef.current, {
        height: '0',
        // opacity:0
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: 0
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: '100%'
      })
    }

  }, [vehiclePanel])


  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        y: 0
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        y: '100%'
      })
    }

  }, [confirmRidePanel])


  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        y: 0
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        y: '100%'
      })
    }

  }, [vehicleFound])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        y: 0
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        y: '100%'
      })
    }

  }, [vehicleFound])


  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        y: 0
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        y: '100%'
      })
    }

  }, [waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='w-screen h-screen'>
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end top-0 absolute w-full h-screen '>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setpanelOpen(false)
          }} className='absolute opacity-0   top-6 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submintHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setpanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setpickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-3 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pich-up location ' /><br />
            <input
              onClick={() => {
                setpanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setdestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-3 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-0  bg-white  '>
          <LocationSearchPanel setpanelOpen={setpanelOpen} setvehiclePanel={setvehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 mt-12 bg-white">
        <VehcilePannel setconfirmRidePanel={setconfirmRidePanel} setvehiclePanel={setvehiclePanel} />
      </div>
      <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 mt-12 bg-white">
        <ConfirmedRide setconfirmRidePanel={setconfirmRidePanel} setvehicleFound={setvehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 mt-12 bg-white">
        <LookingForDriver setvehicleFound={setvehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0  px-3 py-6 mt-12 bg-white">
        <WaitingForDriver  waitingForDriver={waitingForDriver}/>
      </div>

    </div>
  )
}

export default Home  