import React from 'react'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

// constants
import { minDate, maxDate, locale } from "../../confs/conf";

// styles
import "./SunDatePick.scss"

// props
interface Props {
    handleDateChange: (date: MaterialUiPickersDate) => void
    selectedDate: string
}


// component
const SunDatePick = (props: Props) => {
    const { handleDateChange, selectedDate } = props

    // template
    return (
        <div className="datePick">
            <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
                <KeyboardDatePicker
                    id="date-picker-dialog"
                    label={"Select Date"}
                    minDate={minDate}
                    maxDate={maxDate}
                    format="L"
                    value={selectedDate}
                    onChange={(date: MaterialUiPickersDate) => {
                        handleDateChange(date)
                    }}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    style={{ width: "100%" }}
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default SunDatePick
