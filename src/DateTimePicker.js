import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { useMediaQuery } from '@mui/material';
import { Context } from './Context';
import React, { useContext } from 'react';

export default function DateTimePicker() {
  const { time, setTime } = useContext(Context);

  const handleTimeChange = (newTime) => {
    setTime(newTime.$H);
  };

  const orientation = window.innerWidth < 480 ? 'portrait' : 'landscape';

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <MobileDateTimePicker
          defaultValue={dayjs()}
          orientation={orientation}
          onChange={handleTimeChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
