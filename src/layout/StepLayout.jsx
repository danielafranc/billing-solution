import React, { useEffect } from 'react'
import useStore from '../store/store';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const StepLayout = ({children}) => {
  const { activeStep, setActiveStep, handleBack } = useStore();

  const navigate = useNavigate();

//  const handleNext = () => {
//   setActiveStep();
//  if(activeStep <= 1 ){
//   navigate('/');
//  }
//  else{

//   navigate(`/step${activeStep}`);
//  }
  
//  console.log(activeStep, ` kkkkk`)
//   // navigate(`/step`);
//  }

const handleNext = () => {
  setActiveStep();
  navigate(`/step${activeStep}`);

}

 const goBack = () => {
    handleBack(); 
    let stepBack =  activeStep - 1;
    navigate(`/step${stepBack}`)
   
  
 }


//  useEffect(() => {
//   navigate(`/step + 1`);
//  }, [activeStep])

  return (
    <div className=" border mt-9 w-[95%] m-auto h-auto rounded-lg bg-white">
        <h1 className='border-b border-stroke bg-[#F8F8F8] font-medium tex-sm py-2 pl-3 rounded-t-lg'>Step {activeStep - 1}</h1>
        <div className='p-5'>
        {children}
        </div>
        <Stack direction="row" spacing={2} className='justify-between m-4'>

        <Button 
        disabled={activeStep === 1 || activeStep === 6}
        variant="contained"
        startIcon={<KeyboardArrowLeftIcon />}
        onClick={goBack}>Back
        </Button>
        
        <Button 
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        onClick={handleNext}>Next</Button>
        </Stack>
        </div>
  )
}

export default StepLayout