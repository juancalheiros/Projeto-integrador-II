import React , { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

import  CreditCardNumberFormat  from './CreditCardNumberFormat'
import { numberCreditCardIsValid } from './ValidateCreditCardNumber'


const CreditCardNumber = props => {
  const {
    className,
    handleCreditCardNumber,
    handleCanHaveErrorCreditCard,
  } = props

  const [value, setValue] = useState(null)
  const [isValidNumber,setIsValidNumber] = useState(true)
  const [menssage, setMenssage] = useState(undefined)


  const handleChange = event => {
    const { value } = event.target
    
    if(isInitialState(value)) clearValues()
    else {
      const valueIsValid = numberCreditCardIsValid(value)
      const respMenssage = valueIsValid ? "" : "Number credit card invalid"
  
      setUpdates(value,valueIsValid,respMenssage)
    }
    
  }  

  const setUpdates = (value,isValidNumber,menssage) => {
    setValue(value)
    setMenssage(menssage)
    setIsValidNumber(isValidNumber)

    handleCreditCardNumber(value)
    handleCanHaveErrorCreditCard(isValidNumber)
  }

  const clearValues = () => {
    setValue(null)
    setIsValidNumber(true)
    setMenssage(undefined)
  }

  const isInitialState = value => value === null || value === '' 


  return (
    <TextField
      color="primary"
      variant="outlined"
      name="numberformat"
      id="number-credit-card"
      label="Number your credit card"
      value={value}
      helperText={menssage}
      error={!isValidNumber}
      className = {className}
      onChange={handleChange}
      InputProps={{
        inputComponent: CreditCardNumberFormat,
      }}
    />
  )
}


export default CreditCardNumber

CreditCardNumber.propTypes = { 
  className: PropTypes.object.isRequired,
  handleCreditCardNumber: PropTypes.func.isRequired, 
  handleCanHaveErrorCreditCard: PropTypes.func.isRequired,
}