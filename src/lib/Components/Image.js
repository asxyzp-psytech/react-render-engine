//IMPORTING MODULES/PACKAGES
import React from 'react';
import "../Styles/style.css";
import PropTypes from 'prop-types';

/**
 * FUNCTION: Image COMPONENT
 * FUNCTIONALITY: COMPONENT FOR IMAGE ELEMENT IN CARD 
 * @param {Object} props : COMPONENT PROPS
 * @returns <Image/> (JSX)
 */
const Image = (props) => {

    //VARIABLES
    //GETTING PROP VALUES
    const id = props.id;
    const template = props.template;
    const inputStyle = props.inputStyle;

    //GETTING ELEMENT
    const element = template.element[id];                                                 //ID OF THE CONTAINER ELEMENT

    //GETTING ELEMENT STYLES
    const textStyleId = element.text;                                                     //ID OF TEXT STYLE ELEMENT
    const designStyleId = element.design;                                                 //ID OF DESIGN STYLE ELEMENT
    const textStyle = template.design[textStyleId];                                       //TEXT STYLE OBJECT
    const designStyle = template.design[designStyleId];                                   //DESIGN STYLE OBJECT
    const styles = { ...inputStyle, ...textStyle, ...designStyle };                       //CONTAINER STYLE = (INPUT + TEXT + DESIGN) STYLE OBJECT

    //GETTING ELEMENT PROPERTIES (CLASSES & ATTRIBUTES)
    const properties = element['properties'];                                             //CONTAINS CLASSES AND ATTRIBUTES
    const classes = properties.filter(property => !property.includes("=")).join(' ');     //STORES CLASSES OF CONTAINER ELEMENT: ['a', 'b', 'c=d'] => 'a b'
    const alt = properties.filter(property => property.includes("alt")).length===0?'':properties.filter(property => property.includes("alt"))[0].split('=')[1]; //GETTING ALT ATTRIBUTE's VALUE
    const src = properties.filter(property => property.includes("src")).length===0?'':properties.filter(property => property.includes("src"))[0].split('=')[1]; //GETTING SRC ATTRIBUTE's VALUE

    //METHODS
    /**
     * FUNCTION : changeSrc(event)
     * FUNCTIONALITY : CHANGING IMAGE SOURCE TO DEFAULT IMAGE SOURCE VALUE
     * @param {*} event : event OBJECT
     * RETURN : UNDEFINED
     */
     const changeSrc =(event) =>{
        event.target.src="https://i.ibb.co/HBYg58n/psytech-err-img.png";
    };

    return (
        <img 
            src={src} 
            alt={alt} 
            style={styles}
            className={classes} 
            onError={changeSrc}/>
    );
}

//DEFINING DEFAULT PROPS
Image.defaultProps = {
    inputStyle: {}
};

//DEFINING PROP TYPES
Image.propTypes = {
    id: PropTypes.string,
    template: PropTypes.object,
    inputStyle: PropTypes.object
};

export default Image;