const { shallow } = require("enzyme")
import React from 'react';
const { AddCategory } = require("../../components/AddCategory")
import"@testing-library/jest-dom";




describe('Pruebas en <AddCategory />', () => {

    const setCategories = () => {};
    
    
    
    test('Debe de mostrarse correctamente ', () => {
        
        const wrapper = shallow(<AddCategory setCategories={setCategories} />);

        expect(wrapper).toMatchSnapshot();


    })
    
})





