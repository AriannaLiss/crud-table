import React from "react";
import './CustomInput.css';

const CustomInput = ({
    placeholder,
    handleChange,
    value,
    fieldName
}) => ( <input 
            placeholder={placeholder } 
            onChange={(e)=>handleChange(e,fieldName)} 
            value = {value}
        /> )

export default CustomInput
