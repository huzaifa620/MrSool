import React from 'react'

const Form = () => {

    const [country, setCountry] = React.useState('Country')

  return (

    <form className='w-[40%] absolute top-4 left-4'>
        <div className="flex">
            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>

            <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none active:bg-mrsool-green transition-colors duration-500 ease-out" type="button"> {country} <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-1/4">

                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col items-center justify-center w-full" aria-labelledby="dropdown-button">
                    <li className='w-full'>
                        <button type="button" onClick={() => {setCountry('KSA')}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Saudi Arabia</button>
                    </li>
                    <li className='w-full'>
                        <button type="button" onClick={() => {setCountry('UAE')}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">UAE</button>
                    </li>
                    <li className='w-full'>
                        <button type="button" onClick={() => {setCountry('QAT')}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Qatar</button>
                    </li>
                    <li className='w-full'>
                        <button type="button" onClick={() => {setCountry('EGY')}} className="inline-flex w-full items-center justify-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Egypt</button>
                    </li>
                </ul>
            </div>
            <div className="relative w-full">

                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-mrsool-green focus:border-mrsool-green" placeholder="Search for city" required />

                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-mrsool-green rounded-r-lg border border-green-600 hover:bg-mrsool-green-hover focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>

  )
}

export default Form