import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Step2 from './pages/Step2.jsx'
import Step3 from './pages/Step3.jsx'
import Step4 from './pages/Step4.jsx'
import Step5 from './pages/Step5.jsx'
import Step6 from './pages/Step6.jsx'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import useStore from './store/store.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function App() {
  const { activeStep, setActiveStep, handleBack } = useStore();
 


  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <main className='App'>
    <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/step1' element={<HomePage/>} />
        <Route path='/step2' element={<Step2/>} />
        <Route path='/step3' element={<Step3/>} />
        <Route path='/step4' element={<Step4/>} />
        <Route path='/step5' element={<Step5/>} />
        <Route path='/step6' element={<Step6/>} />
      </Routes>
    </main> 
    </LocalizationProvider>
    </>
  )
}

export default App
