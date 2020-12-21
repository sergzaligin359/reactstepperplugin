import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState({});

    const setValues = (values) => {
        setData((prev) => {
            return {
                ...prev,
                ...values
            }
        })
    };

    const contextValues = {        
        data,
        setValues
    };

    return <DataContext.Provider value={ contextValues } >{ children }</DataContext.Provider>
};

export const useData = () => useContext(DataContext);
