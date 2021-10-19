import React from "react"
import {
    Card, 
    CardContent, 
    CardMedia, 
    Typography 
} from '@material-ui/core'
import Enzyme ,{ shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { clickReducer } from "../reducers/clickReducer"; 
import App from '../App'

 
Enzyme.configure({ adapter: new Adapter() })

function createWrapper() {
    const store = createStore( 
        combineReducers({ clickState: clickReducer })
    );
    const props = {
        creditCard:"0000000000000000",
        cvv:"123",
        date:"12/2022",
    }
    const enzymeWrapper = shallow(
        <Provider store={store}>
            <App {...props}/>
        </Provider>
    )

    return {enzymeWrapper, props}
}

xdescribe("App", () => { 
    it("Should return five components in App", () => {
        // const wrapper = shallow(
        //     <Provider store={createTestStore()}>
        //         <App/>
        //     </Provider> 
        // )
        const { enzymeWrapper } = createWrapper()
        const card = enzymeWrapper.find(Card)
        // const cardMedia = card.find(CardMedia)
        // const cardContent = card.find(CardContent)
        // const typography = cardContent.find(Typography)
        // const numberCreditCard = cardContent.find(NumberCreditCard)

        console.log("card ===>>>>>",enzymeWrapper.first().props())
        expect(card).toHaveLength(1)
        // expect(cardMedia).toHaveLength(1)
        // expect(cardContent).toHaveLength(1)
        // expect(typography).toHaveLength(1)
        // expect(numberCreditCard).toHaveLength(1)
    })

    it("Check props in CardMedia", () => {
        const wrapper = shallow(
            <Provider store={createTestStore()}>
                <App/>
            </Provider> 
        )
        const url = "https://veja.abril.com.br/wp-content/uploads/2019/01/economia-cartao-de-credito-20170929-004.jpg?quality=70&strip=info&resize=680,453"
        const card = wrapper.find(Card)
        const cardMedia = card.find(CardMedia)

        expect(cardMedia.props()).toHaveProperty("height","200")
        expect(cardMedia.props()).toHaveProperty("component","img")
        expect(cardMedia.props()).toHaveProperty("alt","Contemplative Reptile")
        expect(cardMedia.props()).toHaveProperty("title","Verify Number Card")
        expect(cardMedia.props()).toHaveProperty("image",url)
    })

    it("Check props in Typography", () => {
        const wrapper = shallow(
            <Provider store={createTestStore()}>
                <App/>
            </Provider> 
        )
        const card = wrapper.find(Card)
        const cardContent = card.find(CardContent)
        const typography = cardContent.find(Typography)  

        expect(typography.props()).toHaveProperty("paragraph",true)
        expect(typography.props()).toHaveProperty("gutterBottom",true)
        expect(typography.props()).toHaveProperty("variant","h6")
        expect(typography.props()).toHaveProperty("component","h2")
        expect(typography.props()).toHaveProperty("color","textPrimary")
    })
})
