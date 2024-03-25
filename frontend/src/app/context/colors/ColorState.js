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

    // ROUTE2: Update Color using PUT request 
    const updateColor = async (colorId, name, stock) => {
        const url = `${host}api/color/update`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ colorId, name, stock })
        });
        const json = await response.json();

        let newColors = JSON.parse(JSON.stringify(colors));

        for (let index = 0; index < newColors.length; index++) {
            const element = newColors[index];
            if (element._id === colorId) {
                newColors[index].name = name;
                newColors[index].stock = stock;
                break;
            }
        }
        setColors(newColors);
    }

    return (
        <ColorContext.Provider value={{ colors, getAllColors, updateColor }}>
            {props.children}
        </ColorContext.Provider>)

}

export default ColorState;
