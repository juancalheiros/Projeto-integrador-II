import React from 'react'
import { connect } from 'react-redux'

const ConfirmationData = props => {
    const {
      cvv,
      date,
      creditCardNumber,
    } = props

    const expirationDate = () => {
        const dataSlipt = date.split("")
        dataSlipt.splice(2,0,'/')
        
        return dataSlipt.join("")
    }

    return (
      <div>
        <p>Number Credit Card : {creditCardNumber}</p>
        <p>CVV: {cvv}</p>
        <p>Expirate Date: {expirationDate()}</p>
      </div>
    )
}

const mapStateToProps = store => ({
  creditCardNumber: store.clickState.creditCardNumber,
  cvv: store.clickState.cvv,
  date: store.clickState.expirationDate,
})


export default connect(mapStateToProps)(ConfirmationData)