import "./style.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={10} sx={{justifyContent:"center", textAlign:"center", marginTop:50}}>
      <Button variant="contained" href="/create_event" sx={{width:200, height:100, }}>
        Создать мероприятие
      </Button>
      <Button variant="contained" href="#outlined-buttons" sx={{width:200, height:100}}>
        Записаться на мероприятие
      </Button>
    </Stack>
  );
}