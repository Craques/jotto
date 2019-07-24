import React, {Component} from 'react'
import {connect} from 'react-redux'

class Input extends Component{
    renderContent(){
        return (
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
                >
                    Submit
                </button>
            </form>
            
        )
    }

    render(){
        const {success} = this.props

        return(
            <div 
                data-test='input-component' 
            >           
               {
                   success
                   ? null
                   : this.renderContent()
               } 
            </div>
        )
    }
}

const mapStateToProps = ({success})=>{
    return {success}
}

export default connect(mapStateToProps)(Input)