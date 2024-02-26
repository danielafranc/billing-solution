import * as Yup from 'yup';



export const contractValidationSchema = Yup.object({
    contractNumber: Yup.number().required('Required'),
    contractName: Yup.string().required('Required'),
    dateField: Yup.date().max(new Date()),
    clientNumber: Yup.string().required('Please enter a client number'),
    // Define other fields validations for contract form
  });

  const currencies = [
    { value: 'USD', label: '$' },
    { value: 'EUR', label: '€' },
    { value: 'BTC', label: '฿' },
    { value: 'JPY', label: '¥' },
  ];
  const languages = [
    {code: 'en', label: 'English'},
    {code: 'es', label: 'Español'},
    {code: 'fr', label: 'Français'},
    {code: 'de', label: 'Deutsch'},
    {code: 'it', label: 'Italiano'},
  ];
  

  export const StepTwoValidation = Yup.object().shape({
    // currency: Yup.string().required('Invoice currency is required').oneOf(
    //     currencies.map(option => option.value),
    //     'Invalid currency selected' ),  
  PO: Yup.string().required('PO is required'),
  invoiceDate: Yup.date().required('Required'),
  renderedDate: Yup.date().required('Required'),
  amount: Yup.number().required('Amount is required').min(0, 'Amount must be greater than or equal to 0'),

  // language: Yup.string().required()
    //  currency: Yup.string().oneOf(currencies.map(option => option.value))
    //  .required('Currency amount is required'),
    //  PO: Yup.string().required('PO is required'),
    // InvoiceDate: Yup.date().max(new Date()),
    //     renderedDate: Yup.date().max(new Date()),
    // amount: Yup.number().required('The amount is required'),
    // language: Yup.string().required('Language is required'),

  })

  export const stepThreeValidation = Yup.object().shape({
    quantity: Yup.number().required('Required'),
    amount: Yup.number().required('Required'),
    tax: Yup.number().required('Required'),
    materialSales: Yup.number().required('Required'),

  });

  export const stepFourValidation = Yup.object().shape({
    totalFees: Yup.number().required('Required'),
    totalExpenses: Yup.number().required('Required'),
    total: Yup.number().required('Required'),
    taxOnFees: Yup.number().required('Required'),
    taxOnExpenses: Yup.number().required('Required'),
    // wbseData: Yup.string().oneOf(['WBSE 001', 'WBSE 002', 'WBSE 003', 'WBSE 004', 'WBSE 005'], 'hola').required('Required'),

  })

  export const stepFiveValidation = Yup.object().shape({
    valueDate: Yup.date().required('Required'),
    fixedDate: Yup.date().required('Required'),
    custumerInfo: Yup.string().required('Required'),
    companyInfo: Yup.string().required('Required'),

  })