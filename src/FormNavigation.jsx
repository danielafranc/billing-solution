import { Button } from '@mui/material';
import React from 'react'


const FormNavigation = ({ hasPrevious, onBackClick, isLastStep }) => {
  return (
    <div className='flex justify-between'>
        { hasPrevious && (
    <Button variant='contained' onClick={onBackClick}> Back </Button>
    )}
    
    <Button type='submit' color='primary' variant='contained'> {isLastStep ? 'Submit' : 'Next' } </Button>
    </div>
  )
}
 
export default FormNavigation