import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Midday from 'midday.js'

class MiddayHeader extends Component {

    instance  = null
    container = React.createRef()

    componentDidMount() {
        const {options} = this.props;
        this.instance = new Midday(this.container.current, options)
    }

    componentWillUnmount() {
        // todo
        // unset?
    }

    componentDidUpdate() {
        this.instance.refresh();
    }

    render() {
        const {
            children, 
            className, 
            id,
            tagName, 
        } = this.props;

        return React.createElement(tagName, {
            className, 
            id,
            ref: this.container
        }, children)
    }

}

MiddayHeader.defaultProps = {
    options: {
        defaultClass: 'default',
        headerClass: 'middayHeader',
        innerClass: 'middayInner',
        sectionSelector: 'midday',
    },
    tagName: 'div'
};

MiddayHeader.propTypes = {
    options: PropTypes.shape({
        defaultClass: PropTypes.string,
        headerClass: PropTypes.string,
        innerClass: PropTypes.string,
        sectionSelector: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
    tagName: PropTypes.string.isRequired
};

export default MiddayHeader;
