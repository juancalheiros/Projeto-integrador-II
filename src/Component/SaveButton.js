import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

import { creditCardNumber, cvv, expirateDate } from '../actions'


const SaveButton = props => {
    const {
      date,
      dispatch,
      className,
      creditCard,
      fieldError,
      cardVerificationValue,
      handleSetShowSaveButton,
      handleShowConfirmationData,
    } = props
    

    const handleClick = () => {
      dispatch(creditCardNumber(creditCard))
      dispatch(cvv(cardVerificationValue))
      dispatch(expirateDate(date))
      
      handleSetShowSaveButton(false)
      handleShowConfirmationData(true)
    }
    

    return (
        <Button
          size="small"
          color="primary"
          variant="contained"
          className={className}
          onClick={handleClick}   
          disabled={!fieldError}
          startIcon={<SaveIcon />}
        >
            Save
      </Button>
    )
}


const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({dispatch})


export default connect(mapStateToProps, mapDispatchToProps)(SaveButton)

SaveButton.propTypes = {
  date:  PropTypes.string.isRequired,
  dispatch:  PropTypes.func.isRequired,
  className:  PropTypes.string.isRequired,
  creditCard:  PropTypes.string.isRequired,
  fieldError:  PropTypes.bool.isRequired,
  cardVerificationValue:  PropTypes.string.isRequired,
  handleSetShowSaveButton:  PropTypes.func.isRequired,
  handleShowConfirmationData:  PropTypes.func.isRequired,
}