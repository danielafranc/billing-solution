import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import StepLayout from '../layout/StepLayout';
import { Button, FormControl, FormLabel, InputLabel, TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DateField } from '@mui/x-date-pickers'
import useForm from '../hooks/useForm';

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
    {/* <form onSubmit={formik.handleSubmit}> */}
    <StepLayout>
       <Formik
       initialValues={{
        contractNumber: '',
        contractName: '',
        dateField: ' ',
        clientNumber: '',
        salesOrg: ''
      }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}>
          
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
               <TextField
           fullWidth
           id="contractNumber"
           name="contractNumber"
           sx={{ marginBottom: '12px' }}
           label="Contract number"
          value={formik.values.contractNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.contractNumber && Boolean(formik.errors.contractNumber)}
          helperText={formik.touched.contractNumber && formik.errors.contractNumber}
         />

         <TextField
           id="contractName"
           name="contractName"
           fullWidth
           sx={{ marginBottom: '12px' }}
           label="Contract name"
           value={formik.values.contractName}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           error={formik.touched.contractName && Boolean(formik.errors.contractName)}
           helperText={formik.touched.contractName && formik.errors.contractName}/>

        <DateField
          fullWidth
          id='dateField'
          sx={{ marginBottom: '12px' }}
          name='dateField'
          value={formik.values.dateField}
          label="Contract end date"
          onChange={(date) => formik.setFieldValue('dateField', date)}
          onBlur={formik.handleBlur}
          error={formik.touched.dateField && Boolean(formik.errors.dateField)}
          helperText={formik.touched.dateField && formik.errors.dateField}
        />

         <TextField
         id="clientNumber"
         name="clientNumber"
         fullWidth
         sx={{marginBottom: '12px'}} 
         value={formik.values.clientNumber}
         label="Client number" 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         error={formik.touched.clientNumber && Boolean(formik.errors.clientNumber)}
         helperText={formik.touched.clientNumber && formik.errors.clientNumber}/>

       <TextField
         id="salesOrg"
         name="salesOrg"
         fullWidth
         sx={{marginBottom: '12px'}} 
         value={formik.values.salesOrg}
         label="Sales Org" 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         error={formik.touched.salesOrg && Boolean(formik.errors.salesOrg)}
         helperText={formik.touched.salesOrg && formik.errors.salesOrg}/>
          {/* </div> */}

              <Button type="submit" color='primary'>Submit</Button>
            </form>
          )}
         
       
       </Formik>
      
   </StepLayout>
    {/* </form> */}
   
    </>
   
    
  )
  

}

export default HomePage