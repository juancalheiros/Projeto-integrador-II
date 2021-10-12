export const  CREDIT_CARD_NUMBER  = 'CREDIT_CARD_NUMBER'
export const creditCardNumber = value => ({
    type: CREDIT_CARD_NUMBER,
    newValue: value,
})

export const CVV = 'CVV'
export const cvv = value => ({
    type: CVV,
    newValue: value,
})

export const EXPIRATION_DATE = 'EXPIRATION_DATE'
export const expirateDate = value => ({
    type: EXPIRATION_DATE,
    newValue: value,
})
