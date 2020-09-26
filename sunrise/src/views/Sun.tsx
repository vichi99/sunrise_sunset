import React, { useState } from 'react'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import moment from "moment";
import { maxDate, dateFormat, locale } from "../confs/conf";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//children
import SunCountryPick from "../components/sun/SunCountryPick";
import SunDatePick from "../components/sun/SunDatePick";
import SunSunriseSunset from "../components/sun/SunSunriseSunset";

// styles
import "./Sun.scss"

export interface CountryType {
    name: string;
    latlng: Array<number>;
}

// component
const Sun = () => {
    const [selectedDate, setSelectedDate] = useState(maxDate);
    const [selectedCountry, setSelectedCountry] = useState<CountryType>({ name: "", latlng: [] });
    moment.locale(locale);

    // handle components
    const handleDateChange = (date: MaterialUiPickersDate) => {
        setSelectedDate(moment(date).format(dateFormat));
    }

    const handleCountrySelect = (country: CountryType) => {
        setSelectedCountry(country)
    }

    // template
    return (
        <div >
            <h1 className="title" >Sunrise and Sunset</h1>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                    <Paper className="widget" >
                        <SunDatePick
                            handleDateChange={handleDateChange}
                            selectedDate={selectedDate}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                    <Paper className="widget">
                        <SunCountryPick
                            onCountrySelect={handleCountrySelect}
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <SunSunriseSunset
                    selectedDate={selectedDate}
                    selectedCountry={selectedCountry}
                ></SunSunriseSunset>
            </Grid>
        </div >
    )
}

export default Sun
