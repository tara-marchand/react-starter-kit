var React = require('react');
var objectAssign = require('object-assign');
var Contractor = require('./Contractor');
var Button = require('./Button');
var ContractorActions = require('../actions/ContractorActions');

var ContractorList = React.createClass({

    componentWillUpdate: function(nextProps, nextState) {
        console.log(nextProps);
    },

    render: function () {
       if (this.props.contractors) {
            var contractorsMarkup = [];

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

            return <div className="panel-body">
                <ul className="list-group contractor-list">
                    {contractorsMarkup}
                </ul>
                <Button text="Load Contractors" onClick={this.props.handleLoadContractorsClick} />
            </div>
       }

        return <div>
            <p>No contractors yet.</p>
            <Button text="Load Contractors" onClick={this.props.handleLoadContractorsClick} />
        </div>
    }

});

module.exports = ContractorList;
