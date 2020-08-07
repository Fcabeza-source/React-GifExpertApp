import'@testing-library/jest-dom';
import React from 'react';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGIfs';
jest.mock('../../hooks/useFetchGIfs');




describe('Pruebas en <GifGrid />', () => {
     
    const category = 'One Piece';
    
    test('Debe de hacer match con la snapshot', () => {

        useFetchGifs.mockReturnValue({
            data : [] ,
            loading : true,
        });
        
        const wrapper = shallow(<GifGrid category = { category } />);
        
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar items cuandi se cargan imagenes UseFetchGrids ', () => {
        
        const gifs = [{
            id : 'ABC' ,
            url : 'https://jajduwioauoiud.jpg' , 
            title : 'Cualquier cosa ' 
        }]

        useFetchGifs.mockReturnValue({
            data : gifs ,
            loading : false
        });
        
        const wrapper = shallow(<GifGrid category = { category } />);

        expect(shallow).toMatchSnapshot();
        expect((wrapper).find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe ( gifs.length );


    })
    
})
