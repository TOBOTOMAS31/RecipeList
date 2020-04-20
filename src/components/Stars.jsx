import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../css/stars.css'

function Stars() {
    return (
        <div className="stars">
            <FontAwesome 
                className="stars"
                name="star"
                size="3x"
            />
            <FontAwesome 
                className="stars"
                name="star"
                size="3x"
            />
            <FontAwesome 
                className="stars"
                name="star"
                size="3x"
            />
            <FontAwesome 
                className="stars"
                name="star"
                size="3x"
            />
            <FontAwesome 
                className="stars"
                name="star"
                size="3x"
            />
        </div>
    )
}

export default Stars;