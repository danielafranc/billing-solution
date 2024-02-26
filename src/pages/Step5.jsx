import React, { useEffect } from 'react'
import StepLayout from '../layout/StepLayout'
import EmptyTextarea from '../components/EmptyTextarea'
import { Autocomplete, FormControl, TextField, TextareaAutosize } from '@mui/material'
import InputField from '../InputField'
import { DatePicker } from '@mui/x-date-pickers'
import { useFormikContext } from 'formik'

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
  
  const { errors, setFieldValue, touched, values } = useFormikContext(); // Access Formik context

  console.log({values});

  console.log('hello')
  return (
    
      <div className=' grid grid-cols-2 gap-4'>
        <div>
        <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={paymentTerms}
        sx={{ marginBottom: '12px' }}

        renderInput={(params) => <TextField {...params} label="Payment terms" />}

        />
         <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={paymentMethods}
        sx={{ marginBottom: '12px' }}
        renderInput={(params) => <TextField {...params} label="Payment methods" />}

        />
        
        {/* <DatePicker  label='Add value date' name='valueDate' id='valueDate' />
        <DatePicker label='Fixed value date' name='fixedDate' id='fixedDate' /> */}

      <DatePicker
        sx={{ marginBottom: '12px', width: '100%' }}
        label='Add value date'
        name='valueDate'
        id='valueDate'
        value={values.valueDate}
        onChange={(date) => setFieldValue('valueDate', date)} // Manually set the field value
        error={touched.valueDate && Boolean(errors.valueDate)} // Use Formik's touched and errors properties
        helperText={touched.valueDate && errors.valueDate} // Show error message if touched and error exists
      />
      <DatePicker
        sx={{ marginBottom: '12px', width: '100%' }}
        label='Fixed value date'
        name='fixedDate'
        id='fixedDate'
        value={values.fixedDate}
        onChange={(date) => setFieldValue('fixedDate', date)} // Manually set the field value
        error={touched.fixedDate && Boolean(errors.fixedDate)} // Use Formik's touched and errors properties
        helperText={touched.fixedDate && errors.fixedDate} // Show error message if touched and error exists
      />
        </div>

        <div>
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
        
        
        

        <TextareaAutosize
        placeholder='Form header'
        className="w-full text-sm mb-3 font-normal leading-normal p-4 rounded-[5px]  focus:shadow-outline-purple  focus:shadow-lg  border border-gray-300 focus:border-blue-600 hover:border-purple-500 bg-white  box-border"/>        
        
        <TextareaAutosize
        placeholder='Aditional note 1'
        className="w-full text-sm mb-3 font-normal leading-normal p-4 rounded-[5px]  focus:shadow-outline-purple  focus:shadow-lg  border border-gray-300 focus:border-blue-600 hover:border-purple-500 bg-white  box-border" />

        <TextareaAutosize
        placeholder='Aditional note 2'
        className="w-full text-sm mb-3 font-normal leading-normal p-4 rounded-[5px]  focus:shadow-outline-purple  focus:shadow-lg  border border-gray-300 focus:border-blue-600 hover:border-purple-500 bg-white  box-border" />
        </div>
       
       
      


      </div>
  )
}

export default Step5