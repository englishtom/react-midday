import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const MiddaySection = ({sections, children, tagName, className, id}) => {
    
    let data = {};

    _.forEach(sections, (name, section) => {
        data[`data-${section}`] = name;
    });

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
    sections: PropTypes.object.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    tagName: PropTypes.string.isRequired
};

export default MiddaySection;
