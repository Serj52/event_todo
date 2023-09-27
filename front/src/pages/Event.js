
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
            <div style={{"display": 
            "flex",  "flex-direction": "column"}}>
                <TextField
                    id="outlined-search"
                    label="Название мероприятия"
                    type="search"

                />

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Выберите"
                    defaultValue={value}
                    helperText="Ограничение числа участников"
                    onChange={handleChange}

                >
                    {variantResponse.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}

                </TextField>

                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ display: value != 'Нет' ? "block" : "none" }}
                />



            </div>
        </Box>


    );
}

export default Event;