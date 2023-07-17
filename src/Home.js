import React, { useState, useContext, useEffect } from 'react'
import bike from './motorbike.png'
import car from './suv.png'
import { Context } from './Context';
import data from './data.js'
import 'react-datepicker/dist/react-datepicker.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Form from './Form';
import DateTimePicker from './DateTimePicker';
import ALL from './all.png'
import KSA from './KSA.jpg'
import EGY from './EGY.png'
import { Card, Metric, Text, Flex } from "@tremor/react";

const Home = () => {

    const {index, setIndex, time, setTime, timeChange, count, setCount, zoomLevel, setZoomLevel, country, setCountry, city, setCity, selectedDistrict, setSelectedDistrict} = useContext(Context)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [imgSrc, setImgSrc ] = useState([bike, car]);
    const [zeroIndImg, setZeroIndImg] = useState(ALL)
    const [expanded, setExpanded] = useState([]);
    const handleToggleExpand = (index) => {
        setExpanded((prevExpanded) => {
            const updatedExpanded = [...prevExpanded];
            updatedExpanded[index] = !updatedExpanded[index];
            return updatedExpanded;
        });
    };

    const handleZoomIn = () => {
        if (zoomLevel < 1.5) {
            setZoomLevel(zoomLevel + 0.1);
            if (index !== 0) {
                setCount(count+1)
            }
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

        setIndex(0)
        setCity('City')
        switch (country) {
            case 'KSA':
                setZeroIndImg(KSA)
                break;
            case 'EGY':
                setZeroIndImg(EGY)
                break;
            default:
                break;
        }
    }, [country]);

    useEffect(() => {
        if (city !== 'City') {
            if (time <= 8) {
                setIndex(1);
            } else if (time > 8 && time <= 16) {
                setIndex(2);
            } else if (time > 16 && time <= 23) {
                setIndex(3);
            }
        }
    }, [time])

    const [totalRiders, setTotalRiders] = useState(0);

    useEffect(() => {
        const riders = Array.from(document.querySelectorAll('div.riders p.text-sm span')).map(element => parseInt(element.textContent));
        const sum = riders.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setTotalRiders(sum);
    }, [time, index, zoomLevel]);

  return (
    <div className='flex flex-col items-center w-full h-screen space-y-8 xl:space-y-24 p-2 pt-[10%] xl:pt-[6%]'>

        <div className='flex flex-col items-center justify-center w-full md:w-[90%] xl:w-[70%] space-y-4 xl:space-y-8'>
            <h2 className='text-3xl md:text-5xl font-bold tracking-widest uppercase text-center'> Demand Forecaster </h2>
            <p className='text-justify text-sm md:text-base'>MRSOOL, a delivery service platform, relies on demand forecasting for various aspects of its operations. By analyzing historical data, market trends, and other relevant factors, MRSOOL can estimate future demand and plan accordingly. This helps in efficient resource planning, including the allocation of delivery drivers, vehicles, and logistics operations. Capacity management is also improved as MRSOOL can adjust its operational capacity to match anticipated demand levels. Additionally, demand forecasting aids in inventory management, ensuring optimal stock levels while minimizing excess inventory. It also assists in optimizing service levels by anticipating peak demand periods and allocating additional resources accordingly. Pricing and promotional strategies can be refined based on demand patterns, leading to increased revenue and resource utilization.</p>
        </div>

        <div className='flex flex-col xl:flex-row w-full items-center xl:items-start justify-center xl:space-x-12 xl:h-[80%] px-1 xl:px-8 space-y-8 xl:space-y-0'>

            <div className='flex flex-col justify-center w-full xl:w-[65%] h-full space-y-4'>

                <div className='flex flex-col xl:flex-row w-full items-center tracking-widest uppercase font-semibold justify-around xl:space-x-2 space-y-4 xl:space-y-0'>
                    <p className='w-full xl:w-[70%] uppercase text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center xl:text-left'>Delivery Demand Forecaster</p>
                   
                    <div className='flex w-[70%] md:w-[30%] lg:w-[22.5%] xl:w-[27.5%] 2xl:w-[20%]'>
                        <DateTimePicker />
                    </div>
   
                </div>

                {country !== 'Country' && 
                    <div className='w-full justify-center xl:justify-start xl:px-6 flex items-center xl:tracking-[0.2em] space-x-2 xl:space-x-3'> 
                        <span className='bg-[#6F7E8C] hover:bg-[#798897] p-1 rounded-full text-xs xl:text-sm text-white px-4 cursor-pointer'> {country === 'KSA' ? 'Saudi Arabia': 'Egypt'} </span>  
                        <span className='font-bold'>&gt;</span>  
                        <span className='bg-[#6F7E8C] hover:bg-[#798897] p-1 rounded-full text-xs xl:text-sm text-white px-4 cursor-pointer'> {city} </span>  
                        <span className='font-bold'>&gt;</span>
                        <span className='bg-[#6F7E8C] hover:bg-[#798897] p-1 rounded-full text-xs xl:text-sm text-white px-4 cursor-pointer'> {selectedDistrict ? selectedDistrict: 'District'} </span>  
                    </div> 
                }

                <div className='w-full relative border-2 border-black rounded-2xl h-[90%]'>
                    <img src={index === 0 ? zeroIndImg : data[index].image} alt='' className='w-full h-full object-cover rounded-2xl' style={{ transform: `scale(${zoomLevel})` }} />

                    <Form />

                    <div className='flex flex-col items-center space-y-2 absolute bottom-4 right-4 px-0.5 py-0.5 bg-white h-fit w-fit rounded-lg scale-75 md:scale-100'>
                        <AddIcon onClick={handleZoomIn} className='hover:bg-gray-200' />
                        <div className='h-0.5 w-full bg-gray-400'></div>
                        <RemoveIcon onClick={handleZoomOut} className='hover:bg-gray-200' />
                    </div>

                </div>

            </div>
            
            <div className='flex flex-col xl:justify-center md:items-center w-full xl:w-[35%] xl:h-full space-y-4'>
                <div className='uppercase text-2xl lg:text-3xl xl:text-2xl 2xl:text-4xl font-semibold text-center'>
                    Order Demand Forecaster
                </div>
                {country !== 'Country' &&  <div className='h-[28px]'></div> }
                <div className='bg-mrsool-green md:w-3/4 xl:w-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-500 xl:h-[90%] p-2 md:p-4 space-y-2 rounded-2xl xl:rounded-r-sm border-2 border-black' key={index}>

                    <Card className="max-w-xs mx-auto bg-white rounded-2xl mb-4" decoration="top" decorationColor="green">
                        <Flex className="space-x-8 justify-center">
                            <img src={car} alt='' className='w-12 h-12' />
                            <div>
                                <Text>Total Riders</Text>
                                <Metric className='text-[#3B82F]'>{totalRiders}</Metric>
                            </div>
                        </Flex>
                    </Card>

                    {
                        data[index]?.restaurants.map((val, ind) => (

                            <div key={ind} className='flex border rounded-xl bg-white space-x-4 p-1 lg:p-4 w-full riders'>
                                <div className='w-[20%] flex items-center justify-center'>
                                    <img src={val.imgUrl} alt='' className='w-16 h-16 scale-75 md:scale-100' />
                                </div>
                                <div className='w-[80%] xl:w-full flex flex-col space-y-2 justify-center'>
                                    <p className='tracking-widest md:text-xl font-bold'> {val.name} </p>
                                    <div className='flex space-x-3 items-center'>
                                        <img src={car} alt='' className='w-6 h-6' />
                                        <p className='text-sm md:text-lg'> Riders required : <span>{Math.max(val.riders - count, 0)}</span> ({ (Math.max(val.riders - count, 0) === 0) ? '<0.1' : Math.min(Math.max((val.riders - count) / (data[index].sum - (data[index].restaurants.length * count)) * 100, 0), 100).toFixed(1)} %) </p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>

        </div>

        <div className='flex flex-col w-full xl:w-[55%] h-full space-y-4 pb-24'>
            <div className='xl:tracking-widest uppercase text-xl md:text-4xl font-semibold text-center xl:text-left'>
                Optimized Delivery Scheduler
            </div>
            <div className='bg-mrsool-green w-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-500 h-full p-1 lg:p-4 py-8 space-y-4 rounded-2xl xl:rounded-r-sm border-2 border-black'>

                {
                    data[index]?.restaurants.map((val, ind) => {
                        const isExpanded = expanded[ind] || false;
                        return (
                            <div key={ind} className='flex border rounded-2xl bg-white lg:space-x-4 p-1 lg:p-2 xl:p-4 w-full'>
                                <div className='hidden md:flex w-[20%] md:scale-75 lg:scale-100 items-center'>
                                    <img src={val.imgUrl} alt='' className='w-32 h-32' />
                                </div>
                                <div className='w-full flex flex-col space-y-2 justify-center'>
                                    <p className='tracking-widest text-xl md:text-3xl font-bold text-center'>{val.name}</p>
                                    <p>Nearby Riders</p>
                                    <div className='flex space-x-3 items-center'>
                                        {isExpanded ? (
                                            <div className='w-full flex flex-col space-y-2'>
                                                {val.ridersDetails.map((value, indx) => (
                                                    <div key={indx} className='flex flex-col md:flex-row border-4 rounded-md bg-white w-full px-1 lg:px-4'>
                                                        <div className='w-full md:w-[10%]'>
                                                            <img src={imgSrc[value.type]} alt='' className='w-12 h-12' />
                                                        </div>
                                                        <div className='w-full lg:w-[90%] flex items-center justify-center space-x-1 lg:space-x-4 text-center xl:text-left'>
                                                            <p className='border-r-2 border-slate-500 px-1 lg:px-4 text-xs md:text-sm lg:text-base'>{value.name}</p>
                                                            <p className='border-r-2 border-slate-500 px-1 lg:px-4 text-xs md:text-sm lg:text-base'>Average Delivery Time: {value.time} mins</p>
                                                            <p className='text-xs md:text-sm lg:text-base'>Expected Earning: {value.earning} SAR</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                { (index!==0) && <button onClick={() => handleToggleExpand(ind)}>Show Less</button> }
                                            </div>
                                        ) : (
                                            <div className='w-full flex flex-col space-y-2'>
                                                {val.ridersDetails.slice(0, 2).map((value, indx) => (
                                                    <div key={indx} className='flex flex-col md:flex-row border-4 rounded-md bg-white w-full px-1 lg:px-4'>
                                                        <div className='w-full md:w-[10%]'>
                                                            <img src={imgSrc[value.type]} alt='' className='w-12 h-12' />
                                                        </div>
                                                        <div className='w-full lg:w-[90%] flex items-center justify-center space-x-1 lg:space-x-4 text-center xl:text-left'>
                                                            <p className='border-r-2 border-slate-500 px-1 lg:px-4 text-xs md:text-sm lg:text-base'>{value.name}</p>
                                                            <p className='border-r-2 border-slate-500 px-1 lg:px-4 text-xs md:text-sm lg:text-base'>Average Delivery Time: {value.time} mins</p>
                                                            <p className='text-xs md:text-sm lg:text-base'>Expected Earning: {value.earning} SAR</p>
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