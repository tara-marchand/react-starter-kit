import React from 'react';

class PaginationItem extends React.Component {
    constructor() {
        super();
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        var innerText = '';
        var ariaLabel = '';

        switch (this.props.type) {
            case 'number':
                if (this.props.number) {
                    innerText = this.props.number;
                    ariaLabel = 'Page ' + this.props.number;
                }
            break;
            case 'previous':
                innerText = '&laquo;';
                ariaLabel = 'Previous';
            break;
            case 'next':
                innerText = '&raquo;';
                ariaLabel = 'Next';
            break;
            default:
            break;
        }

        return <li>
            <a href="#" aria-label={ariaLabel}>
                <span aria-hidden="true">{innerText}</span>
            </a>
        </li>
    }
}

PaginationItem.propTypes = {
    type: React.PropTypes.oneOf(['previous', 'next', 'number']), // prevous, next, number
    number: React.PropTypes.number
}

PaginationItem.defaultProps = {
    type: 'number',
    number: ''
}

export default PaginationItem;
