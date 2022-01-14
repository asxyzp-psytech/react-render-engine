//IMPORTING MODULES/PACKAGES
import React from 'react'

/**
 * FUNCTION: Text COMPONENT
 * FUNCTIONALITY: COMPONENT FOR TEXT ELEMENT IN CARD
 * @param {Object} props : COMPONENT PROPS
 * @returns <Text/> (JSX)
 */
const Text = (props) => {

    //CONTAINS STYLES FOR THE ELEMENT
    let elementStyle ={
        zIndex: props.zIndex,
    };

    return (
        <div style={elementStyle}>
            
        </div>
    );
};

export default Text;