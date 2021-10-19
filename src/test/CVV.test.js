import React from 'react'
import Enzyme ,{shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import { CVV } from '../Component'

Enzyme.configure({ adapter: new Adapter() })

const createWrapper = () => {
    const props = {
        className: {
            margin: "2%",
            maxWidth:"80px",
            right:"20%",
        },
        handleCardVerifiCationValue: jest.fn(),
        handleCanHaveErrorCardVerificationValue: jest.fn(),
    }
    const wrapper = shallow( <CVV {...props}/> )
    
    return { wrapper, props }
}

describe("CVV", () => {
    it("Should not return error message when value cvv is valid", () => {
        const { wrapper } = createWrapper()
        const cvv = "123"
        
        wrapper.simulate('change', { target: { value: cvv } })

        expect(wrapper.props().helperText).toEqual("")
    })

    it("Should return error message when value cvv is not valid", () => {
        const { wrapper } = createWrapper()
        const cvv = "1"
        
        wrapper.simulate('change', { target: { value: cvv } })

        expect(wrapper.props().helperText).toEqual("Quantity insufficient of number")
    })
})