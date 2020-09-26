import React, { ChangeEvent, FormEvent, useState } from 'react'

//styles


// props
interface Props {

    datetime: string
    latLng: []
}

// component
const CountriesList = (props: Props) => {
    const { datetime, latLng } = props
    const [query, setQuery] = useState("");

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault() // avoid refresh page

        // const newCountry = {
        //     name: query,
        //     latlng: [2, 3]
        // }
        // setCountries([...countries, newCountry])
    }


    // input element
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }


    // template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleInput} />
            </form>
        </div>
    )
}

export default CountriesList
