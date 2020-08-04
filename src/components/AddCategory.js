import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("Ingrese la serie busqueda...");

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue("");
        }
    };

    const handleErrase = (e) => {
            setInputValue(e.value="");
        }


    return (

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onClick={handleErrase}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired ,
}
