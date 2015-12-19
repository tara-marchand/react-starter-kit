import React from 'react';
import objectAssign from 'object-assign';
import ContractorActions from '../actions/contractors';
import Contractor from './Contractor';
import Button from './Button';
import Spinner from './Spinner';

class ContractorList extends React.Component {
    render() {
       if (this.props.contractors) {
            var contractorsMarkup = [];
            var spinnerMarkup = '';

            for (var id in this.props.contractors) {
                if (this.props.contractors.hasOwnProperty(id)) {
                    var contractor = this.props.contractors[id];

                    contractorsMarkup.push(<Contractor key={id}
                        contractor={contractor}
                        handleNameClick={this.props.handleNameClick.bind(null, id)}
                        handleDeleteButtonClick={this.props.handleDeleteButtonClick.bind(null, id)}
                    />);
                }
            }

            if (this.props.firebase.isFetching) {
                spinnerMarkup = <Spinner isFetching={this.props.firebase.isFetching} />;
            } else {
                spinnerMarkup = '';
            }

            return <div className="panel-body">
                {spinnerMarkup}
                <ul className="list-group contractor-list">
                    {contractorsMarkup}
                </ul>
            </div>
       }
    }
}

export default ContractorList;
