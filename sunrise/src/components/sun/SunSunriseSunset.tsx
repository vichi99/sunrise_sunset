import React, { useState } from 'react'
import { CountryType } from "../../views/Sun";
import Button from '@material-ui/core/Button';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// styles
import "./SunSunriseSunset.scss"

// props
interface Props {
    selectedDate: string
    selectedCountry: CountryType
}

// component
const CountriesList = (props: Props) => {
    const { selectedDate, selectedCountry } = props
    const [sunrise, setSunrise] = useState<string>("");
    const [sunset, setSunset] = useState<string>("");
    const [actualCountry, setActualCountry] = useState<string>("");


    function loadApiData(lat: number, lng: number, date: string) {
        console.log("Show if country" + JSON.stringify(date) + " ; " + lat.toString() + " ; " + lng.toString());
        axios.get(
            `https://api.sunrise-sunset.org/json?
            lat=${encodeURI(lat.toString())}&
            lng=${encodeURI(lng.toString())}&
            date=${encodeURI(date)}`
        ).then(response => {
            console.log(response);
            setSunrise(response.data.results.sunrise);
            setSunset(response.data.results.sunset);
            setActualCountry(selectedCountry.name);
        });


    }

    const handleClickShow = () => {
        if (selectedCountry.name) {
            loadApiData(selectedCountry.latlng[0], selectedCountry.latlng[1], selectedDate)
        }

    }
    // template
    return (
        <div>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
            >
                <Grid item xs={12} sm={4} md={4} lg={4} xl={2}>
                    <Paper className="widget">
                        <Button className="btnShow" variant="contained" onClick={handleClickShow} >Show</Button>
                    </Paper>
                </Grid>
                {actualCountry === "" ? (null) : (
                    <Grid item xs={12}>
                        <hr className="lineSeparator" ></hr>
                        <h1>{actualCountry}</h1>
                        <h1><span role="img" aria-label="sunrise">☀️</span> Sunrise is at {sunrise}</h1>
                        <h1><span role="img" aria-label="sunrise">🌑 </span>Sunset is at {sunset}</h1>
                    </Grid>
                )}
            </Grid>

        </div >
    )
}

export default CountriesList
