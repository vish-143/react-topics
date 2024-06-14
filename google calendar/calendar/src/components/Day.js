import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'

export default function Day({ day, rowIndex }) {
    const getCurrentDayClass = () => {
        return day.format("DD-MM-YYY") === dayjs().format("DD-MM-YYY") ?  "presentDay": ""
    }
    console.log("getCurrentDayClass",getCurrentDayClass());
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column',border:"1px solid rgb(229 231 235)"}}>
            <header className='header'>
                {
                    rowIndex === 0 && <p className='day'>  {day.format("ddd").toUpperCase()}</p>
                }
                <p className={`date ${getCurrentDayClass()}`}>{day.format("DD")}</p>
            </header>
        </Box>
    )
}
