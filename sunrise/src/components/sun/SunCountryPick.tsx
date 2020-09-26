import React, { ChangeEvent } from 'react'
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// data
import { countriesList } from "../../data/countries";

//styles
import "./SunCountryPick.scss"

// props
interface Props {
    onCountrySelect: (lat: Number, lng: number) => void
}

interface CountryType {
    name: string;
    latlng: Array<number>;
}


// component
const CountriesList = (props: Props) => {
    const { onCountrySelect } = props



    const handleSubmit = (e: ChangeEvent<{}>, value: CountryType | null) => {
        if (value) {
            onCountrySelect(value.latlng[0], value.latlng[1]);
        }
    }


    // template
    return (
        <Autocomplete
            className="countryPick"
            onChange={handleSubmit}
            id="country-select-demo"
            options={countriesList as CountryType[]}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
                <React.Fragment>
                    {option.name}
                </React.Fragment>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                    }}
                />
            )}
        />
    )
}

export default CountriesList
