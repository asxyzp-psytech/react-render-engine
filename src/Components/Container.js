//IMPORTING MODULES/PACKAGES
import React from 'react'

/**
 * FUNCTION: Container COMPONENT
 * FUNCTIONALITY: POST CARD CONTAINER ELEMENT
 * @param {Object} props : COMPONENT PROPS
 * @returns <Container/> (JSX)
 */
const Container = (props) => {

    //CONTAINS STYLES FOR THE ELEMENT
    let elementStyle ={
        zIndex: props.zIndex,
    };

    return (
        <div style={elementStyle}>

        </div>
    );
};

export default Container;