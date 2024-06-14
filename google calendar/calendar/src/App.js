import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { getMonth } from './util';
import Month from './components/Month';
import { Box } from '@mui/material';
import CalendarHeader from './components/CalendarHeader';
import GlobalContext from './context/GlobalContext';
function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndex}=useContext(GlobalContext)
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])
  return (
    <>
      <Box sx={{ height: '100vh',display: 'flex', flexDirection: 'column' }}>
        <CalendarHeader/>
        <Box sx={{ display: 'flex', flexGrow: "1", flexShrink: "1", flexBasis: "0%" }}>
          <Month month={currentMonth} />
        </Box>
      </Box>
    </>
  );
}

export default App;
