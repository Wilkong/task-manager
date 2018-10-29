import React from 'react'
import styles from './css/Checkbox.module.css'
import PropTypes from 'prop-types'

const checkbox = ({ handleChange, defaultChecked, text }) => (
    <label className={styles.checkbox}>                
    <input type="checkbox" 
           onChange={ handleChange } 
           defaultChecked={ defaultChecked }/>
    <i></i>        
    {text && 
        <span>{text}</span> 
    }
  </label>   
)

checkbox.propTypes = {
    handleChange: PropTypes.func.isRequired,
    defaultChecked: PropTypes.bool.isRequired,
    text: PropTypes.string
}

export default checkbox;