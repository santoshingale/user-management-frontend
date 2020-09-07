import React, { useState } from 'react'
import DatePicker from 'react-date-picker';

const Temp = () => {
    const [state, setState] = useState(new Date())

    const changeDate = date => {
        console.log(state)
        setState(date)
    }
    return (
        <div>
            <DatePicker
                
                value={state}
                onChange={changeDate}
            />
        </div>
    )
}

export default Temp



