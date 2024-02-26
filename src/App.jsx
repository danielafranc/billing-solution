import Step2 from './pages/Step2.jsx'
import Step3 from './pages/Step3.jsx'
import Step4 from './pages/Step4.jsx'
import Step5 from './pages/Step5.jsx'
import Step6 from './pages/Step6.jsx'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MultiStepForm, { FormStep } from './MultiStepForm.jsx';
import * as Yup from 'yup';
import { Box, Step, StepLabel, Stepper, TextField } from '@mui/material';
import StepLayout from './layout/StepLayout.jsx';
import { StepTwoValidation, contractValidationSchema, stepFiveValidation, stepFourValidation, stepThreeValidation } from './validation/validationSchema.js';
import useStore from './store/store'
import Step7 from './pages/Step7.jsx'


const validationSchema = Yup.object({
      
  contractNumber: Yup.number().required('Required'),
  contractName: Yup.string().required('Required'),
  dateField: Yup.date().max(new Date()),
  clientNumber: Yup.string().required('Please enter a client number'),
  // salesOrg: Yup.string().required('Please enter the sales org')
  
});

function App() {
  
  const { activeStep } = useStore();

  return (
    <div className='App bg-slate-50'>
  
    <LocalizationProvider dateAdapter={AdapterDayjs}>
 
    <NavBar/>
   
     <StepLayout 
      initialValues={{
      contractNumber: '',
      contractName: '',
      dateField: '',
      clientNumber: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        console.log('values', values);
      }}
      >


     <FormStep stepName='Step 1' onSubmit={() => console.log('Step')} >
          <HomePage/>
     </FormStep>

     <FormStep stepName='Step 2' onSubmit={() => console.log('Step')} >
          <Step2/>
     </FormStep>

     <FormStep stepName='Step 3' onSubmit={() => console.log('Step')}  >
          <Step3/>
     </FormStep>

     <FormStep stepName='Step 4' onSubmit={() => console.log('Step')} >
          <Step4/>
     </FormStep>

     <FormStep stepName='Step 5' onSubmit={() => console.log('Step')} >
          <Step5/>
     </FormStep>

     <FormStep stepName='Step 6' onSubmit={() => console.log('Step')} >
          <Step6/>
     </FormStep>
     
     <FormStep stepName='Step 7' onSubmit={() => console.log('Step')} >
          <Step7/>
     </FormStep>

      </StepLayout>
         </LocalizationProvider>
    </div>
  )
}

export default App
