import React, {Component} from 'react'
import {connect} from 'react-redux'

class Input extends Component{
    render(){
        return(
            <div 
                data-test='input-component' 
            >           
                {
                    this.props.success
                    ? null
                    : (
                        <form className='form-inline'>

                            <input 
                                data-test="input-box"
                                className="mb-2 mx-sm-3"
                                type='text'
                                id='word-guess'
                                placeholder='Enter guess'
                            />
                            <button
                                data-test="submit-button"
                                type='submit'
                                className='btn btn-primary mb-2'
                                title='Submit'
                            />
                        </form>
                        
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = ({success})=>{
    return {success}
}

export default connect(mapStateToProps)(Input)