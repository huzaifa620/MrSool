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
import { Card, Metric, Text, Flex, CategoryBar, Legend, Icon, Divider } from "@tremor/react";
import { CashIcon } from "@heroicons/react/outline"
import Chart from './Chart';
import Barchart from './CustomBarChart';
import PieChart from './PieChart';

const Home = () => {

    const {index, setIndex, time, setTime, timeChange, count, setCount, zoomLevel, setZoomLevel, country, setCountry, city, setCity, selectedDistrict, setSelectedDistrict} = useContext(Context)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [imgSrc, setImgSrc ] = useState([bike, car]);
    const [zeroIndImg, setZeroIndImg] = useState(ALL)

    const [expanded, setExpanded] = useState({});
    const handleToggleExpand = (index) => {
        setExpanded((prevExpanded) => ({
        ...prevExpanded,
        [index]: !prevExpanded[index],
        }));
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

    const [totalRiders, setTotalRiders] = useState(false);
    useEffect(() => {
        const riders = Array.from(document.querySelectorAll('div.riders p.text-sm span')).map(element => parseInt(element.textContent));
        const sum = riders.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setTotalRiders(sum);
    }, [time, index, zoomLevel]);

    const [avgEarnings, setAvgEarning] = useState([]);
    const [chartLoading, setChartLoading] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        setChartLoading(true)
        const earnings = Array.from(document.querySelectorAll('span.font-bold.text-tremor-xlarge')).map(element => parseInt(element.textContent));
        setAvgEarning(earnings);
      }, 100);
    }, [index]);
    useEffect(() => {
        setChartLoading(false)
    }, [avgEarnings])
    
  return (
    <div className='flex flex-col items-center w-full h-screen space-y-8 xl:space-y-24 p-2 pt-[10%] xl:pt-[6%]'>

        <div className='flex flex-col items-center justify-center w-full md:w-[90%] xl:w-[70%] space-y-4 xl:space-y-8'>
            <h2 className='text-3xl md:text-5xl font-bold tracking-widest uppercase text-center'> Demand Forecaster </h2>
            <p className='text-justify text-sm md:text-base'>MRSOOL, a delivery service platform, relies on demand forecasting for various aspects of its operations. By analyzing historical data, market trends, and other relevant factors, MRSOOL can estimate future demand and plan accordingly. This helps in efficient resource planning, including the allocation of delivery drivers, vehicles, and logistics operations. Capacity management is also improved as MRSOOL can adjust its operational capacity to match anticipated demand levels. Additionally, demand forecasting aids in inventory management, ensuring optimal stock levels while minimizing excess inventory. It also assists in optimizing service levels by anticipating peak demand periods and allocating additional resources accordingly. Pricing and promotional strategies can be refined based on demand patterns, leading to increased revenue and resource utilization.</p>
        </div>

        <div className='flex flex-col w-full xl:w-[80%] items-center justify-center px-1 lg:px-4 xl:px-8 space-y-16'>
            <div className='flex flex-col 2xl:flex-row items-center justify-center 2xl:space-x-[10%] space-y-12 2xl:space-y-0 w-full'>
                <Chart ordersData={data[index]?.restaurants}/>
                <PieChart avgData={avgEarnings && avgEarnings.slice(1)} ordersData={data[index]?.restaurants} />
            </div>
            <Barchart avgData={avgEarnings && avgEarnings.slice(1)} ordersData={data[index]?.restaurants} />
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
                        <span className='bg-mrsool-green hover:bg-mrsool-green-hover p-1 rounded-full text-xs xl:text-sm text-white px-4 cursor-pointer'> {country === 'KSA' ? 'Saudi Arabia': 'Egypt'} </span>
                        <span className='font-bold'>&gt;</span>  
                        <span className='bg-mrsool-green hover:bg-mrsool-green-hover p-1 rounded-full text-xs xl:text-sm text-white px-4 cursor-pointer'> {city} </span>  
                        <span className='font-bold'>&gt;</span>
                        <span className='bg-mrsool-green hover:bg-mrsool-green-hover p-1 rounded-full text-xs xl:text-sm text-white px-4 cursor-pointer'> {selectedDistrict ? selectedDistrict: 'District'} </span>  
                    </div> 
                }

                <div className='w-full relative border-2 border-black rounded-2xl h-[90%] overflow-hidden'>
                    <img src={index === 0 ? zeroIndImg : data[index]?.image} alt='' className='w-full h-full object-cover rounded-2xl' style={{ transform: `scale(${zoomLevel})` }} />

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
                {country !== 'Country' &&  <div className='h-[32px]'></div> }
                <div className='bg-mrsool-green md:w-3/4 xl:w-full flex flex-col items-center xl:h-[90%] p-2 md:p-4 space-y-2 rounded-2xl border-2 border-black' key={index}>

                    {totalRiders !== 0 && 
                    <Card className="max-w-xs mx-auto rounded-tremor-xl mb-4">
                        <Flex className="space-x-8 justify-center">
                            <div className='w-full'>
                                <Text className='text-tremor-title'> Total Riders </Text>
                                <Metric> <span className='font-bold text-tremor-xlarge'>{totalRiders}</span> </Metric>
                                <CategoryBar className="mt-4" values={[Math.ceil(totalRiders*0.8), Math.floor(totalRiders*0.2)]} colors={["emerald", "red"]} />
                                <Legend className="mt-3" categories={["Car 🚕", "Bike 🏍️"]} colors={["emerald", "red"]} />
                            </div>
                        </Flex>
                    </Card> }

                    <div className='w-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-mrsool-green scrollbar-thumb-gray-200 h-full px-2 space-y-4'>
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

        </div>

        <div className='flex flex-col w-full xl:w-[55%] xl:h-full space-y-4 pb-24'>
            <div className='xl:tracking-widest uppercase text-xl md:text-4xl font-semibold text-center'>
                Optimized Delivery Scheduler
            </div>
            <div className='bg-mrsool-green h-[93%] rounded-2xl border-2 border-black py-4'>

                <div className='w-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-mrsool-green scrollbar-thumb-gray-200 h-full p-1 lg:p-4 py-8 space-y-4'>
                    {
                        
                        data[index]?.restaurants.map((val, ind) => {
                            const isExpanded = expanded[ind] || false;
                            return (
                                <div key={ind} className='flex border rounded-2xl bg-gray-50 lg:space-x-4 p-1 lg:p-2 xl:p-4 w-full'>
                                    <div className='hidden md:flex w-[20%] md:scale-75 lg:scale-100 items-center'>
                                        <img src={val.imgUrl} alt='' className='w-32 h-32' />
                                    </div>
                                    <div className='w-full flex flex-col space-y-3 justify-center'>
                                        <p className='tracking-widest text-xl md:text-3xl font-bold text-center'>{val.name}</p>
                                        {totalRiders !== 0 && 
                                        <div className='w-full flex items-center justify-center'>
                                            <Card className="w-[85%] md:w-[50%] xl:w-[40%] px-8 py-4 rounded-tremor-xl">
                                                <Flex className="space-x-6 md:space-x-10 justify-center">
                                                    <Icon icon={CashIcon} color="green" variant="solid" tooltip="Avg. Earnings" size="sm" />
                                                    <div>
                                                        <Text className='text-tremor-title'>Average Earnings</Text>
                                                        <Metric>SAR <span className='font-bold text-tremor-xlarge'> { (() => parseInt( val.ridersDetails.reduce((total, rider) => total + parseInt(rider.earning), 0) / val.ridersDetails.length ) )() } </span></Metric>
                                                    </div>
                                                </Flex>
                                            </Card>
                                        </div>
                                        }
                                        <Divider className='bg-gray-200' />
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

    </div>
  )
}

export default Home