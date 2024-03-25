'use client'
import React, { useState } from 'react';
import ColorContext from './ColorContext';


const ColorState = (props) => {
    const host = "http://localhost:5000/";
    const [colors, setColors] = useState([]);

    // ROUTE1: Get All Colors using GET request
    const getAllColors = async () => {
        const url = `${host}api/color/`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        console.log(json);
        setColors(json);
    }

    return (
        <ColorContext.Provider value={{ colors, getAllColors }}>
            {props.children}
        </ColorContext.Provider>)

}

export default ColorState;
