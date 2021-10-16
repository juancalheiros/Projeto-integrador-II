import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, 
  CardContent, 
  CardMedia, 
  makeStyles, 
  Typography 
} from '@material-ui/core'

import { 
  CVV,
  SaveButton,
  ExpirationDate,
  ConfirmationData,
  CreditCardNumber,
} from './Component'


const useStyles = makeStyles(() => ({
    root: {
      marginTop: "10%",
      marginLeft: "50%",
      maxHeight: "600px",
      maxWidth: "430px",
      marginInline: "auto",
    },
    cardContent: {
      textAlignLast: "center",
    },
    creditCard: {
      margin: "2%",
      maxWidth:"200px",
    },
    cvv: {
      margin: "2%",
      maxWidth:"80px",
      right:"109px",
    },
    expirationDate: {
      margin: "2%",
      maxWidth:"140px",
    },
    save: {
      margin: "2%",
      maxWidth:"70px",
      top:"30px",
      left:"100px",
    }
  })
);

const  App = props => {

  const classes = useStyles()
  const {
    creditCard,
    cvv,
    date, 
  } = props
  
  const [creditCardNumber, setCreditCardNumber] = useState(creditCard)
  const [canErrorCreditCardNumber,setCanErrorCreditCardNumber] = useState(undefined)

  const [cardVerificationValue,setCardVerificationValue] = useState(cvv)
  const [canErrorCardVerificationValue,setCanErrorCardVerificationValue] = useState(undefined)
  
  const [expirateDate,setExpirateDate] = useState(date)
  const [canErrorExpirationDate,setCanErrorExpirationDate] = useState(undefined)

  const [canShowConfirmationData, setCanShowConfirmationData] = useState(false)
  
  const [canShowSaveButton, setCanShowSaveButton] = useState(true)
  
  
  // Handle Number Credit Card
  const handleCreditCardNumber = value => {
    setCreditCardNumber(value)
  }

  const handleCanHaveErrorCreditCard = value => {
    setCanErrorCreditCardNumber(value)
  }

  // Handle Card Verification Value
  const handleCardVerifiCationValue = value =>{
    setCardVerificationValue(value)
  }

  const handleCanHaveErrorCardVerificationValue = value => {
    setCanErrorCardVerificationValue(value)
  }

  // Handle Expirate Date
  const handleExpirateDate = value => {
    setExpirateDate(value)
  }

  const handleCanHaveErrorExpirateDate = value => {
    setCanErrorExpirationDate(value)
  }

  // Handle Confirmation Data
  const handleShowConfirmationData = value => {
    setCanShowConfirmationData(value)
  }

  // Handle Save Button
  const fieldError = canErrorCreditCardNumber && canErrorCardVerificationValue && canErrorExpirationDate
  const handleSetShowSaveButton = value => {
    setCanShowSaveButton(value)
  }
  
  return (
    <>
      <Card className={classes.root}>
        
        <CardMedia
          height="200"
          component="img"
          alt="Contemplative Reptile"
          title="Verify Number Card"
          image="https://veja.abril.com.br/wp-content/uploads/2019/01/economia-cartao-de-credito-20170929-004.jpg?quality=70&strip=info&resize=680,453"
          
        />

        <CardContent className={classes.cardContent}>

          <Typography 
            paragraph
            gutterBottom
            variant="h6" 
            component="h2" 
            color="textPrimary"
          >
            Verify Number Credit Card
          </Typography>
          { !canShowConfirmationData &&
            <CreditCardNumber
              className={classes.creditCard} 
              handleCreditCardNumber={handleCreditCardNumber}
              handleCanHaveErrorCreditCard = {handleCanHaveErrorCreditCard}
            />
          }
          { !canShowConfirmationData &&
            <ExpirationDate
              className={classes.expirationDate}
              handleExpirateDate={handleExpirateDate}
              handleCanHaveErrorExpirateDate={handleCanHaveErrorExpirateDate}
            />
          }
          { !canShowConfirmationData &&
            <CVV
              className={classes.cvv}
              handleCardVerifiCationValue={handleCardVerifiCationValue}
              handleCanHaveErrorCardVerificationValue={handleCanHaveErrorCardVerificationValue}
            />
          }
          { canShowConfirmationData && <ConfirmationData/> }
          
          { canShowSaveButton &&
            <SaveButton 
              className={classes.save}
              fieldError={fieldError}
              handleShowConfirmationData={handleShowConfirmationData}
              handleSetShowSaveButton={handleSetShowSaveButton}
              creditCard={creditCardNumber}
              cardVerificationValue={cardVerificationValue}
              date={expirateDate}
            />
          }

        </CardContent>

      </Card>

    </>
  )
}

const mapStateToProps = store => ({
  cvv: store.clickState.cvv,
  date: store.clickState.expirationDate,
  creditCard: store.clickState.creditCardNumber,
})


export default connect (mapStateToProps)(App)

App.propTypes = {
  creditCard: PropTypes.string.isRequired,
  cvv: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired, 
}