import React from 'react';
import './input.module.css';



export const Input = (props) => {
    return( 
        <input type={props.type} placeholder={props.placeholder}  />
    );
};
