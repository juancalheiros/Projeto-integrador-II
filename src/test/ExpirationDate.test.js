import React from 'react'
import Enzyme ,{shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import { ExpirationDate } from '../Component'

Enzyme.configure({ adapter: new Adapter() })

const createWrapper = () => {
    const props = {
        className: {
            margin: "2%",
            maxWidth:"100px",
        },
        handleExpirateDate: jest.fn(),
        handleCanHaveErrorExpirateDate: jest.fn(),
    }
    const wrapper = shallow( <ExpirationDate {...props}/> )
    
    return { wrapper, props }
}

describe("Expiration Date", () => {
    it("Should not return error message when value expiration date is valid", () => {
        const { wrapper } = createWrapper()
        const expirateDate = "12/2021"
        
        wrapper.simulate('change', { target: { value: expirateDate } })

        expect(wrapper.props().helperText).toEqual(" ")
    })

    it("Should return error message when mounth is not valid", () => {
        const { wrapper } = createWrapper()
        const expirateDate = "15/2021"
        
        wrapper.simulate('change', { target: { value: expirateDate } })

        expect(wrapper.props().helperText).toEqual("Mounth invalid ")
    })

    it("Should return error message when year is not valid", () => {
        const { wrapper } = createWrapper()
        const expirateDate = "10"
        
        wrapper.simulate('change', { target: { value: expirateDate } })

        expect(wrapper.props().helperText).toEqual(" Year invalid")
    })

    it("Should return error message when year and mounth is not valid", () => {
        const { wrapper } = createWrapper()
        const expirateDate = "0"
        
        wrapper.simulate('change', { target: { value: expirateDate } })

        expect(wrapper.props().helperText).toEqual("Mounth invalid Year invalid")
    })
})