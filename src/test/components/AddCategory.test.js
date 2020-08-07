const { shallow } = require("enzyme")
import React from 'react';
const { AddCategory } = require("../../components/AddCategory")
import"@testing-library/jest-dom";




describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    
    beforeEach( () =>{
        jest.clearAllMocks();
        
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    } );
    
    
    test('Debe de mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find("input");
        const value = "Hola Mundo"; 

        input.simulate("change" , { target : { value }});
        
    })


    test('NO debe de postearla informaciòn en el submit', () => {
        
        wrapper.find('form').simulate('submit' , { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    }) 
    
    test('Debe de llamar el setCategories y limpiar la caja de texto ', () => {

        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change' , { target : { value }});
        //2.Simular submit 
        wrapper.find('form').simulate( 'submit' , { preventDefault(){} });
        //3.setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();
        //4-el valor del input debe de estar como ''
        expect(wrapper.find('input').prop('value')).toBe('');
        
    })
    
    
})





