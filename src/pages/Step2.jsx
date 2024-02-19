import React, { useState } from 'react'
import StepLayout from '../layout/StepLayout'
import InputField from '../InputField';
import { DatePicker } from '@mui/x-date-pickers';
import {  DemoItem } from '@mui/x-date-pickers/internals/demo';
import { NumberInput } from '@mui/base/Unstable_NumberInput/NumberInput';
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';

const Step2 = ({validationSchema}) => {
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
        
        <div className='grid grid-cols-2  gap-4 p-3'>
        
        <TextField
          id="currency"
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
       
      <InputField
       id="PO"
       name="PO"
       sx={{ marginBottom: '12px' }}
       label="PO:"
      />

        <DemoItem label="Invoice Date:" id='invoiceDate'>
        <DatePicker  />
        </DemoItem>

        <DemoItem label="Service Rendered Date:" id='renderedDate'>
        <DatePicker  />
        </DemoItem>

          <InputField
            id="amount"
            name="amount"
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />        
        <TextField
          id="language"
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
       
  )
}

export default Step2;
