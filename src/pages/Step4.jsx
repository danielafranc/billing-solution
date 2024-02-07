import React from 'react'
import StepLayout from '../layout/StepLayout';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import EmptyTextarea from '../components/EmptyTextarea';
import { FormControl, Input, InputLabel, TextField } from '@mui/material';
import InputField from '../components/InputField';

 const Step4 = () => {
  return (
    <StepLayout>
        <FormControl fullWidth >
        <div className='grid grid-cols-2  gap-4 p-3'>
        <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Total Fees Before Taxes:' />

          <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Total expenses before taxes:' />

          <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Total'/>

          <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Tax on fees' />

          <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Tax on expenses:'/>
            <br />
            <EmptyTextarea />
        </div>

        </FormControl>
        {/* <form action="">
        <div className='grid grid-cols-2  gap-2 p-3'> */}
            {/* Total fees Before Taxes */}
        {/* <label for="total-before-taxes">
            <span>Total Fees Before Taxes :</span>
            <input id="total-before-taxes" type="number" name="total-before-taxes" min="1" step="any" className='bg-[#F8FAFC] text-[#AEB3C3] p-2 box-border' required/>
        </label> */}
        {/* Total Expenses Before Taxes */}
        {/* <label for="expenses-before-taxes">
            <span>Total Expenses Before Taxes:</span>
            <input id="total-fees-before-taxes" type="number" name="total-fees-before-taxes" min="1" step="any" className='bg-[#F8FAFC] text-[#AEB3C3] p-2 box-border' required/>
        </label> */}
        {/* Total */}
        {/* <label for="total">
            <span>Total:</span>
            <input id="total" type="number" name="invoice-date" min="1" step="any"/>
        </label> */}
        {/* Tax on fees */}
        {/* <label for="tax-on-fees">
            <span>Tax on fees:</span>
            <input id="tax-on-fees" type="number" name="tax-on-fees"  min="1" step="any" />
        </label> */}
        {/* Tax on expenses */}
        {/* <label for="tax-on-expenses">
            <span>Tax on expenses:</span>
            <input id="tax-on-expenses" type="number" name="tax-on-expenses"  min="1" step="any" />
        </label>  */}
        {/* Comments TEXTAREA*/}
        
            {/* </div> */}
        {/* </form> */}
    </StepLayout>
  )
}
export default Step4