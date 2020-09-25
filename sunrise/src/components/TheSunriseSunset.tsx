import React, { useState, useEffect } from 'react'


const TheSunriseSunset = () => {

    const [sunrise, setSunrise] = useState("");
    const [sunset, setSunset] = useState("");

    function getData() {
        setSunrise(sunrise + "!")
    }

    return (
        <div>
            Ahoj
            <button onClick={getData} ></button>
            <h1>{sunrise}</h1>
            <h1>{sunset}</h1>
        </div>
    )
}

export default TheSunriseSunset
