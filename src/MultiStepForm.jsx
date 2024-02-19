import React, {useState} from 'react';
import { Form, Formik } from 'formik';
import FormNavigation from './FormNavigation';

const MultiStepForm = ({children, initialValues, onSubmit}) => {

    const [stepNumber, setstepNumber] = useState(0);
    const [snapshot, setSnapshot] = useState(initialValues);
    const steps = React.Children.toArray(children);

    const step = steps[stepNumber];
    const totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;

    const nexStep = (values) => {
    setSnapshot(values);
    setstepNumber(stepNumber + 1)
    };

    const previousStep = (values) => {
        setSnapshot(values);
        setstepNumber(stepNumber - 1)
    };

    const handleSubmit = async(values, actions) => {
        if (step.props.onSubmit){
            await step.props.onSubmit(values)
        };
        if(isLastStep){
            return onSubmit(values, actions);
        } else {
            actions.setTouched({});
            nexStep(values)
        }
    };


  return (
    <div>
        <Formik 
        initialValues={snapshot} 
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
        > 
        {(formik) => (
        <Form>
            {step}
            <FormNavigation 
            isLastStep={isLastStep}  
            hasPrevious={stepNumber > 0}
            onBackClick={() => previousStep(formik.values)} 
             />
        </Form>  )} 
        </Formik>
    </div>
  )
}

export default MultiStepForm;

export const FormStep = ({stepName = '', children, validationSchema = {} }) => children;