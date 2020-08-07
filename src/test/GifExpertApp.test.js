import React from 'react';
import { shallow } from 'enzyme';
import'@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';



describe('Pruebas sobre <GifExpertApp />', () => {
    
    const wrapper = shallow(<GifExpertApp />);

    test('Debe de funcionar correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    })
    
})
