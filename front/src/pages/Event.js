
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
        setLimit(e.target.value)
    }

    const [dateEvent, setDateEvent] = React.useState();
    const [dateRecord, setDateRecord] = React.useState();
    const [dateEventExist, setDateEventExist] = React.useState("Нет");
    const [participant, setParticipant] = React.useState(null);

    const handleChangeDate = (e) => {
        console.log(e.target.value)
        setDateEventExist(e.target.value)
    }



    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
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
                    error={participant <= 0 ? true : false}
                    helperText={participant <= 0 ? "Число должно быть больше нуля" : ""}
                    onChange={(e) => {
                        var participant = parseInt(e.target.value, 10);
                        if (participant >= 0){
                            setParticipant(participant);
                        }
                        console.log(participant);
                    }}
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

                <div style={{ margin: 25, display: dateEventExist != 'Нет' ? "block" : "none" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                                label="Выберите дату мероприятия"
                                value={dateEvent}
                                onChange={(newValue) => setDateEvent(newValue)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                            label="Выберите срок записи"
                            value={dateRecord}
                            onChange={(newValue) => setDateRecord(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
        </Box >


    );
}

export default Event;