import React, { useEffect } from 'react'
import StepLayout from '../layout/StepLayout'
import EmptyTextarea from '../components/EmptyTextarea'
import { Autocomplete, FormControl, TextField } from '@mui/material'
import InputField from '../components/InputField'
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
    <StepLayout>
      <FormControl fullWidth >
      <div className='grid grid-cols-2 gap-4 p-4'>
        <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={paymentTerms}
        sx={{  backgroundColor: '#F8FAFC'}}
        renderInput={(params) => <TextField {...params} label="Payment terms" />}

        />
         <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={paymentMethods}
        sx={{ backgroundColor: '#F8FAFC' }}
        renderInput={(params) => <TextField {...params} label="Payment methods" />}

        />
        
        <DatePicker  label='Add value date' sx={{  backgroundColor: '#F8FAFC'}}/>
        <DatePicker label='Fixed value date' sx={{  backgroundColor: '#F8FAFC'}}/>

       
       
       <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Customer add info'

        />

        <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Company add info'

        />
        
        
        

        <EmptyTextarea name='Form header'/>
        <EmptyTextarea name='Aditional note 1'/>
        <EmptyTextarea name='Aditional note 2'/>


      </div>
      </FormControl>
      {/* <form action="">
      <div className='grid grid-cols-2 gap-4 p-4'>
        <label htmlFor="" className='mr-2'>
          Payment Terms:
         <input type="text" className='ml-2' />
        </label>
        <label htmlFor="">
          Payment Methods:
         <input type="text" />
        </label>
        <label htmlFor="">
          Add value days:
         <input type="date" />
        </label>
        <label htmlFor="">
          Fixed value date:
         <input placeholder='Enter Date' type='date'/>
        </label> */}
        {/* information component */}
        {/* <label htmlFor="">
          Form Header: 
          <EmptyTextarea/>
        </label>
        <label htmlFor="">
        Company Add1 info:
         <input type="text" />
        </label>
            
        <label htmlFor="">
          Aditional Note 1:
          <EmptyTextarea/>
        </label>
        <label htmlFor="">
          Customer Add'l Info
         <input type="text" />
        </label>

       </div> */}
      {/* </form> */}
     
      
    </StepLayout>
  )
}

export default Step5