import React from 'react'
import Enzyme ,{shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import { CreditCardNumber } from '../Component'

Enzyme.configure({ adapter: new Adapter() })

const createWrapper = () => {
    const props = {
        className: {
            margin: "2% 7% 2% 2%",
            maxWidth:"170px",
        },
        handleCreditCardNumber: jest.fn(),
        handleCanHaveErrorCreditCard: jest.fn(),
    }
    const wrapper = shallow( <CreditCardNumber {...props}/> )
    
    return { wrapper, props }
}

describe("NumberCreditCard", () => {

    it("Should not return error message when value credit card number is valid", () => {
        const { wrapper } = createWrapper() 
        const creditCardNumber = "0000000000000000"
        
        wrapper.simulate('change', { target: { value: creditCardNumber } })

        expect(wrapper.props().helperText).toEqual("") 
    })

    it("Should return error message when value credit card number not is valid", () => {
        const { wrapper } = createWrapper() 
        const creditCardNumber = "1002003003000000"
        
        wrapper.simulate('change', { target: { value: creditCardNumber } })

        expect(wrapper.props().helperText).toEqual("Number credit card invalid") 
    })
})