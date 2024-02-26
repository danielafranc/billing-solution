import React, { useState } from 'react'
import StepLayout from '../layout/StepLayout'
import InputField from '../InputField';
import { DatePicker } from '@mui/x-date-pickers';
import {  DemoItem } from '@mui/x-date-pickers/internals/demo';
import { NumberInput } from '@mui/base/Unstable_NumberInput/NumberInput';
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';
import { useFormikContext } from 'formik';

const Step2 = ({validationSchema}) => {

    const languages = [
        {
          code: 'en',
          value: 'English',
        },
        {
          code: 'es',
          value: 'Español',
        },
        {
          code: 'fr',
          value: 'Français',
        },
        {
          code: 'de',
          value: 'Deutsch',
        },
        {
          code: 'it',
          value: 'Italiano',
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
      
  const { errors, setFieldValue, touched, values } = useFormikContext(); // Access Formik context

  return (
        
        <div className='grid grid-cols-2  gap-4 p-3'>
        
        <TextField
          id="currency"
          select
          label="Invoice currency"
          defaultValue="EUR"
          required
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
        <DatePicker
        id='invoiceDate'
        value={values.invoiceDate}
        onChange={(date) => setFieldValue('invoiceDate', date)} // Manually set the field value
        error={touched.invoiceDate && Boolean(errors.invoiceDate)} // Use Formik's touched and errors properties
        helperText={touched.invoiceDate && errors.invoiceDate}  />
        </DemoItem>

        <DemoItem label="Service Rendered Date:" id='renderedDate'>
        <DatePicker 
        id='renderedDate'
        value={values.renderedDate}
        onChange={(date) => setFieldValue('renderedDate', date)} // Manually set the field value
        error={touched.renderedDate && Boolean(errors.renderedDate)} // Use Formik's touched and errors properties
        helperText={touched.renderedDate && errors.renderedDate} // Show error message if touched and error exists
        />
        </DemoItem>

          <InputField
            id="amount"
            name="amount"
            label="Amount"
          />        

        <TextField
          id="language"
          select
          defaultValue="en"
          label="Language"
        //   helperText="Please select your currency"
        >
          {languages.map((option) => (
            <MenuItem key={option.code} value={option.code}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

       

        </div>
       
  )
}

export default Step2;
