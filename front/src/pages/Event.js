
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import "./style.css";

function Event() {
    const variantResponse = [
        {
            value: 'Да',
            label: 'Да',
        },
        {
            value: 'Нет',
            label: 'Нет',
        }
    ]

    const [limit, setLimit] = React.useState('Нет');


    const handleChangeLimit = (e) => {
        console.log(e.target.value)
        setLimit(e.target.value)
    }

    const [dateEvent, setDateEvent] = React.useState(dayjs());
    const [dateRecord, setDateRecord] = React.useState(dayjs());
    const [dateEventExist, setDateEventExist] = React.useState("Нет");

    const handleChangeDate = (e) => {
        console.log(e.target.value)
        setDateEventExist(e.target.value)
    }
    
    


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <div className='textField'>
                <TextField
                    id="outlined-search"
                    label="Название мероприятия"
                    type="search"
                    style={{ margin: 25 }}
                />

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Выберите"
                    defaultValue={limit}
                    helperText="Ограничение числа участников"
                    onChange={handleChangeLimit}
                    style={{ margin: 25 }}
                >
                    {variantResponse.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="outlined-number"
                    label="Число участников"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ margin: 25, display: limit != 'Нет' ? "block" : "none" }}
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Выберите"
                    defaultValue={dateEventExist}
                    helperText="Дата мероприятия"
                    onChange={handleChangeDate}
                    style={{ margin: 25 }}
                >
                    {variantResponse.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <LocalizationProvider dateAdapter={AdapterDayjs} style={{ margin: 25, display: dateEventExist != 'Нет' ? "block" : "none" }}>
                    <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                        <DemoItem label="Выберите дату мероприятия">
                        <DateCalendar value={dateEvent} onChange={(newValue) => setDateEvent(newValue)} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider >
                

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                        <DemoItem label="Выберите срок записи">
                        <DateCalendar value={dateRecord} onChange={(newValue) => setDateRecord(newValue)} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>

            </div>
        </Box >


    );
}

export default Event;