import React from 'react'
import FormControl from '@mui/material/FormControl'
import { TextField } from "@mui/material"
import Style from './style.module.scss'

export const FormInputText = ({ style, name, placeholder, value, label, type, disabled, showError, errorMsg, onValueChange, size, variant, className, width }) => {
    return (
        <>    {showError ?
            <FormControl className={className ? className : ""} fullWidth={width == undefined ? true : false} error >
                <TextField
                    error
                    helperText={errorMsg}
                    label={label}
                    name={name}
                    disabled={disabled}
                    size={size ? size : null}
                    placeholder={placeholder}
                    variant={variant ? variant : "standard"}
                    type={type}
                    value={value}
                    onChange={onValueChange} />
            </FormControl>
            :
            < FormControl className={className ? className : ""} fullWidth={width == undefined ? true : false} >
                <TextField
                    style={style}
                    className={Style.commonStyle}
                    label={label}
                    name={name}
                    disabled={disabled}
                    placeholder={placeholder}
                    size={size ? size : null}
                    variant={variant ? variant : "standard"}
                    type={type}
                    value={value}
                    onChange={onValueChange}
                />
            </FormControl>}
        </>
    )
}