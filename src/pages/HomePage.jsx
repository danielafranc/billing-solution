import React from 'react';
import { DateField } from '@mui/x-date-pickers'
import InputField from '../InputField';
  
const HomePage = () => {


      return (
    <>
    <InputField 
    id="contractNumber"
    name="contractNumber"
    sx={{ marginBottom: '12px' }}
    label="Contract number"
    />
   
   <InputField 
    id="contractName"
    name="contractName"
    sx={{ marginBottom: '12px' }}
    label="Contract name"
    />

    <DateField
    fullWidth
    id='dateField'
    sx={{ marginBottom: '12px' }}
    name='dateField'
    label="Contract end date"
        />
     <InputField 
     id="clientNumber"
     name="clientNumber"
     sx={{marginBottom: '12px'}} 
     label="Client number" />
    
    </>
   
    
  )
  

}

export default HomePage