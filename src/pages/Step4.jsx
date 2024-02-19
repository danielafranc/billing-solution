import React from 'react'
import StepLayout from '../layout/StepLayout';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import EmptyTextarea from '../components/EmptyTextarea';
import { FormControl, Input, InputLabel, TextField } from '@mui/material';
import InputField from '../InputField';

 const Step4 = () => {
  return (
  
        <div className='grid grid-cols-2  gap-4 p-3'>
          <InputField
           id="totalFees"
           name="totalFees"
           sx={{ marginBottom: '12px' }}
          label='Total Fees Before Taxes:' /> 

          <InputField
           id="totalExpenses"
           name="totalExpenses"
           sx={{ marginBottom: '12px' }}
          label='Total expenses before taxes:' />

          <InputField
          id="total"
          name="total"
          sx={{ marginBottom: '12px' }}
          label='Total'/>

         <InputField
          id="taxOnFees"
          name="taxOnFees"
          sx={{ marginBottom: '12px' }}
          label='Tax on fees' />

        <InputField
          id="taxOnExpenses"
          name="taxOnExpenses"
          sx={{ marginBottom: '12px' }}
          label='Tax on expenses:'/>
            <br />
            <EmptyTextarea />
        </div>
         )
        }

       
 
export default Step4