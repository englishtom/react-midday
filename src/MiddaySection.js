import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import requiredIf from 'react-required-if';

const MiddaySection = ({sections, children, tagName, className, id, name}) => {
    
    let data = {};

    if(name) {
        data['data-midday'] = name;
    } else {
        _.forEach(sections, (name, section) => {
            data[`data-${section}`] = name;
        });
    }

    return React.createElement(tagName, {
        ...data,
        className, 
        id
    }, children)
}

MiddaySection.defaultProps = {
    sections: {
        midday: 'default' 
    },
    tagName: 'div'
};

MiddaySection.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: requiredIf(PropTypes.string, props => !props.sections),
    sections: requiredIf(PropTypes.object, props => !props.name),
    tagName: PropTypes.string.isRequired
};

export default MiddaySection;
