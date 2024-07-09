import React from 'react'
import cctv from '../../assets/ArticlePhoto/CCTV.jpeg'
import gps from '../../assets/ArticlePhoto/gps-system.jpeg'
import Fingerauth from '../../assets/ArticlePhoto/FingerAuth.jpeg'
function Article() {
  return (
   <div>
     <div className='w-full px-4 flex flex-row justify-evenly'>
      <div className='w-1/2 px-4'>
        <img src={cctv} alt="" className='full' />
      </div>
      <div className='w-1/2 mx-4 my-2 px-2 flex flex-col gap-y-4 justify-center items-center '>
        <h2 className='text-4xl font-bold tracking-wider'>Closed-Circuit Television</h2>
        <p className=' leading-8 tracking-wide'>
        CCTV (Closed-Circuit Television) camera is a type of video surveillance camera used to monitor and record activity in a specific area. These cameras are widely used for security purposes in various settings such as homes, businesses, public spaces, and government facilities
        </p>
        <p className='leading-8 tracking-wide'>
        CCTV cameras play a crucial role in enhancing security, deterring criminal activity, and providing valuable evidence for investigations
        </p>
      </div>
    </div>
    {/* second div */}
    <div className='w-full px-4 flex flex-row justify-evenly'>
     
      <div className='w-1/2 mx-4 my-2 px-2 flex flex-col gap-y-4 justify-center items-center '>
        <h2 className='text-4xl font-bold tracking-wider'>Global Positioning System</h2>
        <p className=' leading-8 tracking-wide'>
        GPS (Global Positioning System) is a satellite-based navigation system that provides geolocation and time information to a GPS receiver anywhere on or near the Earth. The system is operated by the United States government and is freely accessible to anyone with a GPS device. Here are the key features and functions of GPS:
        </p>
        <p className='leading-8 tracking-wide'>
        GPS technology has revolutionized many industries by providing precise location and time data, enabling a wide range of applications from personal navigation to scientific research.
        </p>
      </div>
      <div className='w-1/2 px-4'>
        <img src={gps} alt="" className='full' />
      </div>
    </div>
    {/* third div */}
    <div className='w-full px-4 flex flex-row justify-evenly'>
      <div className='w-1/2 px-4'>
        <img src={Fingerauth} alt="" className='full' />
      </div>
      <div className='w-1/2 mx-4 my-2 px-2 flex flex-col gap-y-4 justify-center items-center '>
        <h2 className='text-4xl font-bold tracking-wider'>BIOMETRICS</h2>
        <p className=' leading-8 tracking-wide'>
        biometrics system is a technological system that uses biological data for identification and authentication purposes. These systems measure and analyze unique physical or behavioral traits to verify an individual's identity. Here are the key features and functions of biometric systems:
        </p>
        <p className='leading-8 tracking-wide'>
        Biometrics systems are becoming increasingly common due to their effectiveness in providing secure and convenient methods of identification and authentication.
        </p>
      </div>
    </div>
   </div>
  )
}

export default Article
