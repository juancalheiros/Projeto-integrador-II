import { 
    CREDIT_CARD_NUMBER,
    CVV,
    EXPIRATION_DATE
} from '../actions'

const initialState = {
    cvv: null,
    expirationDate: null,
    creditCardNumber: null,
}

export const clickReducer = (state = initialState, action) => { 
    switch (action.type) {
 
        case CREDIT_CARD_NUMBER:
            return {
                ...state,
                creditCardNumber: action.newValue,
            }
        
        case CVV:
            return {
                ...state,
                cvv: action.newValue,
            }

        case EXPIRATION_DATE:
            return {
                ...state,
                expirationDate: action.newValue,
            }


        default:
            return state
    }
};