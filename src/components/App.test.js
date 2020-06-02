import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const component = shallow(<App />)

describe('App Component Test', ()=>{
    const person = 'sanjay'
    console.debug()
    component.find('.input-field').simulate('change',{target:{value:person}})
it('Check State', ()=>{
    expect(component.state().fname).toEqual(person)
})

})