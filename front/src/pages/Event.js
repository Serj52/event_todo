
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

    const [value, setValue] = React.useState('Нет');

    const handleChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='textField'>
            <TextField
                id="outlined-search"
                label="Название мероприятия"
                type="search"
                style={{margin:25}}
            />

            <TextField
                id="outlined-select-currency"
                select
                label="Выберите"
                defaultValue={value}
                helperText="Ограничение числа участников"
                onChange={handleChange}
                style={{margin:25}}

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
                style={{ margin:25, display: value != 'Нет' ? "block" : "none" }}
            />



        </div>
        </Box >


    );
}

export default Event;