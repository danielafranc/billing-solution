import React, { useState } from 'react'
import StepLayout from '../layout/StepLayout'
import InputField from '../components/InputField';
import { DatePicker } from '@mui/x-date-pickers';
import {  DemoItem } from '@mui/x-date-pickers/internals/demo';
import { NumberInput } from '@mui/base/Unstable_NumberInput/NumberInput';
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';

const Step2 = () => {
    const [value, setValue] = useState(null);

    const languages = [
        {
          code: 'en',
          label: 'English',
        },
        {
          code: 'es',
          label: 'Español',
        },
        {
          code: 'fr',
          label: 'Français',
        },
        {
          code: 'de',
          label: 'Deutsch',
        },
        {
          code: 'it',
          label: 'Italiano',
        },
      ];

      const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];
      

  return (
     <StepLayout>
        
        <FormControl fullWidth sx={{ m: 1 }}>
        <div className='grid grid-cols-2  gap-4 p-3'>
        
        <TextField
          id="outlined-select-currency"
          select
          label="Invoice currency"
          defaultValue="EUR"
          required
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <TextField id="outlined-basic" label="PO:" variant="outlined" />
      

        <DemoItem label="Invoice Date:">
        <DatePicker sx={{  backgroundColor: '#F8FAFC'}} />
        </DemoItem>

        <DemoItem label="Service Rendered Date:" sx={{marginBottom: '8px',  fontWeight: '600', fontSize: '1.25rem'  }}>
        <DatePicker  sx={{ backgroundColor: '#F8FAFC' }} />
        </DemoItem>

          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />        
        <TextField
          id="outlined-select-language"
          select
          label="Language"
        //   helperText="Please select your currency"
        >
          {languages.map((option) => (
            <MenuItem key={option.code} value={option.code}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

       

        </div>
            </FormControl>
            
    </StepLayout>
  )
}

export default Step2