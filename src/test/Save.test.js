import React from 'react'
import Enzyme ,{shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { SaveButton } from '../Component'
import { createStore, combineReducers } from 'redux'
import { clickReducer } from "../reducers/clickReducer"; 

Enzyme.configure({ adapter: new Adapter() })


const createWrapper = () => {
    const store = createStore( 
        combineReducers({ clickState: clickReducer })
    );

    const props = {
        className: {
            margin: "2%",
            maxWidth:"70px",
            top:"30px",
            left:"10%",
        },
        handleExpirateDate: jest.fn(),
        handleCanHaveErrorExpirateDate: jest.fn(),
        date:"12/2021",
        dispatch: jest.fn(),
        creditCard:"0000000000000000",
        fieldError: false,
        cardVerificationValue: "123",
        handleSetShowSaveButton: jest.fn(),
        handleShowConfirmationData: jest.fn(),
    }
    const wrapper = shallow( 
        <Provider store={store}>
            <SaveButton {...props}/>
        </Provider>
    )
    
    return { wrapper, props }
}

describe("Save Button ", () => {
    it("Should not return error message when value expiration date is valid", () => {
        const { wrapper,props } = createWrapper()
        
        expect(props.dispatch).toHaveBeenCalledTimes(0)

        wrapper.simulate('click')

        expect(props.dispatch).toHaveBeenCalledTimes(1)
    })
})