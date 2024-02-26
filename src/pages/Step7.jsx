import React from 'react'
import InputField from '../InputField'
import { InputAdornment, MenuItem, TextField, TextareaAutosize } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const Step7 = () => {
  const options = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ] 
  return (
    <div>
        <div className='grid grid-cols-2 gap-2'>
        <div>
        <InputField
       id="layout"
       name="layout"
       sx={{ marginBottom: '12px' }}
       label="Layout"
        />
       <TextField
        id="outlined-select-yesno"
        select
        fullWidth
        sx={{ marginBottom: '12px' }}
        helperText="Would you like to enabe the invoice Watchdog to track when the invoice gets paid?"
        defaultValue="yes"
        // helperText="Please select Yes or No"
        >
        {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
            </MenuItem>
        ))}
        </TextField>

        </div>
        <div>

        <InputField
       id="search"
       name="Search"
       sx={{ marginBottom: '12px' }}
       label="Search"
       InputProps={{
        endAdornment: <SearchIcon/>
      }}

        />

        <InputField
       id="search2"
       name="Search2"
       sx={{ marginBottom: '12px' }}
       label="Search"
       InputProps={{
        endAdornment: <SearchIcon/>
      }}
        />

        </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
        <TextareaAutosize
        placeholder='Additional internal approver ID'
        className="w-full text-sm mb-3 font-normal leading-normal p-4 rounded-[5px]  focus:shadow-outline-purple  focus:shadow-lg border  border-gray-300 hover:border-purple-500   bg-white  text-slate-900  box-border"
        aria-label="empty textarea" />

        <TextareaAutosize
        placeholder='Additional internal reviewer ID'
        className="w-full text-sm mb-3 font-normal leading-normal p-4 rounded-[5px]  focus:shadow-outline-purple  focus:shadow-lg  border border-gray-300 focus:border-blue-600 hover:border-purple-500 bg-white  box-border"
        aria-label="empty textarea" />
        </div>
    </div>
  )
}

export default Step7