import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import StepLayout from '../layout/StepLayout';
import { Button, FormControl, FormLabel, InputLabel, TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DateField } from '@mui/x-date-pickers'
import useForm from '../hooks/useForm';
import InputField from '../InputField';

const validationSchema = Yup.object({
      
    contractNumber: Yup.number().min(10).required('Required'),
    contractName: Yup.string().required('Required'),
    dateField: Yup.date().max(new Date()),
    clientNumber: Yup.string().required('Please enter a client number'),
    salesOrg: Yup.string().required('Please enter the sales org')
    
    // ... other validation rules for email, acceptedTerms, and jobType
  });
  

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
     {/* <InputField 
   id='endDate'
   sx={{ marginBottom: '12px' }}
   name='dateField'
   label="Contract end date"
    /> */}
        <DateField
          fullWidth
          id='dateField'
          sx={{ marginBottom: '12px' }}
          name='dateField'
          label="Contract end date"
          // onChange={(date) => formik.setFieldValue('dateField', date)}
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