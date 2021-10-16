import React,{ useState }  from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

import CVVFormat from './CVVFormat'


const CVV = props => {
  const { 
    className,
    handleCardVerifiCationValue, 
    handleCanHaveErrorCardVerificationValue, 
  } = props
  
  const [value,setValue] = useState(null)
  const [isValidNumber,setIsValidNumber] =useState(true)
  const [menssage,setMenssage] = useState(undefined)

  const handleChange = event => {
    const { value } = event.target
      
    if(isInitialState(value)) clearValues() 
    else {
      const RespMenssage = value.length === 3 ? '':'Quantity insufficient of number'
      const valueIsValid = RespMenssage === ''
      
      setUpdates(value, RespMenssage, valueIsValid)
    }

  }

  const isInitialState = value => value === null || value === '' 

  const clearValues = () => {
    setValue(null)
    setMenssage(undefined)
    setIsValidNumber(true)
  }

  const setUpdates = (value,RespMenssage,isValidNumber) => {
    setValue(value)
    setMenssage(RespMenssage)
    setIsValidNumber(isValidNumber)
    
    handleCardVerifiCationValue(value) 
    handleCanHaveErrorCardVerificationValue(isValidNumber)
  }

  return (
    <TextField
      name="cvv"
      label="CVV"
      color="primary"
      variant="outlined"
      id="cvv-number-credit-card"
      value={value}
      helperText={menssage}
      className={className}
      onChange={handleChange}
      error = {!isValidNumber}
      InputProps={{
        inputComponent: CVVFormat,
      }}
    />
  )
}


export default CVV

CVV.propTypes = { 
  className: PropTypes.object.isRequired,
  handleCardVerifiCationValue: PropTypes.func.isRequired, 
  handleCanHaveErrorCardVerificationValue: PropTypes.func.isRequired,
}