import React from 'react'
import Day from './Day'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
export default function Month({ month }) {
    return (
        <Box sx={{ flexGrow: "1", flexShrink: "1", flexBasis: "0%" ,display:"grid",gridTemplateColumns:"repeat(7, minmax(0, 1fr))",gridTemplateRows: "repeat(5, minmax(0, 1fr))"}}>

            {month.map((row, index) => (
                <React.Fragment>
                    {row.map((day, idx) => (

                        <Day day={day} key={idx} rowIndex={index}/>

                    ))}
                </React.Fragment>
            ))
            }

        </Box >
    )
}