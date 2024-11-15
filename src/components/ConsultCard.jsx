import React, { useState } from 'react'

const ConsultCard = () => {
    const [formData, setFormData] = useState({ name: '', email: '', specialist: '' })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData({...formData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `The ${field} field is required.`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
    }
    
  
    return (
    <div className="consult-card">
    <h2>Get Online Consultation</h2>

    <form onSubmit={handleSubmit} className="consultation" id="consult-form" noValidate>
        <div className="input-group"> 
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} id="fullName" required />
            <p className="invalid-input">{errors.name && errors.name}</p>
        </div>       

        <div className="input-group"> 
            <label htmlFor="appointment-email">Email address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} id="appointment-email" required />
            <p className="invalid-input">{errors.email && errors.email}</p>

        </div>

        <div className="input-group"> 
            <label htmlFor="">Specialist</label>
            <input type="text" name="specialist" value={formData.specialist} onChange={handleChange} id="specialist" required />
            <p className="invalid-input">{errors.specialist && errors.specialist}</p>
        </div>

        <button type="submit" className="btn-primary">Make an appointment</button>
    </form>
</div>
  )
}

export default ConsultCard