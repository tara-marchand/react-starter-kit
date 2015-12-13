var React = require('react');
var objectAssign = require('object-assign');
var ContractorActions = require('../actions/contractors');
var Contractor = require('./Contractor');
var Button = require('./Button');
var Spinner = require('./Spinner');

var ContractorList = React.createClass({

    render: function () {
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

            if (this.props.isFetching) {
                spinnerMarkup = <Spinner isFetching={this.props.isFetching} />;
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

});

module.exports = ContractorList;
