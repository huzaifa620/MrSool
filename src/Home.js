import React, { useState, useContext, useEffect } from 'react'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import bike from './delivery-bike.png'
import car from './car.png'
import Menu from './DropdownMenu'
import { Context } from './Context';
import data from './data.js'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {

    const {index, setIndex, time, timeChange, count, setCount, zoomLevel, setZoomLevel} = useContext(Context)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [imgSrc, setImgSrc ] = useState([bike, car]);

    const [expanded, setExpanded] = useState([]);
    const handleToggleExpand = (index) => {
        setExpanded((prevExpanded) => {
            const updatedExpanded = [...prevExpanded];
            updatedExpanded[index] = !updatedExpanded[index];
            return updatedExpanded;
        });
    };

    

    const handleZoomIn = () => {
        setZoomLevel(zoomLevel + 0.1);
        if (index !== 0) {
            setCount(count+1)
        }
    };

    const handleZoomOut = () => {
        if (zoomLevel > 1) {
            setZoomLevel(zoomLevel - 0.1);
            if (index !== 0) {
                setCount(count-1)
            }
        }
    };

    useEffect(() => {
        if (time === ' 08am - 10am ') {
          setIndex(1);
        } else if (time === ' 02pm - 04pm ') {
          setIndex(2);
        } else if (time === ' 09pm - 11pm ') {
          setIndex(3);
        }
        
      }, [time]);

  return (
    <div className='flex flex-col items-center w-full h-screen space-y-24 p-2 pt-[5%]'>

        <div className='flex flex-col items-center justify-center w-[70%] space-y-8'>
            <h2 className='text-5xl font-bold tracking-widest'> Demand Forecaster </h2>
            <p className='text-center'>MRSOOL, a delivery service platform, relies on demand forecasting for various aspects of its operations. By analyzing historical data, market trends, and other relevant factors, MRSOOL can estimate future demand and plan accordingly. This helps in efficient resource planning, including the allocation of delivery drivers, vehicles, and logistics operations. Capacity management is also improved as MRSOOL can adjust its operational capacity to match anticipated demand levels. Additionally, demand forecasting aids in inventory management, ensuring optimal stock levels while minimizing excess inventory. It also assists in optimizing service levels by anticipating peak demand periods and allocating additional resources accordingly. Pricing and promotional strategies can be refined based on demand patterns, leading to increased revenue and resource utilization.</p>
        </div>

        <div className='flex items-start justify-center space-x-12 h-[80%] px-4'>

            <div className='flex flex-col justify-center w-[65%] h-full space-y-4'>

                <div className='flex w-full items-center tracking-widest uppercase font-semibold justify-around space-x-2'>
                    <p className='w-[70%] text-4xl'>Delivery Demand Forecaster</p>
                    
                    <div className=''>
                        <DatePicker className='border bg-mrsool-green text-white py-2 text-center cursor-pointer rounded-lg px-4 shadow-md focus:outline-none w-[240px] tracking-widest caret-transparent active:bg-white transition-colors duration-500 ease-out' selected={selectedDate} onChange={handleDateChange} />
                    </div>
                    <Menu />
   
                </div>

                <div className='w-full relative border-2 border-black rounded-2xl h-[90%] overflow-hidden'>
                    <img src={data[index].image} alt='' className='w-full h-full object-cover rounded-2xl' style={{ transform: `scale(${zoomLevel})` }} />
                    <div className='flex flex-col space-y-2 absolute inset-0 p-6 justify-end'>
                        <ZoomInIcon onClick={handleZoomIn} />
                        <ZoomOutIcon onClick={handleZoomOut} />
                    </div>

                </div>

                <div className='text-xl text-red-500'>
                    Blue Circles depicting the restaurants where demand is forcasted with high probability
                </div>
            </div>

            <div className='flex flex-col justify-center w-[35%] h-full space-y-4'>
                <div className='tracking-widest uppercase text-4xl font-semibold text-center'>
                    Rider Demand Forecaster
                </div>
                <div className='bg-mrsool-green w-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-500 h-[90%] p-4 space-y-2 border-2 border-black rounded-md'>

                    {
                        data[index]?.restaurants.map((val, ind) => (

                            <div key={ind} className='flex border rounded-xl bg-white space-x-4 p-4 w-full'>
                                <div className='w-[20%]'>
                                    <img src={val.imgUrl} alt='' className='w-16 h-16' />
                                </div>
                                <div className='w-full flex flex-col space-y-2 justify-center'>
                                    <p className='tracking-widest text-xl font-bold'> {val.name} </p>
                                    <div className='flex space-x-3 items-center'>
                                        <img src={car} alt='' className='w-6 h-6' />
                                        <p className=''> Riders required : {Math.max(val.riders - count, 0)} ( {val.riders&&(Math.max(val.riders - count, 0) / (data[index].sum - data[index].restaurants.length*count) * 100).toFixed(1)} %) </p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
                <div className='text-xl text-white select-none'>-</div>
            </div>

        </div>

        <div className='flex flex-col w-1/2 h-[80%] space-y-4 pb-24'>
            <div className='tracking-widest uppercase text-4xl font-semibold'>
                Optimized Delivery Scheduler
            </div>
            <div className='bg-mrsool-green w-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-500 rounded border-2 border-black h-full p-4 py-8 space-y-4'>

                {
                    data[index]?.restaurants.map((val, ind) => {
                        const isExpanded = expanded[ind] || false;
                        return (
                            <div key={ind} className='flex border rounded-2xl bg-white space-x-4 p-4 w-full'>
                                <div className='flex w-[20%] items-center'>
                                    <img src={val.imgUrl} alt='' className='w-32 h-32' />
                                </div>
                                <div className='w-full flex flex-col space-y-2 justify-center'>
                                    <p className='tracking-widest text-2xl font-bold'>{val.name}</p>
                                    <p>Nearby Riders</p>
                                    <div className='flex space-x-3 items-center'>
                                        {isExpanded ? (
                                            <div className='w-full flex flex-col space-y-2'>
                                                {val.ridersDetails.map((value, indx) => (
                                                    <div key={indx} className='flex border-4 rounded-md bg-white w-full px-4'>
                                                        <div className='w-[10%]'>
                                                            <img src={imgSrc[value.type]} alt='' className='w-12 h-12' />
                                                        </div>
                                                        <div className='w-[90%] flex items-center justify-center space-x-4'>
                                                            <p className='border-r-2 border-slate-500 px-4 text-sm'>{value.name}</p>
                                                            <p className='border-r-2 border-slate-500 px-4 text-sm'>Average Delivery Time: {value.time} mins</p>
                                                            <p className='text-sm'>Expected Earning: {value.earning} SAR</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                { (index!==0) && <button onClick={() => handleToggleExpand(ind)}>Show Less</button> }
                                            </div>
                                        ) : (
                                            <div className='w-full flex flex-col space-y-2'>
                                                {val.ridersDetails.slice(0, 2).map((value, indx) => (
                                                    <div key={indx} className='flex border-4 rounded-md bg-white w-full px-4'>
                                                        <div className='w-[10%]'>
                                                            <img src={imgSrc[value.type]} alt='' className='w-12 h-12' />
                                                        </div>
                                                        <div className='w-[90%] flex items-center justify-center space-x-4'>
                                                            <p className='border-r-2 border-slate-500 px-4 text-sm'>{value.name}</p>
                                                            <p className='border-r-2 border-slate-500 px-4 text-sm'>Average Delivery Time: {value.time} mins</p>
                                                            <p className='text-sm'>Expected Earning: {value.earning} SAR</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                { (index!==0) && <button onClick={() => handleToggleExpand(ind)}>Show More</button> }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>

    </div>
  )
}

export default Home