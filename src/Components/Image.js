//IMPORTING MODULES/PACKAGES
import React from 'react';

/**
 * FUNCTION: Image COMPONENT
 * FUNCTIONALITY: COMPONENT FOR IMAGE ELEMENT IN CARD 
 * @param {Object} props : COMPONENT PROPS
 * @returns <Image/> (JSX)
 */
const Image = (props) => {

    //CONTAINS STYLES FOR THE ELEMENT
    let elementStyle ={
        zIndex: props.zIndex,
    };

    return (
        <div style={elementStyle}>
            
        </div>
    );
}

export default Image;