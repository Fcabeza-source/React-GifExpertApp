import React from 'react';
import { shallow } from 'enzyme';
import'@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGIfs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {
    

    test('Debe de retonar el estado inicial', async() => {
        
        const { result , waitForNextUpdate} = renderHook( () => useFetchGifs("One Piece") );
        const { data , loading} = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })
    
    test('Debe de retornar un arreglo de imagenes ', async() => {
        
        const { result , waitForNextUpdate } = renderHook( () => useFetchGifs("One Piece") );
        await waitForNextUpdate();

        const { data , loading} = result.current;

        expect( data.length).toBe(10);
        expect( loading ).toBe(false);

        


    });
    
})


