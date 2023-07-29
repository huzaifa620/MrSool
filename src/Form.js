import React, { useContext, useEffect, useState } from 'react'
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { Context } from './Context';

const Form = () => {

  const {country, setCountry, city, setCity, index, setIndex, selectedDistrict, setSelectedDistrict}  = useContext(Context)

  const [cities, setCities] = useState({'Country': {'': 0}, 'KSA' : {'Jeddah': 4, 'Riyadh': 5, 'Mecca': 6, 'Medina': 7, 'Dammam': 8, 'Taif': 9, 'Tabuk': 10}, 'EGY': {'Cairo': 11, 'Alexandria': 12, 'Giza': 13, 'Sharm El-Sheikh': 14, 'Luxor': 15, 'Aswan': 16, 'Hurghada': 17} })

  const [drop, setDrop] = useState(false)
  const [dropCont, setDropCont] = useState(false)

  const [district, setDistrict] = useState( {
    "City": [],
    "Jeddah": {"Al-Balad": 18, "Al-Sharafiyyah": 19, "Al-Hamra": 20, "Al-Nuzhah": 21, "Al-Salamah": 22},
    "Riyadh": {"Al-Olaya": 23, "Al-Malaz": 24, "Al-Bathaa": 25, "Al-Nahda": 26, "Al-Murabba": 27},
    "Mecca": {"Al-Hindawiyyah":28, "Al-Mansour": 29, "Al-Shubaikah": 30, "Al-Hujun": 31, "Al-Zahir": 32},
    "Medina": {"Al-Haram": 33, "Al-Aridh": 34, "Al-Salam": 35, "Al-Qiblatayn": 36, "Al-Aqiq": 37},
    "Dammam": {"Al-Adama": 38, "Al-Anud": 39, "Al-Shati": 40, "Al-Rakah": 41, "Al-Danah": 42},
    "Taif": {"Al-Hawiyah": 43, "Al-Ward": 44, "Al-Hada": 45, "Al Qouraiat": 46, "Al-Shafa": 47},
    "Tabuk": {"Al-Rawdah": 48, "Al-Sharafiyah": 49, "Al-Qadisiyah": 50, "Al-Wajh": 51, "Al-Samdah": 52},
    "Cairo": {"Zamalek": 53, "Maadi": 54, "Heliopolis": 55, "Dokki": 56, "Giza": 57},
    "Alexandria": {"Montaza": 53, "Smouha": 54, "Raml Station": 55, "Miami": 56, "Al-Montaza": 57},
    "Giza": {"Doqi": 53, "Mohandessin": 54, "Agouza": 55, "Haram": 56, "Faisal": 57},
    "Sharm El-Sheikh": {"Naama Bay": 53, "Ras Um Sid": 54, "Shark's Bay": 55, "Hadaba": 56, "Nabq": 57},
    "Luxor": {"East Bank": 53, "West Bank": 54, "Karnak": 55, "Al-Gurna": 56, "Al-Toud": 57},
    "Aswan": {"Aswan City": 53, "Elephantine Island": 54, "Nubian Village": 55, "Kom Ombo": 56, "Abu Simbel": 57},
    "Hurghada": {"El Dahar": 53, "Sakkala": 54, "Makadi Bay": 55, "Soma Bay": 56, "El Gouna": 57},
  }  
  );

    useEffect(() => {
      setIndex(cities[country][city])
    }, [city, country, cities]);

    useEffect(() => {
      setIndex(district[city][selectedDistrict])
    }, [selectedDistrict])
    
    return (
      
      <div className='w-[70%] md:w-[40%] absolute top-4 md:left-4 scale-90 md:scale-100'>
        <div className="flex items-center">
            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only"></label>

            <div className='flex flex-col relative w-[30%] md:w-1/4'>
              <button onClick={() => setDropCont(!dropCont)} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center justify-between py-2.5 px-2 md:px-4 text-xs md:text-sm md:font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:outline-none active:bg-mrsool-green transition-colors duration-500 ease-out" type="button">
                <span> {country} </span> 
                <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>

              { dropCont && <div id="dropdown" className="z-10">

                  <ul className="py-2 z-20 text-xs md:text-sm text-black flex flex-col items-center justify-center w-full absolute bg-white divide-y divide-gray-100 rounded shadow" aria-labelledby="dropdown-button">
                      <li className='w-full'>
                          <button onClick={() => {setCountry('KSA'); setDropCont(!dropCont); setDrop(false)}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">Saudi Arabia</button>
                      </li>
                      <li className='w-full'>
                          <button onClick={() => {setCountry('EGY'); setDropCont(!dropCont); setDrop(false)}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">Egypt</button>
                      </li>
                  </ul>
              </div> }

            </div>
            
            <div className='flex flex-col relative w-[30%] md:w-1/4'>
              <button onClick={() => setDrop(!drop)} id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" className="text-white bg-mrsool-green hover:bg-mrsool-green-hover focus:outline-none py-2.5 px-2 md:px-4 text-xs md:text-sm md:font-medium text-center inline-flex items-center justify-between" type="button"> 
                <span> {city} </span> 
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {drop && <div id="dropdownSmall" className="z-20">
                <ul className="py-2 z-20 text-xs md:text-sm text-black flex flex-col h-[112px] md:h-auto overflow-y-auto items-center justify-center w-full absolute bg-white divide-y divide-gray-100 rounded shadow" aria-labelledby="dropdown-button">

                  {Object.keys(cities[country])?.map((key, val) => (
                    <li className='w-full' key={val}>
                      <button onClick={() => {setCity(key); setDrop(!drop)}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100">{key}</button>
                    </li>  
                  ))}

                </ul>
              </div>}
            </div>

            <div className='flex flex-col relative w-[30%] md:w-1/4'>
              <SearchSelect value={selectedDistrict} onValueChange={setSelectedDistrict} placeholder="District" className="tremor-brand-subtle tremor-label focus:outline-none min-w-[100px] lg:min-w-[144px] z-30">
                {Object.keys(district[city]).map((districtName) => (
                  <SearchSelectItem key={district[city][districtName]} value={districtName} className='bg-white hover:bg-gray-100 fontSize-tremor-label'>
                    {districtName}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>

        </div>
    </div>

  )
}

export default Form