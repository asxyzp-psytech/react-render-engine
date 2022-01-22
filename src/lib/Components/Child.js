//IMPORTING MODULES/PACKAGES
import React from 'react';
import Text from './Text';
import Image from './Image';
import PropTypes from 'prop-types';
import Container from './Container';

/**
 * FUNCTION: Child COMPONENT
 * FUNCTIONALITY : RENDERS A CHILD COMPONENT
 * @param {*} props PROPERTIES OF THE CHILD COMPONENT
 * @returns <Child/> (JSX)
 */
const Child = (props) => {

    //VARIABLES
    //GETTING PROP VALUES
    const id = props.id;
    const template = props.template;
    const inputStyle = props.inputStyle;

    //RETURNING APPROPRIATE COMPONENT BASED ON TYPE
    if (template.element[id].type === "container") {
        return (<Container id={id} template={template} inputStyle={inputStyle} />);
    }
    else if (template.element[id].type === "image") {
        return (<Image id={id} template={template} inputStyle={inputStyle} />);
    }
    else if (template.element[id].type === "text") {
        return (<Text id={id} template={template} inputStyle={inputStyle} />);
    }
};

//DEFINING DEFAULT PROPS
Child.defaultProps = {
    inputStyle: {}
};

//DEFINING PROP TYPES
Child.propTypes = {
    id: PropTypes.string.isRequired,
    template: PropTypes.object.isRequired,
    inputStyle: PropTypes.object
};

export default Child;
