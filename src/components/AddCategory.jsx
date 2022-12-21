import { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from '@mui/material'

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('')

    const onChange = ({ target }) => {     // event.target
        setInputValue( target.value )      // event.target.value
    }

    const onSubmit = ( ev ) => {
        ev.preventDefault()
        const value = inputValue.trim()
        if( value.length <= 1 ) return    // validation

        setInputValue('')                 // clear text box
        onNewCategory( value )
    }

    return (
        <form onSubmit = { onSubmit } aria-label='form'>        {/* (ev) => onSubmit(ev) */}
            <Input
                fullWidth 
                type        = "text"
                placeholder = "Buscar gifs"
                value       = { inputValue }
                onChange    = { onChange }  
                sx          = {{ margin: '20px 0', padding:'10px' }}
            />
        </form>   
    )
}


AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired
}