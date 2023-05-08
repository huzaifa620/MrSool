import React, {useState} from 'react'
import ImageWithZoom from './ZoomableImage'
import img1 from './R1.png'
import img2 from './R2.png'
import img3 from './R3.png'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import spoon from './cutlery.png'
import bike from './delivery-bike.png'
import Menu from './DropdownMenu'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {

    const [hotels, setHotels] = React.useState([1,2,3,4,5,6,7,8,9,10])

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date)
    };

  return (
    <div className='flex flex-col items-center w-full h-screen space-y-24 p-2 pt-[5%]'>

        <div className='flex flex-col items-center justify-center w-[70%] space-y-8'>
            <h2 className='text-5xl'> What is MRSOOL? </h2>
            <p className='text-center '>MRSOOL, a delivery service platform, relies on demand forecasting for various aspects of its operations. By analyzing historical data, market trends, and other relevant factors, MRSOOL can estimate future demand and plan accordingly. This helps in efficient resource planning, including the allocation of delivery drivers, vehicles, and logistics operations. Capacity management is also improved as MRSOOL can adjust its operational capacity to match anticipated demand levels. Additionally, demand forecasting aids in inventory management, ensuring optimal stock levels while minimizing excess inventory. It also assists in optimizing service levels by anticipating peak demand periods and allocating additional resources accordingly. Pricing and promotional strategies can be refined based on demand patterns, leading to increased revenue and resource utilization.</p>
        </div>

        <div className='flex items-start justify-center space-x-12 h-[80%]'>

            <div className='flex flex-col justify-center w-[70%] h-full space-y-4'>

                <div className='flex w-full items-center tracking-widest uppercase text-xl font-semibold justify-between'>
                    <p className='w-1/2'>Delivery Demand Forecaster</p>
                    
                    <div className=''>
                        <DatePicker className='border bg-slate-300 py-2 text-center cursor-pointer rounded-lg px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[240px]' selected={selectedDate} onChange={handleDateChange} />
                    </div>
   
                    <Menu />
                </div>

                <div className='w-full h-full relative'>
                    <img src={img1} alt='' className='h-full rounded-2xl'/>
                    <div className='flex flex-col space-y-2 absolute inset-0 p-6 justify-end'>
                        <ZoomInIcon />
                        <ZoomOutIcon />
                    </div>

                </div>

                <div className=''>
                    Red Circles depicting the restaurants where demand is forcasted with high probability
                </div>
            </div>

            <div className='flex flex-col justify-center w-[30%] h-full space-y-4'>
                <div className='tracking-widest uppercase text-xl font-semibold'>
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

        </div>

        <div className='flex flex-col w-1/2 h-[80%] space-y-4 pb-24'>
            <div className='tracking-widest uppercase text-xl font-semibold'>
                Optimized Delivery Schedular
            </div>
            <div className='bg-mrsool-green w-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-black h-full p-4 space-y-2'>

                {hotels.map((ind, val) => (

                    <div key={ind} className='flex border rounded-md bg-white space-x-4 p-4 w-full'>
                        <div className='w-[20%]'>
                            <img src={spoon} alt='' className='w-32 h-32' />
                        </div>
                        <div className='w-full flex flex-col space-y-2 justify-center'>
                            <p className='tracking-widest text-2xl font-bold'>Asian Food Restaurant</p>
                            <p>Nearby Riders</p>
                            <div className='flex space-x-3 items-center'>
                                <img src={bike} alt='' className='w-6 h-6' />
                                <p className='text-sm'> Riders required : 20 (5%) </p>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>

    </div>
  )
}

export default Home