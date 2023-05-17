import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { Context } from './Context';
import React, { useContext } from 'react'

export default function DateTimePicker() {

  const {time, setTime} = useContext(Context)

  const handleTimeChange = (newTime) => {
    console.log('Selected time:', newTime.$H);
    setTime(newTime.$H)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <MobileDateTimePicker
        defaultValue={dayjs()}
        orientation="landscape"
        onChange={handleTimeChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
