import React from 'react'

const FeatureBox = ({item}) => {
    return (
        <div className="feature">
            <img className="icon" src={item.imageUrl} alt={item.imageAlt} />
            <div className="featurestext">  
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>                    
        </div>
    )
}

export default FeatureBox