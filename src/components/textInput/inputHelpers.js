import React from 'react';
import TextInput from "./TextInput";

export const renderTextInput = properties => {
    const {
        name,
        placeholder,
        type,
        pattern,
        className,
        serverError,
        parent,
        label
    } = properties;
    return (
        <TextInput
            name={name}
            placeholder={placeholder}
            label={label}
            className={className}
            serverError={serverError}
            pattern={pattern}
            parent={parent}
            type={type}
        />
    );
}

export default {
    renderTextInput
}