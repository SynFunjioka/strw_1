/* 'use client'
import { ChangeEvent, useState } from "react";
import iInputProps from "@/interfaces/components/InputProps";

function Input(props:iInputProps) {
    let { type, id, name, value, autoComplete, required } = props;

    const [inputValue, setInputValue] = useState(value || '');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        console.log('Te value of input', newValue);
        setInputValue(newValue);
        // onChange(newValue);
    };
    
    return(
        <input 
            id={ id }
            type={ type }
            name={ name }
            autoComplete={ autoComplete }
            required={ required }
            value={ inputValue }
            onChange={handleInputChange}
        />
    );
}

export default Input; */