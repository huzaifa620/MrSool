import React from 'react'
import ImageWithZoom from './ZoomableImage'
import img1 from './R2.png'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import spoon from './cutlery.png'
import bike from './delivery-bike.png'

const Home = () => {

    const [hotels, setHotels] = React.useState([1,2,3,4,5,6,7,8,9,10])

  return (
    <div className='flex items-center justify-center w-full h-screen space-x-4 p-2'>

        <div className='flex flex-col items-center justify-center w-[40%] border'>
            <div className='tracking-widest uppercase'>
                Delivery Demand Forecaster
            </div>
            <div className='w-full h-full p-4 relative'>
                <img src={img1} alt='' className='rounded-2xl'/>
                <div className='flex flex-col space-y-2 absolute inset-0 p-6 justify-end'>
                    <ZoomInIcon />
                    <ZoomOutIcon />
                </div>

            </div>
            <div className=''>
                Red Circles depicting the restaurants where demand is forcasted with high probability
            </div>
        </div>

        <div className='flex flex-col items-center justify-center w-[22.5%] border h-3/4 space-y-4'>
            <div className='tracking-widest uppercase'>
                Rider Demand Forecaster
            </div>
            <div className='bg-mrsool-green w-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-black h-full p-4 space-y-2'>

                {hotels.map((ind, val) => (

                    <div key={ind} className='flex border rounded-md bg-white space-x-4 p-4 w-full'>
                        <div className='w-[20%]'>
                            <img src={spoon} alt='' className='w-16 h-16' />
                        </div>
                        <div className='w-full flex flex-col space-y-2 justify-center'>
                            <p className='tracking-widest text-lg font-bold'>Asian Food Restaurant</p>
                            <div className='flex space-x-3 items-center'>
                                <img src={bike} alt='' className='w-6 h-6' />
                                <p className='text-sm'> Riders required : 20 (5%) </p>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>

        <div className='flex flex-col items-center justify-center w-[40%] border'>
            <div className='tracking-widest uppercase'>
                Optimized Delivery Schedular
            </div>
        </div>

    </div>
  )
}

export default Home