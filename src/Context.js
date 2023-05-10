import React, { createContext, useState } from 'react';

const Context = createContext({
    isOpen: false,
    index: 0,
    setIndex: () => {},
    time: "",
    setTime: () => {},
    timeChange: () => {},
    count: 0,
    setCount: () => {},
    zoomLevel: 1,
    setZoomLevel: () => {}
});

const StateProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("Select Time")
    const [index, setIndex] = useState(0)
    const [count, setCount] = useState(0)
    const [zoomLevel, setZoomLevel] = useState(1);

    const timeChange = (event) => {
        setIsOpen(false)
        setTime(event.target.textContent)
        setCount(0)
        setZoomLevel(1)
    }

    return (
        <Context.Provider value={{ time, setTime, timeChange, isOpen, setIsOpen, index, setIndex, count, setCount, zoomLevel, setZoomLevel }}>
            {children}
        </Context.Provider>
    );
};

export { StateProvider, Context };