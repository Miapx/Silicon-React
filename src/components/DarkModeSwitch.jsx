import React from 'react'

const DarkModeSwitch = () => {
  return (
    <div className="btn-toggle-switch">
        <span className="label">Dark Mode</span>
        <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" />
            <span className="slider"></span>
        </label>
    </div>  
    )
}

export default DarkModeSwitch