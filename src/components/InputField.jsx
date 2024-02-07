import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const InputField = ( { name } ) => {
    return(
        <Box
      component="form"
      // sx={{
      //   '& .MuiTextField-root': {width: '90%'},
      // }}
      noValidate
      autoComplete="off"
      className="mb-2"
    >

       {/* <TextField 
       id="outlined-multiline-static" 
       label={name} 
    //    placeholder={name}
       type="search" 
       size="small"
       multiline
        /> */}
        {/* <label> 
        {name} <TextField
          id="outlined-multiline-static"
          size="small"
          className='bg-[#F8FAFC] border border-slate-50'/>
        </label> */}
         <div className="flex flex-col">
        <label className="mb-1.5 font-semibold text-md text-slate-800">{name}</label>
        <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
        />
      </div>

        </Box>
    )
}

export default InputField