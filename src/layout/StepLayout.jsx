import React, {useState, useEffect} from 'react';
import { Form, Formik } from 'formik';
import FormNavigation from '../FormNavigation';
import useStore from '../store/store';
import { Step, StepLabel, Stepper } from '@mui/material';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Slide from '@mui/material/Slide';

// export const calculateSteps = (children) => {
//   // Ensure children is iterable
//   if (!React.Children.count(children)) return [];
  
//   return React.Children.toArray(children);
// };
const StepLayout = ({children, initialValues, onSubmit, validationSchema, ...props}) => {

  const { activeStep, setActiveStep, handleBack } = useStore();

    const [stepNumber, setstepNumber] = useState(activeStep);
    const [snapshot, setSnapshot] = useState(initialValues);
    const steps = React.Children.toArray(children);
    const [submitted, setSubmitted] = useState(false);

    const currentChild = steps[stepNumber];
    const totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;

    const submissionDuration = 3000;
    const transitionDuration = 1000;

    const nexStep = (values) => {
    setSnapshot(values);
    setstepNumber(stepNumber + 1)
    console.log(values)

    };

    const previousStep = (values) => {
        setSnapshot(values);
        setstepNumber(stepNumber - 1)

    };

    const handleSubmit = async (values, actions) => {
        if (currentChild.props.onSubmit){
            await currentChild.props.onSubmit(values);
        };
        if(isLastStep){
            // onSubmit(values, actions);
            setSubmitted(true);

        } else {
            actions.setTouched({});
            nexStep(values)
        };

    };

    useEffect(() => {
      let timer;
      if (submitted) {
        timer = setTimeout(() => {
          setSubmitted(false); // Reset submitted state after 3 seconds
        }, 3000);
      }
      return () => clearTimeout(timer);
    }, [submitted, 3000]);


  return (
    <>
    <div className='mt-3 w-[95%] m-auto  shadow-lg h-16 rounded-xl  p-4  bg-white'>
    <Stepper activeStep={stepNumber} >
      {steps.map((currentStep) => {
      const label = currentStep.props.stepName;

      return (
      <Step key={label} >
      <StepLabel>{label}</StepLabel>
      </Step>
      );
      })}
</Stepper>

 </div>
    <div className=" border border-slate-100 shadow-md mt-3 w-[95%] m-auto h-auto rounded-lg bg-white">
        <h1 className='border-b border-stroke bg-primary font-medium py-2 pl-3 rounded-t-lg font-inherit text-white'>Step {stepNumber + 1}</h1>
        <div className='p-5'>
        
        <Formik 
        {...props}
        initialValues={snapshot} 
        onSubmit={handleSubmit}
        validationSchema={currentChild.props.validationSchema}
        >   
         {(formik) => (
        <Form>
            {currentChild} 
            <FormNavigation
            isLastStep={isLastStep}  
            hasPrevious={stepNumber > 0}
            onBackClick={() => previousStep(formik.values)} 
             />

            {
              submitted && (
          <Slide direction="up" in={submitted} mountOnEnter unmountOnExit timeout={transitionDuration}>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{mt: 2}}>
          The form was successfully submited. Thanks! 
        </Alert>
        </Slide>
              )
            }

        </Form>  )} 
        </Formik>
        </div>
        </div>
    </>
    
  )
}


export default StepLayout;
export const FormStep = ({children}) => children;