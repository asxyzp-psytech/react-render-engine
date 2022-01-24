//IMPORTING MODULES/PACKAGES
import React from 'react';
import "../Styles/style.css";
import PropTypes from 'prop-types';

/**
 * FUNCTION: Text COMPONENT
 * FUNCTIONALITY: COMPONENT FOR TEXT ELEMENT IN CARD
 * @param {Object} props : COMPONENT PROPS
 * @returns <Text/> (JSX)
 */
const Text = (props) => {

    //VARIABLES
    //GETTING PROP VALUES
    const id = props.id;
    const template = props.template;
    const inputStyle = props.inputStyle;

    //GETTING ELEMENT
    const element = template.element[id];                                              //ID OF THE CONTAINER ELEMENT

    //GETTING ELEMENT STYLES
    const textStyleId = element.text;                                                  //ID OF TEXT STYLE ELEMENT
    const designStyleId = element.design;                                              //ID OF DESIGN STYLE ELEMENT
    const textStyle = template.text[textStyleId];                                      //TEXT STYLE OBJECT
    const designStyle = template.design[designStyleId];                                //DESIGN STYLE OBJECT
    const styles = { ...inputStyle, ...textStyle, ...designStyle };                    //CONTAINER STYLE = (INPUT + TEXT + DESIGN) STYLE OBJECT

    //GETTING ELEMENT PROPERTIES (CLASSES)
    const properties = element['properties'];                                          //CONTAINS CLASSES AND ATTRIBUTES
    const classes = properties.filter(property => !property.includes("=")).length>0?
                    properties.filter(property => !property.includes("=")).join(' '):'';  //STORES CLASSES OF CONTAINER ELEMENT: ['a', 'b', 'c=d'] => 'a b'

    //GETTING LIST OF CHILDREN OF THE ELEMENT;
    const child = element.children.length>0?element.children[0]:'';

    return (
        <div style={styles}
            className={classes}
            //SECURITY RISK: NEED TO CHANGE THIS TO INCLUDE ICON ELEMENT
            dangerouslySetInnerHTML={{ __html: child }}></div>

    );
};

//DEFINING DEFAULT PROPS
Text.defaultProps = {
    inputStyle: {}
};

//DEFINING PROP TYPES
Text.propTypes = {
    id: PropTypes.string,
    template: PropTypes.object,
    inputStyle: PropTypes.object
};

export default Text;