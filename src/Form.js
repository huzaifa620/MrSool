import React, { useContext, useEffect, useState } from 'react'
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { Context } from './Context';

const Form = () => {

  const {country, setCountry, city, setCity, index, setIndex}  = useContext(Context)

  const [cities, setCities] = useState({'Country': {'': 0}, 'KSA' : {'Jeddah':4, 'Riyadh':5, 'Mecca':6, 'Medina':7, 'Dammam':8, 'Taif':9, 'Tabuk':10, 'Buraidah':11, 'Abha':12, 'Al-Khobar':13}, 'EGY': {'Cairo': 14, 'Alexandria': 15, 'Giza': 16, 'Sharm El-Sheikh': 17, 'Luxor': 18, 'Aswan': 19, 'Hurghada': 20, 'Port Said': 21, 'Suez': 22, 'Mansoura':23} })

  const [drop, setDrop] = useState(false)
  const [dropCont, setDropCont] = useState(false)

  const [district, setDistrict] = useState( {
    "City": [],
    "Jeddah": ["Al-Balad", "Al-Sharafiyyah", "Al-Hamra", "Al-Nuzhah", "Al-Salamah"],
    "Riyadh": ["Al-Olaya", "Al-Malaz", "Al-Bathaa", "Al-Nahda", "Al-Woroud"],
    "Mecca": ["Al-Hindawiyyah", "Al-Mansour", "Al-Shubaikah", "Al-Hujun", "Al-Zahir"],
    "Medina": ["Al-Haram", "Al-Madina Al-Munawwarah", "Al-Salam", "Al-Qiblatain", "Al-Aqiq"],
    "Dammam": ["Al-Adama", "Al-Anoud", "Al-Shati", "Al-Rakah", "Al-Danah"],
    "Taif": ["Al-Hawiyah", "Al-Ward", "Al-Hada", "Al-Qurayyat", "Al-Shafa"],
    "Tabuk": ["Al-Rawdah", "Al-Sharafiyah", "Al-Qadisiyah", "Al-Wajh", "Al-Aqiq"],
    "Buraidah": ["Al-Oraija", "Al-Faisaliyah", "Al-Rawabi", "Al-Khaleej", "Al-Shamal"],
    "Abha": ["Al-Soudah", "Al-Muftaha", "Al-Majardah", "Al-Sawdah", "Al-Kuday"],
    "Al-Khobar": ["Al-Ulaya", "Al-Rakah", "Al-Salamah", "Al-Bustan", "Al-Turki"],
    "Cairo": ["Zamalek", "Maadi", "Heliopolis", "Dokki", "Giza"],
    "Alexandria": ["Montaza", "Smouha", "Raml Station", "Miami", "Al-Montaza"],
    "Giza": ["Dokki", "Mohandessin", "Agouza", "Haram", "Faisal"],
    "Sharm El-Sheikh": ["Naama Bay", "Ras Um Sid", "Shark's Bay", "Hadaba", "Nabq"],
    "Luxor": ["East Bank", "West Bank", "Karnak", "Al-Gurna", "Al-Toud"],
    "Aswan": ["Aswan City", "Elephantine Island", "Nubian Village", "Kom Ombo", "Abu Simbel"],
    "Hurghada": ["El Dahar", "Sakkala", "Makadi Bay", "Soma Bay", "El Gouna"],
    "Port Said": ["Port Fouad", "Al-Manakh", "Al-Zohour", "Al-Dawahy", "Al-Gomhoriya"],
    "Suez": ["Al-Arbaeen", "Al-Qadisiyah", "Al-Mansheya", "Al-Jumhuriyah", "Al-Ganayen"],
    "Mansoura": ["Al-Gomhuriya", "Al-Mahallah Al-Kubra", "Dekernes", "Talkha", "Mit Ghamr"]
  }  
   );

  const [selectedDistrict, setSelectedDistrict] = useState(null)

    useEffect(() => {
      setIndex(cities[country][city])
    }, [city, country, cities, selectedDistrict]);
    
    return (
      
      <div className='w-[70%] md:w-[40%] absolute top-4 md:left-4 scale-90 md:scale-100'>
        <div className="flex items-center">
            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only"></label>

            <div className='flex flex-col relative w-[30%] md:w-1/4 h-[42px]'>
              <button onClick={() => setDropCont(!dropCont)} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center justify-between py-2.5 px-2 md:px-4 text-xs md:text-sm md:font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:outline-none active:bg-mrsool-green transition-colors duration-500 ease-out" type="button">
                <span> {country} </span> 
                <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>

              { dropCont && <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow">

                  <ul className="py-2 z-20 text-xs md:text-sm text-black flex flex-col items-center justify-center w-full" aria-labelledby="dropdown-button">
                      <li className='w-full'>
                          <button onClick={() => {setCountry('KSA'); setDropCont(!dropCont); setDrop(false)}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">Saudi Arabia</button>
                      </li>
                      <li className='w-full'>
                          <button onClick={() => {setCountry('EGY'); setDropCont(!dropCont); setDrop(false)}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">Egypt</button>
                      </li>
                  </ul>
              </div> }

            </div>
            
            <div className='flex flex-col relative w-[30%] md:w-1/4 h-[42px]'>
              <button onClick={() => setDrop(!drop)} id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" className="text-white bg-mrsool-green hover:bg-mrsool-green-hover focus:outline-none py-2.5 px-2 md:px-4 text-xs md:text-sm md:font-medium text-center inline-flex items-center justify-between" type="button"> 
                <span> {city} </span> 
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {drop && <div id="dropdownSmall" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow">
                <ul className="py-2 z-20 text-xs md:text-sm text-black flex flex-col items-center justify-center w-full" aria-labelledby="dropdown-button">

                  {Object.keys(cities[country])?.map((key, val) => (
                    <li className='w-full' key={val}>
                      <button onClick={() => {setCity(key); setDrop(!drop)}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">{key}</button>
                    </li>  
                  ))}

                </ul>
              </div>}
            </div>

            <div className='flex flex-col relative w-[30%] md:w-1/4'>
              <SearchSelect value={selectedDistrict} onValueChange={setSelectedDistrict} placeholder="District" className="tremor-brand-subtle tremor-brand-muted tremor-label focus:outline-none ">
                {
                  district[city]?.map((val, ind) => (
                    <SearchSelectItem key={ind} value={val} className='bg-white'>
                      {val}
                    </SearchSelectItem>    
                  ))
                }
              </SearchSelect>
            </div>

        </div>
    </div>

  )
}

export default Form