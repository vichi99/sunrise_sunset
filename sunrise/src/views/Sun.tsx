import React, { useState } from 'react'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import moment from "moment";
import { maxDate, dateFormat, locale } from "../confs/conf";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//children
import SunCountryPick from "../components/sun/SunCountryPick";
import SunDatePick from "../components/sun/SunDatePick";
// import SunSunriseSunset from "../components/sun/SunSunriseSunset";

// styles
import "./Sun.scss"

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


// component
const Sun = () => {
    const [selectedDate, setSelectedDate] = useState(maxDate);
    const [latLng, setLanLng] = useState([])
    moment.locale(locale);

    // handle components
    const handleDateChange = (date: MaterialUiPickersDate) => {
        setSelectedDate(moment(date).format(dateFormat));
    }

    const handleCountrySelect = (lat: Number, lng: number) => {
        setLanLng([lat, lng] as any)
    }

    const classes = useStyles();
    // template
    return (
        // <Container className="sun" fluid>
        //     <h1>Sunrise and Sunset</h1>
        //     <Row className="Row">
        //         <Col className="Col" xs={12} sm={6} md={6} lg={6} xl={6}
        //             style={{ height: "60px" }}
        //         >
        //             <SunDatePick
        //                 onDateSelect={handleDateSelect}
        //                 selectedDate={selectedDate}
        //             />
        //         </Col>
        //         <Col className="Col" xs={12} sm={6} md={6} lg={6} xl={6}
        //             style={{ height: "60px" }}
        //         >
        //             <SunCountryPick
        //                 onCountrySelect={handleCountrySelect}
        //             />
        //         </Col>
        //     </Row>
        //     <div>
        //         Date: {JSON.stringify(selectedDate)}
        //         Pos: {JSON.stringify(latLng)}
        //     </div>
        // </Container>

        <div >
            <h1>Sunrise and Sunset</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    {/* <Paper style={{ height: "60px" }} > */}
                    <SunDatePick
                        handleDateChange={handleDateChange}
                        selectedDate={selectedDate}
                    />
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    {/* <Paper style={{ height: "60px" }}> */}
                    <SunCountryPick
                        onCountrySelect={handleCountrySelect}
                    />
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={12}>
                    <h1>Show</h1>
                </Grid>
                <Grid item xs={12}>
                    <h1>Date: {JSON.stringify(selectedDate)}</h1>
                    <h1>Pos: {JSON.stringify(latLng)}</h1>
                </Grid>
            </Grid>
        </div>
    )
}

export default Sun
