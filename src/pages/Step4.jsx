import React from 'react'
import StepLayout from '../layout/StepLayout';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import EmptyTextarea from '../components/EmptyTextarea';
import { FormControl, Input, InputLabel, TextField } from '@mui/material';
import InputField from '../InputField';

 const Step4 = () => {
  return (
  
        <div className='grid grid-cols-2  gap-4'>
          <div>
            <InputField
           id="totalFees"
           name="totalFees"
           sx={{ mb: '12px' }}
          label='Total Fees Before Taxes' /> 

            <InputField
          id="total"
          name="total"
           sx={{ mb: '12px' }}
          label='Total'/>

          <InputField
          id="taxOnExpenses"
          name="taxOnExpenses"
           sx={{ mb: '12px' }}
          label='Tax on expenses'/>
          </div>

          <div>
          <InputField
           id="totalExpenses"
           name="totalExpenses"
            sx={{ mb: '12px' }}
          label='Total expenses before taxes:' />

        
         <InputField
          id="taxOnFees"
          name="taxOnFees"
           sx={{ mb: '12px' }}
          label='Tax on fees' />

          <TextareaAutosize
        placeholder='Comments'
        className="w-full text-sm mb-3 font-normal leading-normal p-4 rounded-[5px]  focus:shadow-outline-purple  focus:shadow-lg  border border-gray-300 focus:border-blue-600 hover:border-purple-500 bg-white  box-border"
        name="Comments" />
          </div>
        </div>
         )
        }

       
 
export default Step4