import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

export default function AnimalDashboard() {
    
    const [ animals, setAnimals ] = useState([]);
    
    // How can get fetch the data from the server when the component mounts?
    // How can we capture and set that data to state?


    const getAnimalList = () => {
        axiosWithAuth()
        .get('/animals')
        .then((res) => {
            console.log('animal get', res)
            setAnimals(res.data)
        })
    }

    useEffect(() => {
        getAnimalList();
    }, [])

    return(
        <div className="dash">
            <AnimalForm animals={animals} updateAnimals={setAnimals} />
            <AnimalList animals={animals} />
        </div>
    )
}