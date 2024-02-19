import React from 'react'
import SAPLOGO from '../assets/SAPLOGO.png'
import { Link } from 'react-router-dom';
import HorizontalLinearStepper from '../components/Stepper';
import { Divider } from '@mui/material';
const NavBar = () => {
  return (
    <>

        <div className="navbar bg-base-100 shadow-sm m-1 ">
        <div className="flex-none">
        <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        </div>
        <div className="flex-1">
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <img className='w-14 h-8 ml-4' src={SAPLOGO} alt="" />
        </div>
        <div className="flex-none">
        <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
        </div>
    </div>
    {/* <div className='w-full shadow-sm bg-base-100 my-4 pb-3'> */}




        {/* <ul className="steps w-full text-sm font-Jakarta items-center">
        <Link to='/' className='step step-primary'>Step 1</Link>
        <Link to='/step2' className='step step-primary'>Step 2</Link>
        <Link to='/step3' className='step step-primary'>Step 3</Link>
        <Link to='/step4' className='step'>Step 4</Link>
        <Link to='/step5' className='step'>Step 5</Link>
        <Link to='/step6' className='step'>Step 6</Link>
        </ul> */}
        {/* </div> */}
 
   
  </>
  )
}

export default NavBar