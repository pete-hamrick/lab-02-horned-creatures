import React, { Component } from 'react'

class Dropdown extends Component {
    state = {  }
    render() { 
        const { changeEvent, options, label } = this.props;
        return ( 
            <div className='dropdown-container'>
                <label>{label}</label>
                <select onChange={changeEvent}>
                    {options.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
         );
    }
}
 
export default Dropdown;