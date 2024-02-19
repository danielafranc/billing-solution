import React, {useState} from 'react';
import StepLayout from '../layout/StepLayout';
import DropDownComponent from '../components/SelectTextFields'
import SelectTextFields from '../components/SelectTextFields'
import InputField from '../InputField';
import useStore from '../store/store';
import { useFormik } from 'formik';
import { Autocomplete, Box, FormControl, TextField } from '@mui/material';

const Step6 = () => {

  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
      code: 'AU',
      label: 'Australia',
      phone: '61',
      suggested: true,
    }];

    const options = ['Yes', 'No'];
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');

  return (
   
     <div className='grid grid-cols-2 gap-4 p-4'>

        <InputField name='Ship to Party:' label='Ship to Party:'/>
        <InputField name='addressNumber' label='Ship to Party: Address Number'/>
        <InputField name='location' label='Ship to Party: Country/Location'/>
        <InputField name='contactPerson' label='Bill to Party: Department/Contact Person'/>
        <InputField name='clientName' label='Bill to Party: Client name'/>
        <InputField name='billToPartyClientName' label='Bill to Party: Client name'/>
        <InputField name='billToPartyClientName' label='Bill to Party: Client name'/>
        <InputField name='streetAddress' label='Ship to Party: Street Address'/>
        <InputField name='postalCode' label='Ship to Party: Postal Code(ZIP)'/>
        <InputField name='billToPartyStreetAddress' label='Bill to party: Street Address'/>
        <InputField name='city' label='Bill to Party: City'/>
        <InputField name='billToPartyPostalCode' label='Bill to Party: Postal Code (ZIP)'/>
        <InputField name='billToPartyLocation' label='Bill to Party: Country/Location'/>
{/* 
          <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Ship to party:'
        />

        <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Ship to party: Address number'

        />

      <Autocomplete
      id="country-select-demo"
      // sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
        sx={{  backgroundColor: '#F8FAFC'}}
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />  

        <TextField
        id="outlined-multiline-static"
        size="small"
        className="bg-[#F8FAFC] border border-slate-50"
        label='Bill to party: Department/Contact Person'

      />
      <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Bill to party: client name'

        />
      <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Bill to party: client name'/>
        
        <TextField
        id="outlined-multiline-static"
        size="small"
        className="bg-[#F8FAFC] border border-slate-50"
        label='Bill to party: client name'/>

      <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Ship to party: street address' />

        <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Ship to party: city'

        />

        <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Ship to party: postal code (ZIP)'

        />
          <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Bill to party: street address'

        />
          <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Bill to party: city'

        />
          <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Bill to party: postal code (ZIP)'

        />
<Autocomplete
      id="country-select-demo"
      // sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
        sx={{  backgroundColor: '#F8FAFC'}}
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />  

          <TextField
          id="outlined-multiline-static"
          size="small"
          className="bg-[#F8FAFC] border border-slate-50"
          label='Should billing team deliver invoice?'

        />

     
       <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{  backgroundColor: '#F8FAFC'}}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={options}
      
      renderInput={(params) => <TextField    {...params}  label='Should billing team deliver invoice?' sx={{  backgroundColor: '#F8FAFC'}} />}
    />
         */}

      </div>
      )
    }
    

        
         
       
        
      
    
  
export default Step6