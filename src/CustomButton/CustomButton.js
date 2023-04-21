import React from "react";
import './CustomButton.css';

const CustomButton = ({
    label = '',
    type = "button",
    disabled = false,
    handleClick = ()=>{},
    classNames = '',
    index = {}
}) => {
    return (
        <button 
            type = {type}
            disabled = {disabled} 
            onClick = {() => handleClick(index)}
            className = {classNames}
        >{label}</button>
    )
}

export default CustomButton;
