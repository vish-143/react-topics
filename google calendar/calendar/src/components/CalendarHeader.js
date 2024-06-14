import React, { useContext } from 'react'
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import TodayIcon from '@mui/icons-material/Today';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import logo from '../assets/calendar-icon.png'
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext)
  const handleReset=()=>{
    setMonthIndex(dayjs().month())
  }
  const handlePreviousMonth = () => {
    setMonthIndex(monthIndex - 1)
  }
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1)
  }
  return (
    <Box sx={{ display: "flex", alignItems: "center", pl: "1rem", pr: "1rem", pt: "0.5rem", pb: "0.5rem" }}>
      <img src={logo} alt='calendarIcon' className='calendarIcon' />
      <Typography variant='h1' sx={{ mr: "2.5rem", fontSize: "1.25rem", lineHeight: "1.75rem", color: "rgb(107 114 128)", fontWeight: "700" }}>
        Calendar
      </Typography>
      <Button variant="contained" endIcon={<TodayIcon />} className='todayButton' onClick={()=>handleReset()}>
        Today
      </Button>
      <Tooltip title="Previous Month">
        <IconButton
          onClick={()=>handlePreviousMonth()}
          size="small"
          sx={{ ml: 2, color: "#088b89" }}
        >
          <ChevronLeftOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Next Month">
        <IconButton
          onClick={()=>handleNextMonth()}
          size="small"
          sx={{ ml: 2, color: "#088b89" }}
        >
          <ChevronRightOutlinedIcon />
        </IconButton>
      </Tooltip>
<Typography variant='h2' sx={{fontWeight:"700",fontSize: "1.25rem", lineHeight: "1.75rem",color: "rgb(107 114 128)",ml:"1rem"}}>
  {dayjs(new Date(dayjs().year(),monthIndex)).format("MMMM YYYY")}
</Typography>
    </Box>
  )
}
