import React from 'react'

const Inputfield = ({label, type, name, placeholder, value, onChange}) => {
    return (
        <div>
            <label>{label}</label>
            <br/>
            <input type = {type}
                    name = {name}
                    placeholder= {placeholder}
                    value = {value}
                    onChange={onChange} />
        </div>
      )

}

export default Inputfield
