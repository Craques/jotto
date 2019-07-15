import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional react component
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component or null if success prop is true
 */
const Congrats = (props)=>{
    
    if(props.success){
        return(
        <div data-test='congrats-component' className='alert alert-success'>
            <p data-test='congrats-message'>
                Congratulations! You guessed it
            </p>
        </div>)
    }else{
        return(
            <div data-test='congrats-component'/>
        )
    }
    
}

Congrats.propTypes ={
    success: PropTypes.bool.isRequired
}

export default Congrats