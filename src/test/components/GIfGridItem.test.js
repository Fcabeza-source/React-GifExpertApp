import "@testing-library/jest-dom";
import React from 'react';
import { shallow } from "enzyme";

import { GifGridItem } from "../../components/GifGridItem";



describe('Pruebas en GifGridGItem.js', () => {


    const title = "Un titulo";
    const url = "https://fnnafonasnfosa/algo.jpg"
    const wrapper = shallow(<GifGridItem title={title} url={url} />);


    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de tener un parrafo con title', () => {

        const  p = wrapper.find("p");
        expect( p.text().trim() ).toBe( title );
        
    })
    
    test('Debe de obtener la imagen ', () => {
        
        const img = wrapper.find("img");
        expect( img.prop("src")).toBe(url);
        expect( img.prop("alt")).toBe(title);

    })

    test('Debe tener animate_fadeIn ', () => {

        const div = wrapper.find("div");
        expect (div.prop("className")).toContain("animate__fadeIn");

    })
    
    




})
