import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Context';

const Form = () => {

  const {country, setCountry, city, setCity, index, setIndex}  = useContext(Context)

  const [cities, setCities] = useState({'Country': [], 'KSA' : ['Jeddah', 'Mecca'], 'UAE': ['Dubai', 'Abu Dhabi'], 'QAT': ['Doha', 'Al Wakrah'], 'EGY': ['Cairo', 'Alexandria']})

  useEffect(() => {
    const lowercaseCity = city.replace(' ', '').toLowerCase().trim();
  
    switch (country) {
      case 'KSA':
        switch (lowercaseCity) {
          case 'jeddah':
            setIndex(4);
            break;
          case 'mecca':
            setIndex(5);
            break;
          default:
            break;
        }
        break;
      case 'UAE':
        switch (lowercaseCity) {
          case 'dubai':
            setIndex(6);
            break;
          case 'abudhabi':
            setIndex(7);
            break;
          default:
            break;
        }
        break;
      case 'QAT':
        switch (lowercaseCity) {
          case 'doha':
            setIndex(8);
            break;
          case 'alwakrah':
            setIndex(9);
            break;
          default:
            break;
        }
        break;
      case 'EGY':
        switch (lowercaseCity) {
          case 'cairo':
            setIndex(10);
            break;
          case 'alexandria':
            setIndex(11);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }, [city, country, cities]);

  return (

    <div className='w-[70%] md:w-[40%] absolute top-4 md:left-4 scale-90 md:scale-100'>
        <div className="flex">
            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only"></label>

            <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-1 md:px-4 text-xs md:text-sm md:font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none active:bg-mrsool-green transition-colors duration-500 ease-out" type="button"> {country} <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow md:w-1/4">

                <ul className="py-2 z-20 text-xs md:text-sm text-black flex flex-col items-center justify-center w-full" aria-labelledby="dropdown-button">
                    <li className='w-full'>
                        <button onClick={() => {setCountry('KSA')}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">Saudi Arabia</button>
                    </li>
                    <li className='w-full'>
                        <button onClick={() => {setCountry('UAE')}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">UAE</button>
                    </li>
                    <li className='w-full'>
                        <button onClick={() => {setCountry('QAT')}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">Qatar</button>
                    </li>
                    <li className='w-full'>
                        <button onClick={() => {setCountry('EGY')}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">Egypt</button>
                    </li>
                </ul>
            </div>
            
            <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="text-white bg-mrsool-green hover:bg-mrsool-green-hover focus:outline-none py-2.5 px-1 md:px-4 text-xs md:text-sm md:font-medium text-center inline-flex items-center rounded-r-lg" type="button"> {city} <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            
            <div id="dropdownSmall" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow md:w-1/4">
              <ul className="py-2 z-20 text-xs md:text-sm text-black flex flex-col items-center justify-center w-full" aria-labelledby="dropdown-button">

                {cities[country]?.map((val, ind) => (
                  <li className='w-full'>
                    <button onClick={() => setCity(val)} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">{val}</button>
                  </li>  
                ))}

              </ul>
            </div>

        </div>
    </div>

  )
}

export default Form