import React, { createContext, useState } from 'react';

const Context = createContext({
    isOpen: false,
    index: 0,
    setIndex: () => {},
    time: "",
    setTime: () => {},
    timeChange: () => {},
});

const StateProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("Select Time")
    const [index, setIndex] = useState(0)

    const timeChange = (event) => {
        setIsOpen(false)
        setTime(event.target.textContent)
    }

    return (
        <Context.Provider value={{ time, setTime, timeChange, isOpen, setIsOpen, index, setIndex }}>
            {children}
        </Context.Provider>
    );
};

export { StateProvider, Context };