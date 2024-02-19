import React, { useEffect } from 'react'
import StepLayout from '../layout/StepLayout'
import EmptyTextarea from '../components/EmptyTextarea'
import { Autocomplete, FormControl, TextField } from '@mui/material'
import InputField from '../InputField'
import { DatePicker } from '@mui/x-date-pickers'

export const Step5 = () => {

  const paymentMethods = [
    { label: 'Credit Card' },
    { label: 'PayPal' },
    { label: 'Bitcoin' },
    { label: 'Apple Pay' },
    { label: 'Google Pay' },
  ];
  
  const paymentTerms = [
    { label: 'Net 15 Days' },
    { label: 'Net 30 Days' },
    { label: 'Net 45 Days' },
    { label: 'Due on Receipt' },
    { label: 'Installment Plan' },
  ];
  

  console.log('hello')
  return (
    
      <div className='grid grid-cols-2 gap-4 p-4'>
        <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={paymentTerms}
        
        renderInput={(params) => <TextField {...params} label="Payment terms" />}

        />
         <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={paymentMethods}
        renderInput={(params) => <TextField {...params} label="Payment methods" />}

        />
        
        <DatePicker  label='Add value date' />
        <DatePicker label='Fixed value date' />

       
       
        <InputField
          id="custumerInfo"
          name="custumerInfo"
          sx={{ marginBottom: '12px' }}
          label='Customer add info' />

        <InputField
          id="companyInfo"
          name="companyInfo"
          sx={{ marginBottom: '12px' }}
          label='Company add info' />
        
        
        

        <EmptyTextarea name='Form header'/>
        <EmptyTextarea name='Aditional note 1'/>
        <EmptyTextarea name='Aditional note 2'/>


      </div>
  )
}

export default Step5