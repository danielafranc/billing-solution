import React from 'react';
import StepLayout from '../layout/StepLayout';
import  Table  from '../components/Table';
import { MenuItem, TextField, Typography } from '@mui/material';
import InputField from '../InputField';
import SelectOption from '../components/selectOption';

const Step3 = () => {
  const languages = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'it', label: 'Italiano' }
  ];

  const projectProfiles = [
    { code: 'P001', label: 'Website Redesign Project' },
    { code: 'P002', label: 'Product Development Initiative' },
    { code: 'P003', label: 'Marketing Campaign Launch' },
    { code: 'P004', label: 'Supply Chain Optimization Project' },
    { code: 'P005', label: 'New Office Construction' }
  ];
  

  const lineItemCodes = [
    { label: 'STEEL001', code: 'Steel Sheet' },
    { label: 'ALUM001', code: 'Aluminum Plate' },
    { label: 'COPPER001', code: 'Copper Wire' },
    { label: 'PLASTIC001', code: 'Plastic Pellets' },
    { label: 'GLASS001', code: 'Glass Panels' }
  ];

  const wbseData = [
    { code: 'WBSE001', label: 'WBSE 001' },
    { code: 'WBSE002', label: 'WBSE 002' },
    { code: 'WBSE003', label: 'WBSE 003' },
    { code: 'WBSE004', label: 'WBSE 004' },
    { code: 'WBSE005', label: 'WBSE 005' }
  ];
  
  const materialCodes = [
    { code: 'MC001', label: 'Steel Sheet' },
    { code: 'MC002', label: 'Aluminum Plate' },
    { code: 'MC003', label: 'Copper Wire' },
    { code: 'MC004', label: 'Plastic Pellets' },
    { code: 'MC005', label: 'Glass Panels' }
  ];
  
  
  
  return (
 
    <>
    <Typography sx={{pl: 1.5}}>WBSE number</Typography>
    <div className='grid grid-cols-4  gap-4 p-3'>
      
      <div className='col-span-2'>
      <TextField
          fullWidth
          sx={{mb: 2}}
          id="wbseData"
          name="wbseData"
          select
          // label="Language"
        //   helperText="Please select your currency"
        >
          {wbseData.map((option) => (
            <MenuItem key={option.code} value={option.code}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          sx={{mb: 2}}
          id="projectProfiles"
          select
          label="Project profile"
        //   helperText="Please select your currency"
        >
          {projectProfiles.map((option) => (
            <MenuItem key={option.code} value={option.code}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          sx={{mb: 2}}
          id="lineItemCodes"
          select
          label="Material code datails - Line item"
        //   helperText="Please select your currency"
        >
          {lineItemCodes.map((option) => (
            <MenuItem key={option.code} value={option.code}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <InputField label='Material sales item text' name='materialSales' id='materialSales' />
      
      </div>

      <div>
      <InputField label='Quantity' name='quantity' sx={{mb: 2}} id='quantity' />
      <TextField
          fullWidth
          sx={{mb: 2}}
          id="materialCode"
          select
          label="Material Code"
        //   helperText="Please select your currency"
        >
          {materialCodes.map((option) => (
            <MenuItem key={option.code} value={option.code}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
   
      <div >      
      <InputField label='Amount' name='amount' sx={{mb: 2}} id='amount' />
      <InputField label='Tax' name='tax' sx={{mb: 2}} id='tax' />

      {/* <SelectOption
      id='jobType'
      label='job type'
      name='jobType'
      placeholder='Please select a job type'>
        <option value="software_engineer">Software Engineer</option>
        <option value="graphic_designer">Graphic Designer</option>
        <option value="marketing_manager">Marketing Manager</option>
        <option value="financial_analyst">Financial Analyst</option>
      </SelectOption> */}
      </div>
    </div>
   

    </>
   
  )
}

export default Step3