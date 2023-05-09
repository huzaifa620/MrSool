import React, { createContext, useState } from 'react';

const Context = createContext({
    isOpen: false,
    index: 0,
    setIndex: () => {},
    time: "",
    setTime: () => {},
    timeChange: () => {},
    count: 0,
    setCount: () => {}
});

const StateProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("Select Time")
    const [index, setIndex] = useState(0)
    const [count, setCount] = useState(0)

    const timeChange = (event) => {
        setIsOpen(false)
        setTime(event.target.textContent)
        setCount(0)
    }

    return (
        <Context.Provider value={{ time, setTime, timeChange, isOpen, setIsOpen, index, setIndex, count, setCount }}>
            {children}
        </Context.Provider>
    );
};

export { StateProvider, Context };