import React from 'react'
import StepLayout from '../layout/StepLayout'
// import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <StepLayout>
        <form action="">
            <h1>HOME PAGE</h1>
        <div className='grid grid-cols-2  gap-2 p-3'>
        <label for="currency">
            <span>Invoice currency:</span>
            <input id="currency" type="number" name="currency" min="1" step="any" className='bg-[#F8FAFC] text-[#AEB3C3] p-2 box-border'placeholder='Invoice Currency' required/>
        </label>
        {/* PO# */}
        <label for="PO">
            <span>PO#:</span>
            <input id="PO" type="text" name="PO"  />
        </label>
        {/* Invoice Date */}
        <label for="invoice-date">
            <span>Invoice Date:</span>
            <input id="invoice-date" type="date" name="invoice-date" />
        </label>
        {/* Service Rendered Date */}
        <label for="rendered-date">
            <span>Service Rendered Date:</span>
            <input id="rendered-date" type="date" name="rendered-date" />
        </label>
        {/* Display Quantity */}
        <label for="display-quantity">
            <span>Display Quantity:</span>
            <input id="display-quantity" type="number" name="display-quantity"  min="1" step="any"/>
        </label>
        {/* Language */}
        <label for="language">
            <span>Language:</span>
            <input id="language" type="text" name="language" />
        </label>
            </div>
        </form>
    </StepLayout>
    
  )
}

export default HomePage