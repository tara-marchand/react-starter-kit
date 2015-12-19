import React from 'react';
import ContractorActions from '../actions/contractors';
import Button from './Button';

class Contractor extends React.Component {
    render() {
        return <li className="list-group-item">
            <a href={this.props.contractor.url}
                target="_blank"
                onClick={this.props.handleNameClick}
                className={this.props.contractor.viewState}>
                    {this.props.contractor.name}
            </a>
            <Button text="Delete"
                onClick={this.props.handleDeleteButtonClick}
            />
        </li>
    }
}

Contractor.propTypes = {
    contractor: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        url: React.PropTypes.string,
        viewState: React.PropTypes.oneOf(['display', 'edit', 'add'])
    }).isRequired
};

Contractor.defaultProps = {
    viewState: 'display'
};

export default Contractor;
